import express from "express";
import { authMe, login, register } from "../controllers/user.js";
import { jwtValidator } from "../middleware/vallidate.js";

const route = express.Router();

route.post("/login", login);
route.post("/register", register);
route.get("/me", jwtValidator, authMe);

export default route;
