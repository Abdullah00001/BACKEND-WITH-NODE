const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BlogSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date,
  },
});

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;
