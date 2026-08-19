import cloudinary from "../config/cloudinary.js";
import Product from "../models/products.js";
export const addProduct = async (req, res) => {
  try {
    //   console.log("hello add product is working");
    const { title, description, price, category, currency } = req.body;
    const file = req.file;
    console.log(file);

    if (!title || !description || !price || !file) {
      res
        .status(400)
        .json({ status: false, message: "All Field are Required" });
    }
    const stream = cloudinary.uploader.upload_stream(
      { folder: "july-product" },
      async (error, result) => {
        if (error) {
          console.log(error);
          res.status(400).json({
            status: false,
            message: "Image upload failed",
            error: error.message,
          });
        }

        console.log(result);

        try {
          const productData = {
            ...req.body,
            image: result.secure_url,
            imageId: result.public_id,
          };

          const product = await Product.create(productData);
          res.status(201).json({
            status: true,
            message: "Product Created Successfully",
            product,
          });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: false, message: error.message });
        }
      },
    );

    stream.end(req.file.buffer);

    // const product = await Product.create({title, description, price, category, currency, image})
    // const product = await Product.create(req.body);
    // res
    //   .status(201)
    //   .json({ status: true, message: "Product Created Successfully", product });
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

export const getSinglePRoduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }

    return res
      .status(200)
      .json({ status: true, message: "Fetch Product Successfully", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }

    return res
      .status(200)
      .json({ status: true, message: "Product Delete Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }

    return res
      .status(200)
      .json({ status: true, message: "Product Updated Successfully", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: error.message });
  }
};
