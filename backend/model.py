from pydantic import BaseModel, EmailStr, Field
password_regex = "^(?=.*[a-z])(?=.*[A-Z]).{8,}$"


class User(BaseModel):
    email: EmailStr
    password: str = Field(regex=password_regex)
