from fastapi import FastAPI, Request, Depends

import Models
import Client
import Prompt
import os

# Configurations initiales
app = FastAPI()

@app.post("/organize")
def organize(data: Models.OrganizeRequest):
    timetable = data.timetable
    tasks = data.tasks
    try:
        result = Client.useOrganize(tasks, timetable)
    except Exception as e:
        return {"message": f"An error occured: {e}"}
    return {"message": result}

@app.post("/plan")
def plan(data: Models.PlanRequest):
    specifications = data.specifications
    try:
        result = Client.usePlan(tasks)
    except Exception as e:
        return {"message": f"An error occured: {e}"}
    return {"message": result}

@app.get("/prompts")
def list_prompt():
    return {"message": Prompt.Prompt().getAll() }
