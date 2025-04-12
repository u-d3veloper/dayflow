import os
from mistralai import Mistral
import Prompt 
import json
import re

api_key = os.environ["MISTRAL_API_KEY"]
model = "mistral-large-latest"

client = Mistral(api_key=api_key)

def useOrganize(tasks, timetable):
    # Passer tasks et timetable comme arguments nommés
    prompt = Prompt.Prompt(choice="organize", tasks=tasks, timetable=timetable)
    message = [
        {
            "role": "user",
            "content": prompt.generate()
            
        }
    ]
    chat_response = client.chat.complete(
        model= model,
        messages = message,
        response_format = {
          "type": "json_object",
      }
    )

    return ParseModelResponse(chat_response.choices[0].message.content.strip())

def usePlan(specifications):
    # Passer specifications comme argument nommé
    prompt = Prompt.Prompt(choice="plan", tasks=specifications)
    message = [
        {
            "role": "user",
            "content": prompt.generate()
        }
    ]
    completion = client.chat.complete(
        model= model,
        messages = message,
        response_format = {
          "type": "json_object",
      }
    )

    return ParseModelResponse(chat_response.choices[0].message.content.strip())

def ParseModelResponse(response):
    # Supprimer tout ce qui n'est pas JSON
    result_content = response.replace("json\n", "").replace("```json", "").replace("```", "")

    # Supprimer les sauts de ligne parasites
    result_content = re.sub(r'\s+', ' ', result_content).strip()

    try:
        data = json.loads(result_content)
    except json.JSONDecodeError as e:
        print("JSON ERROR:", e)

    return data
