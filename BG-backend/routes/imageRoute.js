import express from "express";
import { upload } from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { bgRemover } from "../controller/imageController.js";

const imageRouter = express.Router();

imageRouter.post("/bgRemover", upload.single("image"), auth, bgRemover);

export default imageRouter;
