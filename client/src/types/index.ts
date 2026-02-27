export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  jobType: string;
  salary?: string | null;
  companyLogo?: string | null;
  createdAt: string;
  _count?: { applications: number };
}

export interface Application {
  id: string;
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string | null;
  createdAt: string;
  job?: { title: string; company: string };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface JobFilters {
  q?: string;
  category?: string;
  location?: string;
}
