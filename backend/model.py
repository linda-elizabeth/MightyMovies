from pydantic import BaseModel, EmailStr, Field
password_regex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"


class User(BaseModel):
    email: EmailStr
    password: str = Field(regex=password_regex)
