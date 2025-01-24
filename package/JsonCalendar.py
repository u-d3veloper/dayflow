import json

class JsonCalendar:
    def __init__(self, data):
        self.data = data

    def write_json_file(self, filename='src/data.json'):
        with open(filename, "w", encoding="utf-8") as fichier:
            json.dump(self.data, fichier, indent=4, ensure_ascii=False)  # Correction ici

    @staticmethod
    def read_json_file(filename='src/data.json'):
        with open(filename, "r", encoding="utf-8") as fichier:
            return json.load(fichier)

    @staticmethod
    def get_event(uid):
        data = JsonCalendar.read_json_file()
        return data.get(uid)

    @staticmethod
    def get_events():
        data = JsonCalendar.read_json_file()
        return data
    
    @staticmethod
    def get_events_from_date(date):
        events = JsonCalendar.get_events()
        return {uid: event for uid, event in events.items() if JsonCalendar.extract_day(event) == date}
    
    @staticmethod
    def extract_day(event):
        dtstart, _, _ = JsonCalendar.extract_dates(event)  # Fonction extract_dates nécessaire
        return dtstart.split('T')[0]
    
    @staticmethod
    def extract_dates(event):
        # Implémentez cette méthode pour extraire les dates de l'événement
        # Exemple fictif :
        dtstart = event.get("dtstart", "")
        dtend = event.get("dtend", "")
        duration = event.get("duration", "")
        return dtstart, dtend, duration
