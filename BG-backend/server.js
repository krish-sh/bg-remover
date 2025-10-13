import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/mongoDB.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
