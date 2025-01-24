class Prompt : 
    def __init__(self, timetable, tasks) : 
        self.prompt = ""
        self.timetable = timetable
        self.tasks = tasks

    def get(self) : 
        return self.prompt

    def set(self, prompt) : 
        self.prompt = prompt
        
    def generate(self): 
        self.prompt = f""" 
        Interpolate the two task into this timetable trying to respect the time needed for each task, knowing that the 
        timetable start at 8:00 and end at 18:20. Return the timetable with the tasks interpolated or putted after or before the timetable under a Json format following this structure 

            Name : "The name here",
            Start : "YYYY-MM-DDTHH:MM",
            End : "YYYY-MM-DDTHH:MM",
            location : "Home"
            Description : "The description here"
        
        with the following timetable : {self.timetable}
        and the following tasks : {self.tasks}
        """
        