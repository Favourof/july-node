import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    maxLength: [30, "Title must not be longer than 30 characters"],
    minLength: [3, "Title must not be less Than 3 Characters"],
    trim: true,
  },
  description: {
    required: true,
    type: String,
    maxLength: [300, "Description must not be longer than 300 characters"],
    minLength: [10, "Description must not be less Than 10 Characters"],
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: [100, "Price must be greater than 100"],
  },
  category: {
    type: String,
    enum: ["bag", "shoe", "cloth"],
  },
  image: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    enum: ["dollar", "pounds", "naira"],
  },
});

export default mongoose.model("product", productSchema);
