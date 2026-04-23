from typing import Optional
from pydantic import BaseModel


class UserCreate(BaseModel):
    user_userName: str
    user_password: str
    user_firstName: str
    user_lastName: str
    user_email: str
    user_dayOfBirth: str
    user_monthOfBirth: str
    user_yearOfBirth: str
    user_gender: Optional[str]
    user_profilePicture: str   
     
