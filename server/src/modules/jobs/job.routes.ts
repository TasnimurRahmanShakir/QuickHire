import { Router } from 'express';
import { jobController } from './job.controller';

const router = Router();

// GET /api/jobs          – list all (supports ?q=, ?category=, ?location=)
router.get('/', jobController.getAll);

// GET /api/jobs/:id      – single job
router.get('/:id', jobController.getById);

// POST /api/jobs         – create job (Admin)
router.post('/', jobController.create);

// DELETE /api/jobs/:id   – delete job (Admin)
router.delete('/:id', jobController.deleteById);

export default router;
