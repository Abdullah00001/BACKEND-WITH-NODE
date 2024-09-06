const BlogModel = require("../models/blogModel");

const blogDeleteController = async (req, res) => {
  const deletedBlog = await BlogModel.findByIdAndDelete(req.params.id);
  res.send({ message: "blog deleted successful" });
};

module.exports=blogDeleteController