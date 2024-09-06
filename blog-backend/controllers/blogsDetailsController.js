const BlogModel = require("../models/blogModel");

const blogsDetailsController = async (req, res) => {
  const blog = await BlogModel.findById(req.params.id);
  res.send(blog);
};

module.exports = blogsDetailsController;
