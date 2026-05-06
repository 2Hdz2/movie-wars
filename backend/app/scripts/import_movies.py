# import pandas as pd
# from app.database.db import db

# CSV_PATH = "data/preprocessed_movies.csv"
# async def import_movies_from_csv():
#     df = pd.read_csv(CSV_PATH)

#     # Optional cleanup (important)
#     df = df.fillna("")

#     # Convert to MongoDB format
#     records = df.to_dict(orient="records")

#     # OPTIONAL: clear existing collection (careful in prod)
#     await db.movies.delete_many({})

#     # insert all movies
#     await db.movies.insert_many(records)

#     print(f"Inserted {len(records)} movies into MongoDB")

import pandas as pd
from app.database.db import db
CSV_PATH = "backend/data/preprocessed_movies.csv"


async def import_movies_from_csv():
    df = pd.read_csv(CSV_PATH)

    movies = []

    for _, row in df.iterrows():

        # -----------------------------
        # TRANSFORM CSV → DB SCHEMA
        # -----------------------------
        movie = {
            "title": row["title_clean"],
            "release_year": int(row["year"]) if not pd.isna(row["year"]) else None,

            # if genres_list is stored like "['Action','Drama']"
            "genres": eval(row["genres_list"]) if isinstance(row["genres_list"], str) else [],

            # required fields not in dataset → defaults
            "director": "Unknown",
            "description": "",

            # optional ML metadata (VERY useful for recommender)
            "movieId": int(row["movieId"]),
            "score": float(row["score"]) if "score" in row else 0.0
        }

        movies.append(movie)

    if len(movies) == 0:
        print("No movies found in CSV")
        return

    # -----------------------------
    # BULK INSERT (FAST + CLEAN)
    # -----------------------------
    result = await db.movies.insert_many(movies)

    print(f"Inserted {len(result.inserted_ids)} movies into MongoDB")