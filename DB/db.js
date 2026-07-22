import { MongoClient } from "mongodb";

import Dotenv from "dotenv/config";



const mongo_url = process.env.MONGO_URL

const client = new MongoClient(mongo_url);

try {
    await client.connect()
} catch (error) {
    console.log(error);
    process.exit(1)
}

const db = client.db("mongo_1")

export const collection = await db.createCollection("games")
