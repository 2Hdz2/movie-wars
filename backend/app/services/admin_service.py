from app.database.db import admin_db
from app.services.security import hash_password, verify_password

admins = admin_db["admins"]

async def create_admin(admin_data: dict):
    admin_data["admin_password"] = hash_password(admin_data["admin_password"])
    result = await admins.insert_one(admin_data)
    return str(result.inserted_id)

async def login_admin(admin_username: str, admin_password: str):
    admin = await admins.find_one({"admin_username": admin_username})

    if not admin:
        return None
    
    if not verify_password(admin_password, admin["admin_password"]):
        return None 
    
    return admin

