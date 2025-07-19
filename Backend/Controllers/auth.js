import dotenv from "dotenv";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/jwt.js";

dotenv.config();

export const signup = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Name and password are required" });
  }

  try {
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(password, salt));

    const newUser = new User({ name, password: hashedPassword });
    await newUser.save();
    generateToken(newUser._id, res);
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "Internal server error", error });
  } finally {
  }
};
export const login = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ message: "Name and password are required" });
  }

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token =  generateToken(user._id, res);
    return res
      .status(200)
      .json({
        message: "Login successful",
        user: { name: user.name },
        token
      });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
