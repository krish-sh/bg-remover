import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/mongoDB.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoute.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://bg-remover-s4ew.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
