import express from "express";
import Dotenv from "dotenv/config";
import { router } from "./routes/router.js";
import { ConnectCreateScore } from "./ctrls/ctrlPost.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/score", router);

app.get("/", (req, res) => {
  res.send("wellcom to the best game of the world!!!!!!");
});

app.post("/score", ConnectCreateScore);

app.listen(PORT || 3000, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
