import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  vendorId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    max: 120,
  },
  price: {
    type: Number,
    required: true,
  },
  imagePath: {
    type: String,
    default: "",
  },
  onStock: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: Map,
    of: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
