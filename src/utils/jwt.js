import jwt from "jsonwebtoken";
import { envObj } from "../config/env.js";

export const generateToken = (userId) => {
  console.log(envObj.jwtSecretKey);

  const token = jwt.sign({ userId: userId }, envObj.jwtSecretKey, {
    expiresIn: envObj.expireIn,
  });
  return token;
};
