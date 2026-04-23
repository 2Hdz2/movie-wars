import os
from dotenv import load_dotenv 

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

# We load the MongoDB URI from the environment variable. 
# This allows us to keep sensitive information like database credentials out of our codebase and makes it easier to manage different configurations for development, testing, and production environments.