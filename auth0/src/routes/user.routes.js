import { Router } from 'express';
import { rootController } from '../controllers/root.controllers.js';

const router = Router();

router.get('', rootController);

export default router;
