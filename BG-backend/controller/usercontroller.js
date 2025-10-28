import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import ApiResponse from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new apiError(400, "All field are required");
    }

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      throw new apiError(400, "User already existed");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    newUser.password = undefined;

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
    });

    res.status(200).json({
      success: true,
      message: "user register successfully",
      token,
      user: newUser,
    });
    console.log("user now");
  } catch (error) {
    console.error("Register user error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new apiError(400, "All field are required");
    }

    const existedUser = await User.findOne({ email });

    if (!existedUser) {
      throw new apiError(400, "User not existed");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );

    if (!isPasswordCorrect) {
      throw new apiError(401, "Password is incorrect");
    }

    const token = jwt.sign(
      { id: existedUser._id, email: existedUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    existedUser.password = undefined;

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User login successfully",
      token,
      user: existedUser,
    });
  } catch (error) {
    throw new apiError(500, "user login error");
  }
};

export { register, login };
