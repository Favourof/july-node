import Product from "../models/products.js";
export const addProduct = async (req, res) => {
  try {
    //   console.log("hello add product is working");
    const { title, description, price, category, currency, image } = req.body;

    if (!title || !description || !price || !image) {
      res
        .status(400)
        .json({ status: false, message: "All Field are Required" });
    }

    // const product = await Product.create({title, description, price, category, currency, image})
    const product = await Product.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "Product Created Successfully", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: true,
      message: "Fetch All PRoduct Successfully",
      count: product.length,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};
