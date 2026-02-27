import { Request, Response } from 'express';
import { applicationService } from './application.service';

export const applicationController = {
  async create(req: Request, res: Response) {
    try {
      const { jobId, name, email, resumeLink, coverNote } = req.body;

      if (!jobId || !name || !email || !resumeLink) {
        return res.status(400).json({
          success: false,
          message: 'jobId, name, email, resumeLink are required',
        });
      }

      const application = await applicationService.create({
        jobId,
        name,
        email,
        resumeLink,
        coverNote,
      });

      res.status(201).json({ success: true, data: application });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to submit application';
      res.status(400).json({ success: false, message });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const applications = await applicationService.findAll();
      res.json({ success: true, data: applications });
    } catch {
      res.status(500).json({ success: false, message: 'Failed to fetch applications' });
    }
  },
};
