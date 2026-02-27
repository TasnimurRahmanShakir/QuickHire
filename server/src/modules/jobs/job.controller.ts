import { Request, Response } from 'express';
import { jobService } from './job.service';

export const jobController = {
  async getAll(req: Request, res: Response) {
    try {
      const { q, category, location } = req.query as Record<string, string>;
      const jobs = await jobService.findAll({ q, category, location });
      res.json({ success: true, data: jobs });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch jobs' });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const job = await jobService.findById(id);
      if (!job) {
        return res.status(404).json({ success: false, message: 'Job not found' });
      }
      res.json({ success: true, data: job });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch job' });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const { title, company, location, category, description, jobType, salary, companyLogo } =
        req.body;

      if (!title || !company || !location || !category || !description) {
        return res.status(400).json({
          success: false,
          message: 'title, company, location, category, description are required',
        });
      }

      const job = await jobService.create({
        title,
        company,
        location,
        category,
        description,
        jobType,
        salary,
        companyLogo,
      });

      res.status(201).json({ success: true, data: job });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to create job' });
    }
  },

  async deleteById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      await jobService.deleteById(id);
      res.json({ success: true, message: 'Job deleted successfully' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to delete job' });
    }
  },
};
