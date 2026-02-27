import { Router } from 'express';
import { applicationController } from './application.controller';

const router = Router();

// POST /api/applications  – submit application
router.post('/', applicationController.create);

// GET /api/applications   – list all applications (Admin)
router.get('/', applicationController.getAll);

export default router;
