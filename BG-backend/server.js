import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/mongoDB.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
