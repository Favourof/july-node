import express, { json } from "express";
import connectDB from "./config/db.js";
import productRoute from "./routes/product.js";
import userRoute from "./routes/user.js";
import cartRoute from "./routes/cart.js";
import { envObj } from "./config/env.js";
import cors from "cors";

const server = express();
const allowedOrigin = envObj.origin ? envObj.origin.split(",") : [];
console.log(allowedOrigin);

server.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
  }),
);
server.use(json());
console.log(envObj.origin);

const port = envObj.port;

server.get("/", (req, res) => {
  res.send("Hello, Welcome to our server");
});

server.use("/products", productRoute);
server.use("/auth", userRoute);
server.use("/cart", cartRoute);

// server.get("/products", (req, res) => {
//   res.send(product);
// });

// server.post("/products", (req, res) => {
//   console.log(req, "Request Array");
//   console.log(req.body, "Request Body");

//   product.push(req.body);
//   res.send(product);
// });

connectDB();

server.listen(port, () => {
  console.log(`jul server is running on port ${port}`);
});
