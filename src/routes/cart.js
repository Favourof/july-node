import express from "express";
import { jwtValidator } from "../middleware/vallidate.js";
import { addItemToCart } from "../controllers/cart.js";

const route = express.Router();

route.post("/item", jwtValidator, addItemToCart);

export default route;
