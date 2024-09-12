const mongoose = require("mongoose");
const { Schema } = mongoose;

const subTodo = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Subtodo = mongoose.model("Subtodo", subTodo);

module.exports = Subtodo;
