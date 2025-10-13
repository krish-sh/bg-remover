import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body();

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All field are required" });
    }

    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res.status(400).json("user is already existed");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedToken = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedToken,
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    await newUser.save();
    newUser.password = undefined;

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
    });

    res.status(201).json({
      sucess: true,
      message: "User registered successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "User controller error" }, error);
  }
};
