import express from "express";

import dotenv from "dotenv";
import connectDb from "./configs/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/auth");

app.listen(port, () => {
  connectDb();
  console.log("Server Started");
});
