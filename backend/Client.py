from groq import Groq
import Prompt
import json
import re

client = Groq()

def useOrganize(tasks, timetable):
    prompt = Prompt.Prompt(tasks, timetable,choice="organize")
    message = [
            {
                "role": "user",
                "content": prompt.generate()
            }
    ]
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=message,
        temperature=1,
        max_completion_tokens=1024,
        top_p=1,
        stream=False,
        stop=None,
    )

    return ParseModelResponse(completion.choices[0].message.content.strip())

def useOrganize(specifications):
    prompt = Prompt.Prompt(specifications,choice="plan")
    message = [
            {
                "role": "user",
                "content": specifications.generate()
            }
    ]
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=message,
        temperature=1,
        max_completion_tokens=1024,
        top_p=1,
        stream=False,
        stop=None,
    )

    return ParseModelResponse(completion.choices[0].message.content.strip())

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