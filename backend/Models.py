from pydantic import BaseModel
from typing import List

class Event(BaseModel):
    Name: str
    Start: str  # Format ISO 8601 (YYYY-MM-DDTHH:MM)
    End: str
    Location: str
    Description: str

class Task(BaseModel):
    Name: str
    Duration: int  # Durée en minutes
    Description: str

class OrganizeRequest(BaseModel):
    timetable: List[Event]
    tasks: List[Task]
    
class PlanRequest(BaseModel):
    specifications: List[Task]