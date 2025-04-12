class Prompt:
    def __init__(self, choice, **kwargs):
        # Init prompt string
        self.prompt = ""
        self.option = choice

        # Init arguments for the prompt
        if choice == "organize":
            if kwargs.get("timetable") and kwargs.get("tasks"):
                self.timetable = kwargs.get("timetable")
                self.tasks = kwargs.get("tasks")
            else:
                raise ValueError("Missing arguments for 'organize'")
        elif choice == "plan":
            if kwargs.get("tasks"):
                self.tasks = kwargs.get("tasks")
            else:
                raise ValueError("Missing arguments for 'plan'")
        else:
            raise ValueError("Invalid choice")

    def get(self):
        return self.prompt

    def set(self, prompt):
        self.prompt = prompt

    def getAll(self):
        return {
            "organizer": self.organize(self.tasks, self.timetable),
            "planner": self.plan(self.tasks)
        }

    def organize(self, tasks, timetable):
        return f'''Distribute the given tasks into the provided timetable while ensuring that each task is placed in a suitable time slot based on its required duration. The organization must follow these rules:
        - The day starts at **7:30 AM**, so no task should be scheduled before this time.
        - Prioritize placing tasks **after the last scheduled course** when possible, as homework is usually done at the end of the day.
        - If a task cannot fit after the last course, place it in an available time slot where no events are scheduled.
        - If necessary, schedule tasks **before the first course**, but never before 7:30 AM.
        - Ensure that tasks are interpolated optimally while respecting their duration.
        - A non-scholar task would be more suitable after the courses and before the homework to help make pauses.
        - Both the timetable elements and tasks elements should be returned.
        - If no suitable time slot is available, append the task **immediately after the last event of the day**.
        - Do **not** include any explanation or reasoning—only return the structured JSON response.
        
        Return the updated timetable in JSON format, strictly following this structure:
        {{
            "Name": "The task name here",
            "Start": "YYYY-MM-DDTHH:MM",
            "End": "YYYY-MM-DDTHH:MM",
            "Location": "Home",
            "Description": "The task description here"
        }}
        

        **Input Data:**

        - **Timetable:** {timetable}
        - **Tasks:** {tasks}'''

    def plan(self, tasks):
        return f'''Given the following tasks, plan a suitable timetable for the day. The plan must follow these rules:
        - The day starts at **7:30 AM**, so no task should be scheduled before this time.
        - The day ends at **6:00 PM**, so no task should be scheduled after this time.
        - Ensure that tasks are interpolated optimally while respecting their duration.
        - A non-scholar task would be suitable as a break between two long runs of tasks.
        - 5 minutes break between each task is mandatory.
        - Alternate between subjects to avoid mental fatigue.
        Return the updated timetable in JSON format, strictly following this structure:
        {{
            "Name": "The task name here",
            "Duration": "The task duration in minutes",
            "Description": "The task description here"
        }}
        Do **not** include any explanation or reasoning—only return the structured JSON response.

        **Input Data:**

        - **Tasks:** {tasks}'''

    def generate(self):
        if self.option == "organize":
            self.set(self.organize(self.tasks, self.timetable))
        elif self.option == "plan":
            self.set(self.plan(self.tasks))

        return self.get()
