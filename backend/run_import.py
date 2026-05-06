import asyncio
from app.scripts.import_movies import import_movies_from_csv

if __name__ == "__main__":
    asyncio.run(import_movies_from_csv())
    