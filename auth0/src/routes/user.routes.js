import { Router } from 'express';
import { signupController } from '../controllers/signup.controllers.js';
import { loginController } from '../controllers/login.controllers.js';
import { logoutController } from '../controllers/logout.controllers.js';

const router = Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/logout', logoutController);

export default router;
