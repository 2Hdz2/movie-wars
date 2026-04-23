from app.database.db import user_db
from app.services.security import hash_password, verify_password

users = user_db["users"]

async def create_user(user_data: dict):
    user_data["user_password"] = hash_password(user_data["user_password"])
    result = await users.insert_one(user_data)
    return str(result.inserted_id)

async def login_user(user_userName: str, user_password: str):
    user = await users.find_one({"user_userName": user_userName})

    if not user:
        return None
    
    if not verify_password(user_password, user["user_password"]):
        return None 
    
    return user