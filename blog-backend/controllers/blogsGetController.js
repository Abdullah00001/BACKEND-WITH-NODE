const blogModel = require("../models/blogModel");
const blogsGetController = async (req, res) => {
  const blogs = await blogModel.find();
  res.send(blogs);
};

module.exports=blogsGetController