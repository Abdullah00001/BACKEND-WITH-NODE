const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
      default:0
    },
    productStock: {
      type: Number,
      required: true,
      default:0
    },
    productImage: {
      type: String,
    },
    productCategory: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
