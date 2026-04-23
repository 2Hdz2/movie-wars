from fastapi import APIRouter 
from app.models.movie import MovieCreate
from app.services import movie_service
from app.database.db import db
from bson import ObjectId
from app.models.movie import MovieUpdate
from datetime import datetime, date

from app.services.movie_service import (
    create_movie,
    get_movies,     
    get_movie,
    update_movie,
    delete_movie        
)

router = APIRouter()

# def serialize_movie(movie: dict):
#     movie = dict(movie)  # ensure safe copy

#     # only convert if exists
#     if "_id" in movie:
#         movie["id"] = str(movie["_id"])
#         del movie["_id"]

#     # handle optional date safely
#     if "release_year" in movie and movie["release_year"]:

#     return {
#         "id": str(movie["_id"]),
#         "title": movie.get("title"),
#         "director": movie.get("director"),
#         "release_year": movie.get("release_year"),  # NO strftime
#         "genres": movie.get("genres"),
#         "description": movie.get("description"),
#     }

def serialize_movie(movie: dict):
    movie = dict(movie)

    movie["id"] = str(movie["_id"])
    movie.pop("_id", None)

    return {
        "id": movie.get("id"),
        "title": movie.get("title"),
        "director": movie.get("director"),
        "release_year": movie.get("release_year"),  # keep raw int
        "genres": movie.get("genres"),
        "description": movie.get("description"),
    }

#create movie
@router.post("/movies")
async def create_movie(movie: MovieCreate):
    movie_id = await movie_service.create_movie(movie.dict())
    return {"id": movie_id}

# Get all movies
@router.get("/movies")
async def get_movies():
    movies = []
    cursor = db.movies.find()

    async for movie in cursor:
        movies.append(serialize_movie(movie))

    return movies


#Get one movie
@router.get("/movies/{movie_id}")
async def get_movie(movie_id: str):
    movie = await db.movies.find_one({"_id": ObjectId(movie_id)})

    if not movie:
        return None

    return serialize_movie(movie)



#Update a movie
from fastapi import Body


@router.put("/movies/{movie_id}")
async def update_movie(movie_id: str, movie: MovieUpdate):
    success = await movie_service.update_movie(
        movie_id,
        movie.dict(exclude_unset=True)
    )

    return {"updated": success}
    

#delete 
from fastapi import HTTPException

@router.delete("/movies/{movie_id}")
async def delete_movie(movie_id: str):
    success = await movie_service.delete_movie(movie_id)

    if success:
        return {"message": "Movie deleted successfully"}

    raise HTTPException(status_code=404, detail="Movie not found")

