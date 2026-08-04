import dotenv from "dotenv";
dotenv.config();

export const envObj = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
  saltRound: process.env.SALT_ROUND,
  jwtSecretKey: process.env.JWT_SECRECT_KEY,
  expireIn: process.env.EXPIRE_IN,
  origin: process.env.ORIGIN,
};
