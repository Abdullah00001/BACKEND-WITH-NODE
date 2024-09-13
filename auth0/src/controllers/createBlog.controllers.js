import { Blog } from '../models/blog.models.js';
import { uploadOnCloudinary } from '../utils/cloudinary.utils.js';

export const createBlogController = async (req, res) => {
  try {
    const { blogTitle, blogBody, author } = req.body;
    const blogImageLocalFilePath = req.file.path;
    console.log(blogImageLocalFilePath);
    const blogImg = await uploadOnCloudinary(blogImageLocalFilePath);
    if (!blogImg) return res.status(500).json({ message: 'upload failed' });
    console.log(blogImg);
    const blog = new Blog({
      blogTitle,
      blogBody,
      author,
      blogImage: blogImg.url,
    });
    await blog.save();
    res.status(201).json({ message: 'blog created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'internal server error' });
  }
};
