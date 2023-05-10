from database import (create_user, get_user)
from fastapi import FastAPI, HTTPException
from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from model import User


app = FastAPI()

origins=["http://localhost:3000"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home_route():
    return {"Hello": "World"}


# otherwise ObjectId not iterable error will come
@app.post("/api/signup", response_model=User)
async def signup_route(user: User):

    response = await create_user(user)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.post("/api/signin", response_model=User)
async def signin_route(user: User):
    response = await get_user(user)
    if response:
        return response
    # HTTP Status code 403 - Forbidden
    raise HTTPException(403, "User not found")


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return PlainTextResponse(str(exc), status_code=400)
