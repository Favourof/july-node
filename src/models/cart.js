import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items: [
    {
      product: {
        ref: "product",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        min: 1,
        default: 1,
      },
    },
  ],
  cartTotal: {
    type: Number,
    min: 100,
    default: 0,
    max: 2000000,
  },
});

export default mongoose.Model("cart", cartSchema);
