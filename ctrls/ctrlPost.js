import { createScores } from "../DAL/mongos.dal.js";

export async function ConnectCreateScore(req, res, next) {
  try {
    const body = req.body;
    const addTimestamps = (body["timestamps"] = new Date());
    const newPlayer = await createScores(body);
    return res.status(201).json(newPlayer);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "samthing error" });
  }
}
