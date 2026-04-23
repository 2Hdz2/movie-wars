from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

class MovieCreate(BaseModel):
    title: str 
    director: str
    release_year: datetime
    genres: List[str]
    description: Optional[str] = None


class MovieUpdate(BaseModel):
    title: str
    director: str
    release_year: datetime
    genres: List[str]
    description: Optional[str] = None