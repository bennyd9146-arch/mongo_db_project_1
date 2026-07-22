import { collection } from "../DB/db.js";

export async function createScores(data) {
  const result =  collection.insertOne(data);
  const player = {_id: result.insertedId.toString(),...data
  };
  console.log(player);
  
  return player
}
