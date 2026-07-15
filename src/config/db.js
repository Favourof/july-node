import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Database connected Successfully");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectDB;
