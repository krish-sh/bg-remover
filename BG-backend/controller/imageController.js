import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import User from "../models/userModel.js";
import ApiResponse from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { arrayBuffer } from "stream/consumers";
import { MIMEType } from "util";

const bgRemover = async (req, res) => {
  try {
    const { userId } = req.User;

    const user = await User.findById(userId);
    if (!user) {
      throw new apiError("user cant find by its id");
    }

    const imagePath = req.file.path;

    const imageFile = fs.createReadStream(imagePath);

    const formData = new FormData();
    formData.append("image_file", imageFile);

    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formData,
      {
        headers: {
          "x-api-key": API_KEY,
        },
        responseType: arrayBuffer,
      }
    );

    const base64Image = Buffer.form(data, "binary").toString("base64");
    const resultData = `data:${(req.file, MIMEType)}, base64, ${base64Image}`;

    res.status(200).json({
      message: "bg-remove successfully",
      resultData,
    });
  } catch (error) {
    throw new apiError("bg-remover error");
  }
};
