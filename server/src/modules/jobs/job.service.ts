import prisma from '../../config/db';

interface CreateJobInput {
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  jobType?: string;
  salary?: string;
  companyLogo?: string;
}

interface JobFilters {
  q?: string;
  category?: string;
  location?: string;
}

export const jobService = {
  async findAll(filters: JobFilters) {
    const where: Record<string, unknown> = {};

    if (filters.q) {
      where.OR = [
        { title: { contains: filters.q, mode: 'insensitive' } },
        { company: { contains: filters.q, mode: 'insensitive' } },
        { description: { contains: filters.q, mode: 'insensitive' } },
      ];
    }

    if (filters.category) {
      where.category = { equals: filters.category, mode: 'insensitive' };
    }

    if (filters.location) {
      where.location = { contains: filters.location, mode: 'insensitive' };
    }

    return prisma.job.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { applications: true } } },
    });
  },

  async findById(id: string) {
    return prisma.job.findUnique({
      where: { id },
      include: { applications: true },
    });
  },

  async create(data: CreateJobInput) {
    return prisma.job.create({ data });
  },

  async deleteById(id: string) {
    return prisma.job.delete({ where: { id } });
  },
};
