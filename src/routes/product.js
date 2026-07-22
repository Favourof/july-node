import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getSinglePRoduct,
  updateProduct,
} from "../controllers/product.js";

const route = express.Router();

route.post("/", addProduct);
route.get("/", getAllProduct);
route.get("/:id", getSinglePRoduct);
route.delete("/:id", deleteProduct);
route.put("/:id", updateProduct);

export default route;
