"use client";

import { useState, useEffect, useCallback } from "react";
import { getJobs, createJob, deleteJob, getApplications } from "@/lib/api";
import { Job, Application } from "@/types";
import { Trash2, Plus, Users, Briefcase, RefreshCw } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];

const emptyForm = {
  title: "", company: "", location: "", category: "Design",
  description: "", jobType: "Full Time", salary: "", companyLogo: "",
};

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [tab, setTab] = useState<"jobs" | "applications" | "add">("jobs");
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [j, a] = await Promise.all([getJobs(), getApplications()]);
      setJobs(j);
      setApplications(a);
    } catch {
      setError("Failed to connect to server. Is it running?");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await createJob(form as Omit<Job, "id" | "createdAt" | "_count">);
      setSuccess("Job created successfully!");
      setForm(emptyForm);
      loadData();
      setTab("jobs");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job? All applications will also be removed.")) return;
    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((j) => j.id !== id));
    } catch {
      setError("Failed to delete job");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F8FD]">
      {/* Admin Navbar */}
      <header className="bg-[#25324B] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#4640DE] rounded-full" />
          <span className="font-bold text-lg">QuickHire Admin</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:text-[#4640DE] transition-colors">← Back to Site</Link>
          <button onClick={loadData} className="hover:text-[#4640DE] transition-colors flex items-center gap-1">
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
        </div>
      </header>

      {/* Stats bar */}
      <div className="bg-white border-b border-[#D6DDEB] px-6 py-4">
        <div className="max-w-6xl mx-auto flex gap-8">
          <div className="flex items-center gap-2 text-[#25324B]">
            <Briefcase className="w-5 h-5 text-[#4640DE]" />
            <span className="font-bold text-2xl">{jobs.length}</span>
            <span className="text-[#515B6F]">Jobs</span>
          </div>
          <div className="flex items-center gap-2 text-[#25324B]">
            <Users className="w-5 h-5 text-[#26A4FF]" />
            <span className="font-bold text-2xl">{applications.length}</span>
            <span className="text-[#515B6F]">Applications</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-6">
          {(["jobs", "applications", "add"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 font-semibold text-sm transition-colors ${tab === t ? "bg-[#4640DE] text-white" : "bg-white text-[#515B6F] border border-[#D6DDEB] hover:border-[#4640DE]"}`}
            >
              {t === "add" ? <span className="flex items-center gap-1"><Plus className="w-4 h-4" />Add Job</span> : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6 text-sm">{error}</div>}
        {success && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 mb-6 text-sm">{success}</div>}
        {loading && <div className="text-center py-4 text-[#515B6F] text-sm">Loading...</div>}

        {/* ── Jobs Tab ────────────────────────────────────────────── */}
        {tab === "jobs" && (
          <div className="space-y-3">
            {jobs.length === 0 && !loading && (
              <div className="text-center py-16 text-[#515B6F]">
                <p>No jobs yet. <button onClick={() => setTab("add")} className="text-[#4640DE] underline">Add one!</button></p>
              </div>
            )}
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border border-[#D6DDEB] px-6 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F8F8FD] rounded-full flex items-center justify-center font-bold text-[#25324B] shrink-0">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#25324B]">{job.title}</p>
                    <p className="text-sm text-[#515B6F]">{job.company} · {job.location} · {job.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm text-[#515B6F] hidden sm:block">{job._count?.applications ?? 0} applicants</span>
                  <Link href={`/jobs/${job.id}`} className="text-[#4640DE] text-sm font-semibold hover:underline hidden md:block">View</Link>
                  <button onClick={() => handleDelete(job.id)} className="text-red-500 hover:text-red-700 transition-colors p-1">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Applications Tab ─────────────────────────────────────── */}
        {tab === "applications" && (
          <div className="space-y-3">
            {applications.length === 0 && !loading && (
              <div className="text-center py-16 text-[#515B6F]">No applications yet.</div>
            )}
            {applications.map((app) => (
              <div key={app.id} className="bg-white border border-[#D6DDEB] px-6 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-[#25324B]">{app.name}</p>
                    <p className="text-sm text-[#515B6F]">{app.email}</p>
                    {app.job && <p className="text-xs bg-[#F8F8FD] text-[#515B6F] px-2 py-0.5 mt-1 inline-block">{app.job.title} @ {app.job.company}</p>}
                  </div>
                  <div className="text-right shrink-0">
                    <a href={app.resumeLink} target="_blank" rel="noopener noreferrer" className="text-[#4640DE] text-sm font-semibold hover:underline">Resume →</a>
                    <p className="text-xs text-[#515B6F] mt-1">{new Date(app.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                {app.coverNote && (
                  <p className="mt-3 text-sm text-[#515B6F] bg-[#F8F8FD] p-3 leading-relaxed line-clamp-2">{app.coverNote}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── Add Job Tab ──────────────────────────────────────────── */}
        {tab === "add" && (
          <form onSubmit={handleCreate} className="bg-white border border-[#D6DDEB] p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Job Title *", name: "title", placeholder: "e.g. Senior Frontend Developer" },
              { label: "Company *", name: "company", placeholder: "e.g. Acme Corp" },
              { label: "Location *", name: "location", placeholder: "e.g. Dhaka, Bangladesh" },
              { label: "Salary (optional)", name: "salary", placeholder: "e.g. $60k – $80k" },
              { label: "Company Logo URL", name: "companyLogo", placeholder: "https://..." },
            ].map(({ label, name, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-semibold text-[#25324B] mb-1">{label}</label>
                <input
                  required={label.endsWith("*")}
                  value={form[name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors text-sm"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold text-[#25324B] mb-1">Category *</label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors text-sm bg-white"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#25324B] mb-1">Job Type *</label>
              <select
                value={form.jobType}
                onChange={(e) => setForm({ ...form, jobType: e.target.value })}
                className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors text-sm bg-white"
              >
                {["Full Time", "Part Time", "Remote", "Contract", "Internship"].map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[#25324B] mb-1">Description *</label>
              <textarea
                required
                rows={6}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Describe the role, responsibilities, requirements..."
                className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors resize-none text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#4640DE] text-white font-bold py-4 hover:bg-[#3b36c9] transition-colors disabled:opacity-60"
              >
                {loading ? "Creating..." : "Create Job Listing"}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
