import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
    trim: true,
    minLength: [3, "name must not be lesser than 3 character "],
    maxLength: [12, "name must not be greater than 12 character "],
  },
  email: {
    required: [true, "email is require"],
    unique: true,
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    lowerCase: true,
  },
  password: {
    type: String,
    required: [true, "password is require"],
    minLength: [6, "password must not be lesser than 6 character "],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.model("user", userSchema);
