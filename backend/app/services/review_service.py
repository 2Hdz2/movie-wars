from app.database.db import db, user_db
from bson import ObjectId
from datetime import datetime


reviews = db["reviews"]
users = user_db["users"]

from app.database.db import db, user_db
from bson import ObjectId
from datetime import datetime

reviews = db["reviews"]
movies = db["movies"]
users = user_db["users"]


async def create_review(user_userName: str, review):
    # 1. Check user exists
    user = await users.find_one({"user_userName": user_userName})
    if not user:
        return {"error": "User not found"}

    # 2. Check movie exists (IMPORTANT)
    movie = await movies.find_one({"_id": ObjectId(review.movie_id)})
    if not movie:
        return {"error": "Movie not found"}

    # 3. Prepare data
    data = review.dict()
    data["user_id"] = user["_id"]
    data["movie_id"] = ObjectId(review.movie_id)
    data["created_at"] = datetime.utcnow()

    # 4. Prevent duplicate rating
    existing = await reviews.find_one({
        "user_id": user["_id"],
        "movie_id": data["movie_id"]
    })

    if existing:
        await reviews.update_one(
            {"_id": existing["_id"]},
            {"$set": {
                "rating": data["rating"],
                "comment": data["comment"],
                "updated_at": datetime.utcnow()
            }}
        )
        return {"id": str(existing["_id"]), "updated": True}

    # 5. Insert new review
    result = await reviews.insert_one(data)

    return {"id": str(result.inserted_id), "created": True}

async def get_reviews_by_movie(movie_id: str):
    review_list = []

    async for r in reviews.find({"movie_id": ObjectId(movie_id)}):
        r["id"] = str(r["_id"])
        r["movie_id"] = str(r["movie_id"])
        r["user_id"] = str(r["user_id"])
        review_list.append(r)

    return review_list