from pydantic import BaseModel
from typing import List

class Event(BaseModel):
    summary: str
    start: str  # Format ISO 8601 (YYYY-MM-DDTHH:MM)
    end: str
    location: str
    description: str

class Task(BaseModel):
    name: str
    duration: int  # Durée en minutes
    description: str

class OrganizeRequest(BaseModel):
    timetable: List[Event]
    tasks: List[Task]
    
class PlanRequest(BaseModel):
    specifications: List[Task]