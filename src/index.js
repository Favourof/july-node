import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/product.js";
dotenv.config();

const server = express();
server.use(json());

const port = process.env.PORT;

server.get("/", (req, res) => {
  res.send("Hello, Welcome to our server");
});

server.use("/products", productRoute);

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
