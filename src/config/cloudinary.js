import { v2 as cloudinary } from "cloudinary";
import { envObj } from "./env.js";

cloudinary.config({
  cloud_name: envObj.cloudName,
  api_key: envObj.cloudinaryApiKey,
  api_secret: envObj.cloudinaryApiSecret,
});

export default cloudinary;
