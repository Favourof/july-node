import jwt from "jsonwebtoken";
import { envObj } from "../config/env.js";
export const jwtValidator = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ status: false, message: "Token not found" });
    }

    const token = authHeader.slice(7);
    console.log(token);

    try {
      const decoded = jwt.verify(token, envObj.jwtSecretKey);
      console.log(decoded);

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(400).json({ status: false, message: error.message });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};
