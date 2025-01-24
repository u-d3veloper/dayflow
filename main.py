from package.Parser import Parser
from package.JsonCalendar import JsonCalendar
from prompt import Prompt
from transformers import LlamaTokenizer, LlamaForCausalLM
import torch

def main():
    # Parsing du fichier .ics
    parser = Parser('calendar.ics')
    data = parser.parse()
    json_calendar = JsonCalendar(data)
    json_calendar.write_json_file()
    
    # Préparer le prompt
    prompter = Prompt(json_calendar.get_events_from_date('2025-01-23'), {
        "Name": "Aller chercher du courrier", 
        "heure": "20:00", 
        "duree": "00:30", 
        "location": "Home"
    })
    prompter.generate()
    prompt = prompter.get()
    print(prompt)

if __name__ == '__main__':
    main()
