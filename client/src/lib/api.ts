import { ApiResponse, Job, Application, JobFilters } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return res.json();
}

// ── Jobs ────────────────────────────────────────────────────────────────────

export async function getJobs(filters: JobFilters = {}): Promise<Job[]> {
  const params = new URLSearchParams();
  if (filters.q) params.set('q', filters.q);
  if (filters.category) params.set('category', filters.category);
  if (filters.location) params.set('location', filters.location);
  const query = params.toString() ? `?${params}` : '';
  const res = await apiFetch<Job[]>(`/api/jobs${query}`, { cache: 'no-store' });
  return res.data;
}

export async function getJob(id: string): Promise<Job> {
  const res = await apiFetch<Job>(`/api/jobs/${id}`, { cache: 'no-store' });
  return res.data;
}

export async function createJob(data: Omit<Job, 'id' | 'createdAt' | '_count'>): Promise<Job> {
  const res = await apiFetch<Job>('/api/jobs', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.data;
}

export async function deleteJob(id: string): Promise<void> {
  await apiFetch<void>(`/api/jobs/${id}`, { method: 'DELETE' });
}

// ── Applications ────────────────────────────────────────────────────────────

export async function submitApplication(data: {
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
}): Promise<Application> {
  const res = await apiFetch<Application>('/api/applications', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.data;
}

export async function getApplications(): Promise<Application[]> {
  const res = await apiFetch<Application[]>('/api/applications');
  return res.data;
}
