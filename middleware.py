from groq import Groq

client = Groq()
completion = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {
            "role": "user",
            "content": "Interpolate the two task into this timetable trying to respect the time needed for each task. Put the task in the best time slot before the first course, after the last one, or in a sufficient slot where there is nothing. Return the timetable with the tasks interpolated or putted right-after under a Json format following this structure. I just want an answer (organization) without the process.\n\n            Name : \"The name here\",\n            Start : \"YYYY-MM-DDTHH:MM\",\n            End : \"YYYY-MM-DDTHH:MM\",\n            location : \"Home\"\n            Description : \"The description here\"\n        \n        with the following timetable : {'ADE60323032342d323032352d31323839352d302d31': {'summary': 'Facteurs humains et ingénierie cognitique', 'dtstart': '2025-01-23T10:00:00+00:00', 'dtend': '2025-01-23T11:20:00+00:00', 'dtstamp': '2025-01-23T15:03:13+00:00', 'location': 'CA-N103', 'description': '\\n\\nCO8SCFH0\\nCM\\n2A Tronc commun\\nFacteurs humains et ingénierie cognitique\\nSALOTTI Jean-Marc\\n(Exporté le:23/01/2025 16:03)\\n'}, 'ADE60323032342d323032352d31323838392d302d31': {'summary': \"Enjeux de l'entreprise\", 'dtstart': '2025-01-23T08:30:00+00:00', 'dtend': '2025-01-23T09:50:00+00:00', 'dtstamp': '2025-01-23T15:03:13+00:00', 'location': 'CA-N103', 'description': \"\\n\\nCO8INMN0\\nCI\\n2A Tronc commun\\nEnjeux de l'entreprise\\n* BARBAT * Guillaume\\n(Exporté le:23/01/2025 16:03)\\n\"}, 'ADE60323032342d323032352d31323838392d302d30': {'summary': \"Enjeux de l'entreprise\", 'dtstart': '2025-01-23T07:00:00+00:00', 'dtend': '2025-01-23T08:20:00+00:00', 'dtstamp': '2025-01-23T15:03:13+00:00', 'location': 'CA-N103', 'description': \"\\n\\nCO8INMN0\\nCI\\n2A Tronc commun\\nEnjeux de l'entreprise\\n* BARBAT * Guillaume\\n(Exporté le:23/01/2025 16:03)\\n\"}}\n        and the following tasks : {'Name': 'Aller chercher du courrier', 'heure': '20:00', 'duree': '00:30', 'location': 'Home'}"
        }
    ],
    temperature=1,
    max_completion_tokens=1024,
    top_p=1,
    stream=True,
    stop=None,
)

for chunk in completion:
    print(chunk.choices[0].delta.content or "", end="")
