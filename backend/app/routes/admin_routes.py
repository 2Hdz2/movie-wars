from fastapi import APIRouter, HTTPException 
from app.services.auth_service import create_access_token 
from app.services.admin_service import login_admin
from app.database.db import admin_db

router = APIRouter()

@router.post("/admin/login")
async def admin_login(payload:dict):
    admin = await login_admin(payload["admin_username"], payload["admin_password"])

    if not admin:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token({
        "sub": admin["admin_username"], 
        "role": "admin"
    })

    return {
        "access_token": token, 
        "token_type": "bearer"
    }

@router.post("/test-admin")
async def test_admin():
    result = await admin_db.admins.insert_one({
        "admin_username": "testadmin",
        "admin_password": "hashed"
    })
    return {"inserted_id": str(result.inserted_id)}

@router.post("/debug-insert")
async def debug_insert():
    result = await admin_db.admins.insert_one({
        "test": "working"
    })

    return {
        "db": admin_db.name,
        "inserted_id": str(result.inserted_id)
    }

@router.get("/debug-location")
async def debug_location():
    return {
        "admin_db_name": admin_db.name,
        "collections": await admin_db.list_collection_names()
    }

@router.post("/debug-insert")

async def debug_insert():
    result = await admin_db.admins.insert_one({"test": "working"})
    return {
        "db": admin_db.name,
        "inserted_id": str(result.inserted_id)
    }

