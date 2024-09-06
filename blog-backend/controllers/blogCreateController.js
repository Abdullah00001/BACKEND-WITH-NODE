const BlogModel = require("../models/blogModel");

const blogCreateController = async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const newBlog = new BlogModel({ title, body, author });
    await newBlog.save();
    res.status(201).send({ message: "blog created successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "an server error accoured" });
  }
};

module.exports=blogCreateController