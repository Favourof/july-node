import { envObj } from "../config/env.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: false, message: "All Field are Required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Credentials" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    // console.log(comparePassword);

    if (!comparePassword) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Credentials" });
    }

    const userObj = {
      name: user.name,
      email: user.email,
    };

    const token = generateToken(user._id);

    return res.status(200).json({
      status: true,
      message: "Login successfully",
      user: userObj,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      res
        .status(400)
        .json({ status: false, message: "All field are Required" });
    }

    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ status: false, message: "Invalid credential" });
    }

    const salt = Number(envObj.saltRound);
    console.log(salt);

    const hashedPassword = await bcrypt.hash(password, salt);

    const userObj = {
      name,
      email,
      password: hashedPassword,
    };

    await User.create(userObj);

    return res.status(200).json({
      status: true,
      message: "user Register Successfully",
      user: { name, email },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};

export const authMe = async (req, res) => {
  try {
    console.log(req.user);

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Credentials" });
    }

    const userObj = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return res
      .status(200)
      .json({ status: true, message: "successfully", user: userObj });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};
