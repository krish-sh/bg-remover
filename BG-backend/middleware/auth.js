import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.js";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    console.log("🧩 Auth middleware triggered");

    if (!authHeader) {
      console.log("❌ No Authorization header found");
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const token = authHeader.replace("Bearer ", "").trim();

    if (!token) {
      console.log("❌ Empty token in header");
      return res
        .status(401)
        .json({ success: false, message: "Invalid token format" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: decoded.id };
    console.log("✅ Auth passed, user:", req.user);

    next();
  } catch (error) {
    console.error("⚠️ Auth error:", error.message);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

export default auth;
