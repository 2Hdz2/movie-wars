from app.database.db import db 
from bson import ObjectId

#Create movie 
async def create_movie(movie):
    result = await db.movies.insert_one(movie)
    return str(result.inserted_id)

#Get all movies
async def get_movies():
    movies = []
    cursor = db.movies.find()
    async for movie in cursor:
        movie["id"] = str(movie["_id"])
        movies.append(movie)
    return movies

#Get a movie
async def get_movie(movie_id: str):
    movie = await db.movies.find_one({"_id": ObjectId(movie_id)})

    if not movie:
        return None

    # serialize movie
    movie["id"] = str(movie["_id"])
    movie.pop("_id", None)

    # fetch reviews
    raw_reviews = await db.reviews.find({"movie_id": ObjectId(movie_id)}).to_list(None)

    reviews = []
    for r in raw_reviews:
        r["id"] = str(r["_id"])
        r["movie_id"] = str(r["movie_id"])
        r["user_id"] = str(r["user_id"])
        r.pop("_id", None)
        reviews.append(r)

    movie["reviews"] = reviews

    return movie
#update 
async def update_movie(movie_id:str, data):
    await db.movies.update_one(
        {"_id": ObjectId(movie_id)},
        {"$set": data}
    )
    return True 

#delete
async def delete_movie(movie_id: str):
    await db.movies.delete_one({"_id": ObjectId(movie_id)})
    return True 
