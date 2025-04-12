export default function getDayOptimization(timetable, tasks) {
    let timetableArray = [];
    let tasksArray = [];

    try {
        timetableArray = JSON.parse(timetable);
        tasksArray = JSON.parse(tasks);
    } catch (e) {
        console.error("Error parsing JSON:", e);
        return Promise.reject(new Error("Invalid JSON input"));
    }
    // Remplacer 'summary' par 'name' dans timetable
    const url = "http://localhost:8000/organize";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            timetable: timetableArray,
            tasks: tasksArray,
        }),
    };

    return fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => data.message)
        .catch((error) => console.error("Error:", error));
}
