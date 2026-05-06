from pydantic import BaseModel, Field
from typing import Optional

class ReviewCreate(BaseModel):
    id: str
    user_id: str
    movie_id: str
    rating: int = Field(..., ge=1, le=5)
    comment: Optional[str] = None