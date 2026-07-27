import dotenv from "dotenv";
dotenv.config();

export const envObj = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
  saltRound: process.env.SALT_ROUND,
};
