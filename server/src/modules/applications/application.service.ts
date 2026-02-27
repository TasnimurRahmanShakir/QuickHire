import prisma from '../../config/db';

interface CreateApplicationInput {
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/.+/;

export const applicationService = {
  async create(data: CreateApplicationInput) {
    if (!EMAIL_REGEX.test(data.email)) {
      throw new Error('Invalid email address');
    }
    if (!URL_REGEX.test(data.resumeLink)) {
      throw new Error('Resume link must be a valid URL starting with http:// or https://');
    }

    // Verify job exists
    const job = await prisma.job.findUnique({ where: { id: data.jobId } });
    if (!job) throw new Error('Job not found');

    return prisma.application.create({ data, include: { job: true } });
  },

  async findAll() {
    return prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
      include: { job: { select: { title: true, company: true } } },
    });
  },

  async findByJobId(jobId: string) {
    return prisma.application.findMany({
      where: { jobId },
      orderBy: { createdAt: 'desc' },
    });
  },
};
