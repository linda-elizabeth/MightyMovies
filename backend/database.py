import motor.motor_asyncio
import certifi
from model import User
import os
client = motor.motor_asyncio.AsyncIOMotorClient(
    os.environ.get('MONGO_URI'), tlsCAFile=certifi.where())

database = client.Mightymovies
collection = database.user


async def create_user(user: User):
    document = user.dict()
    result = await collection.insert_one(document)
    return document


async def get_user(user: User):
    document = await collection.find_one({'email': user.email})
    return document
