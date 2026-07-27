import mongoose from "mongoose";
import { envObj } from "./env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(envObj.mongoURL);
    console.log("MongoDB Database connected Successfully");
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export default connectDB;
