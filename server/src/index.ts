import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './modules/jobs/job.routes';
import applicationRoutes from './modules/applications/application.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
app.use(express.json());

// ── Routes ─────────────────────────────────────────────────────────────────
app.get('/health', (_, res) => res.json({ status: 'ok' }));
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// ── Start ───────────────────────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
