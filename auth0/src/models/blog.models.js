import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    blogBody: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    blogImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Blog = mongoose.model('Blog', BlogSchema);
