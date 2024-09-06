const BlogModel = require("../models/blogModel");

const blogEditController = async (req, res) => {
  try {
    const editedDoc = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(editedDoc);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

module.exports = blogEditController;
