import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.js";

const auth = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    throw new apiError("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.id };
    next();
  } catch (error) {
    throw new apiError("Please first Authorized");
  }
};

export default auth;
