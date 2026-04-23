from motor.motor_asyncio import AsyncIOMotorClient
from .config import MONGO_URI

client = AsyncIOMotorClient(MONGO_URI)
DATABASE_NAME = "movie_wars"
DATABASE_ADMIN_NAME = "moviewars_admin"
DATABSE_USER_NAME= "moviewars_user"

db = client[DATABASE_NAME]


admin_db = client[DATABASE_ADMIN_NAME]
user_db = client[DATABSE_USER_NAME]




#instead of using a new DB Connection for each request, we can use the same connection throughout the app. 
#This is more efficient and allows us to reuse the connection pool provided by Motor.