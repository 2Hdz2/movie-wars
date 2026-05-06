from fastapi import FastAPI
from app.routes.movie_routes import router as movie_router
from app.routes.admin_routes import router as admin_router 
from app.routes.user_routes import router as user_router
from app.routes.review_routes import router as review_router
from app.routes.recommendation_routes import router as recommendation_router
app = FastAPI()

app.include_router(movie_router)
app.include_router(admin_router)
app.include_router(user_router)
app.include_router(review_router)
app.include_router(recommendation_router)

# We create a FastAPI instance and include the movie router, 
# which contains all the endpoints related to movie operations.

