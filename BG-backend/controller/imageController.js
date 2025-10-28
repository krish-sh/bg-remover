import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import User from "../models/userModel.js";
import ApiResponse from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";

const bgRemover = async (req, res) => {
  try {
    const { userId } = req.user;

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
          "x-api-key": process.env.API_KEY,
        },
        responseType: "arraybuffer",
      }
    );
    console.log("user");

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultData = `data:image/png;base64,${base64Image}`;;

    res.status(200).json({
      success: true,
      message: "bg-remove successfully",
      resultData,
    });
  } catch (error) {
    console.error("❌ Error in bgRemover:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error("Message:", error.message);
    }

    return res.status(500).json({
      success: false,
      message: "Background removal failed",
      error: error.message,
    });
  }
};

export { bgRemover };
