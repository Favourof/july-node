import Products from "../models/products.js";
import User from "../models/user.js";

export const addItemToCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ status: false, message: "user not Found" });
    }

    const product = await Products.findById(productId);

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }
    console.log(product);

    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "Product not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};
