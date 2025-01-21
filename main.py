from package.Parser import Parser
from package.JsonCalendar import JsonCalendar

def main():
    parser = Parser('calendar.ics')  # Variable renommée pour éviter la collision
    data = parser.parse()
    json_calendar = JsonCalendar(data)  # Variable renommée
    json_calendar.writeJsonFile()

if __name__ == '__main__':
    main()