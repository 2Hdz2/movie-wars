from fastapi import APIRouter
from pydantic import BaseModel
from app.services.recommendation_service import get_recommendations

router = APIRouter()

class RatingRequest(BaseModel):
    movie_id: int
    rating: float


@router.post("/recommend")
def recommend(req: RatingRequest):

    results = get_recommendations(req.movie_id, req.rating)

    return {
        "movie_id": req.movie_id,
        "rating": req.rating,
        "recommendations": results
    }