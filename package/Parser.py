from icalendar import Calendar
from datetime import datetime
from pytz import UTC  # timezone

class Parser:
    def __init__(self, filename):
        self.filename = filename
        self.data = {}

    def openStream(self):
        with open('src/'+ self.filename, 'rb') as stream:
            calendar = Calendar.from_ical(stream.read())
        return calendar
    
    def extract_event(self, component):
        # Conversion des dates en format ISO 8601 (si présentes)
        dtstart = component.get('dtstart').dt if component.get('dtstart') else None
        dtend = component.get('dtend').dt if component.get('dtend') else None
        dtstamp = component.get('dtstamp').dt if component.get('dtstamp') else None

        event = {
            "summary": component.get('summary'),
            "dtstart": dtstart.isoformat() if isinstance(dtstart, datetime) else dtstart,
            "dtend": dtend.isoformat() if isinstance(dtend, datetime) else dtend,
            "dtstamp": dtstamp.isoformat() if isinstance(dtstamp, datetime) else dtstamp,
            "location": component.get('location'),
            "description": component.get('description')
        }

        uid = component.get('uid')

        return uid, event
    
    def parse(self):
        calendar = self.openStream()
        for component in calendar.walk():
            if component.name == "VEVENT":
                uid, event = self.extract_event(component)
                self.data[uid] = event
        return self.data