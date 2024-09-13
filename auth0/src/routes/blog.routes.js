import { Router } from 'express';
import { upload } from '../middlewares/multer.middlewares.js';
import { createBlogController } from '../controllers/createBlog.controllers.js';

const router = Router();

router.route('/create').post(upload.single('blogImg'), createBlogController);

export default router;
