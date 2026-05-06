from fastapi import APIRouter
from app.models.review import ReviewCreate
from app.services import review_service

router = APIRouter()

@router.post("/reviews")
async def add_review(user_userName: str, review: ReviewCreate):
    review_id = await review_service.create_review(user_userName, review)

    if not review_id:
        return{"error": "User not found"}
    return {"review_id": review_id} 

@router.get("/movies/{movie_id}/reviews")
async def get_reviews(movie_id: str):
    return await review_service.get_reviews_by_movie(movie_id)
