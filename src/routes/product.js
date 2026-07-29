import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getSinglePRoduct,
  updateProduct,
} from "../controllers/product.js";
import { jwtValidator } from "../middleware/vallidate.js";

const route = express.Router();

route.post("/", jwtValidator, addProduct); //this
route.get("/", getAllProduct);
route.get("/:id", getSinglePRoduct);
route.delete("/:id", jwtValidator, deleteProduct); //this
route.put("/:id", jwtValidator, updateProduct); //this

export default route;
