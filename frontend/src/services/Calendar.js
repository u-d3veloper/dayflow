import ICAL from "ical.js";

function getJCalObject (calendar) {
    var jcalData = ICAL.parse(calendar);
    return new ICAL.Component(jcalData);
}
export function getEventList(root) {
    return root.getAllSubcomponents("vevent");
}
export function getEventProperties(event) {
    var eventProperties = {
        start: event.getFirstPropertyValue("dtstart").toString(),
        end: event.getFirstPropertyValue("dtend").toString(),
        summary: event.getFirstPropertyValue("summary"),
        description: event.getFirstPropertyValue("description"),
        location: event.getFirstPropertyValue("location"),
        date: event.getFirstPropertyValue("dtstart").toString().split("T")[0],
    };
    return eventProperties;
}

export function getCalendar(calendar) {
    var root = getJCalObject(calendar);
    var events = getEventList(root);
    var formatCalendar = []
    events.forEach((event) => {
        var props = getEventProperties(event)
        // console.log(props);
        formatCalendar.push(props);
    });
    return formatCalendar;
}

export function retrieveDayCalendar(calendar, target) {
    var calendar = getCalendar(calendar);
    var dayCalendar = [];

    calendar.forEach((event) => {
        console.log(target.toISOString().split("T")[0]);
        console.log(event.date);
        if (event.date=== target.toISOString().split("T")[0]) {
            dayCalendar.push(event);
        }
    });
    return dayCalendar;
}