import json
from pymongo import MongoClient

# === Step 1: Connection URI from MongoDB Atlas ===
# Replace <username>, <password>, and <cluster-url> with your actual details
client = MongoClient("mongodb://127.0.0.1:27017/")

# === Step 2: Select Database and Collection ===
db = client["new_database"]       # database name
collection = db["posts"]    # collection name

# === Step 3: Load JSON File ===
with open("C:/Users/manis/Downloads/technology_posts_with_id.json", "r", encoding="utf-8") as file:
    data = json.load(file)   # since file is a JSON array, this will be a list

# === Step 4: Insert into MongoDB ===
if isinstance(data, list):
    result = collection.insert_many(data)
    print(f"{len(result.inserted_ids)} posts inserted successfully.")
else:
    result = collection.insert_one(data)
    print("1 post inserted successfully.")
