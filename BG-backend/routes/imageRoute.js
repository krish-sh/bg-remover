import express from "express";
import { upload } from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { bgRemover } from "../controller/imageController.js";

const imageRouter = express.Router();

imageRouter.post("/bg-remover", upload.single("image"), auth, bgRemover);

export default imageRouter;
