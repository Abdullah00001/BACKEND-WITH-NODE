const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderItemSchema = new Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  orderQuantity: {
    type: Number,
    required: true,
    default: 0,
  },
  orderPrice: {
    type: Number,
    default: 0,
  },
});

const orderSchema = new Schema(
  {
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    orderItems: [orderItemSchema],
    address: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Canceled", "Delivered"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
