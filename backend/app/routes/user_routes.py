from fastapi import APIRouter, HTTPException
from app.services.auth_service import create_access_token
from app.services.user_service import login_user
from app.database.db import user_db 

router = APIRouter()

@router.post("/users/login")
async def user_login(payload: dict):
    user = await login_user(payload["user_userName"], payload["user_password"])

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token({
        "sub": user["user_userName"], 
        "role": "user"

    })

    return {
        "access_token": token, 
        "token_type": "bearer"

    }

@router.post("/test-user")
async def test_admin():
    result = await user_db.users.insert_one({
        "user_userName": "testuser",
        "user_password": "hashed"
    })  
    return {
        "db": user_db.name,
        "inserted_id": str(result.inserted_id)
    }

@router.post("/debug-insert")
async def debug_insert():
    result = await user_db.users.insert_one({
        "test": "working"
    })

    return {
        "db": user_db.name,
        "inserted_id": str(result.inserted_id)
    }



@router.get("/debug-location")
async def debug_location():
    return {
        "user_db_name": user_db.name,
        "collections": await user_db.list_collection_names()
    }

@router.post("/debug-insert")
async def debug_insert():
    result = await user_db.users.insert_one({"test": "working"})
    return {
        "db": user_db.name,
        "inserted_id": str(result.inserted_id)
    }