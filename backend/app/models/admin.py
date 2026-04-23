from doctest import Example
from typing import Optional

from pydantic import BaseModel

class AdminCreate(BaseModel):
    admin_username: str
    admin_password: str
    admin_firstName: str
    admin_lastName: str
    admin_email: str = Example("xxxxx@gmail.com")
    admin_DOB: str
    admin_gender: Optional[str] = None

# class AdminLogin(BaseModel):
#     admin_username: str
#     admin_password: str