import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

console.log(
  process.env.CLOUDINARY_CLOUD_NAME,
  process.env.CLOUDINARY_API_KEY,
  process.env.CLOUDINARY_SECRET_KEY
);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    console.log(localFilePath);
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error(error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};
