import pandas as pd
import numpy as np

# Load your precomputed dataset ONCE at startup
import os
import pandas as pd

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FILE_PATH = os.path.join(BASE_DIR, "../../data/preprocessed_movies.csv")

movies = pd.read_csv(FILE_PATH)

def get_recommendations(movie_id: int, rating: float, top_n: int = 10):

    target = movies[movies["movieId"] == movie_id]

    if target.empty:
        return []

    target = target.iloc[0]

    genre_cols = [c for c in movies.columns if c.startswith("genre_")]

    target_vec = target[genre_cols].values

    # -----------------------------
    # POSITIVE FEEDBACK (>3)
    # -----------------------------
    if rating > 3:

        genre_similarity = movies[genre_cols].values @ target_vec

        final_score = (
            0.5 * genre_similarity +
            0.5 * movies["score"].values
        )

    # -----------------------------
    # NEGATIVE FEEDBACK (<=3)
    # -----------------------------
    else:

        genre_similarity = movies[genre_cols].values @ target_vec
        diversity = 1 - (genre_similarity / (genre_similarity.max() + 1e-8))

        final_score = (
            0.6 * diversity +
            0.4 * movies["score"].values
        )

    movies["final_score"] = final_score

    results = movies.sort_values("final_score", ascending=False).head(top_n)

    return results[["movieId", "title_clean", "genres_list", "final_score"]].to_dict(orient="records")