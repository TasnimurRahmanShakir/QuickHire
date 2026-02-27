import { Suspense } from "react";
import Link from "next/link";
import { getJobs } from "@/lib/api";
import { Job } from "@/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const CATEGORIES = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];

interface SearchParams {
  q?: string;
  category?: string;
  location?: string;
}

async function JobList({ searchParams }: { searchParams: SearchParams }) {
  let jobs: Job[] = [];
  let error = "";
  try {
    jobs = await getJobs(searchParams);
  } catch {
    error = "Could not connect to the server. Make sure the backend is running.";
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 bg-red-50 rounded-lg px-6">{error}</div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[#515B6F] text-lg">No jobs found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <Link
          key={job.id}
          href={`/jobs/${job.id}`}
          className="bg-white border border-[#D6DDEB] p-6 hover:shadow-lg hover:border-[#4640DE] transition-all group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#F8F8FD] rounded-full flex items-center justify-center text-sm font-bold text-[#25324B]">
              {job.company.charAt(0)}
            </div>
            <span className="text-xs font-semibold border border-[#4640DE] text-[#4640DE] px-3 py-1">
              {job.jobType}
            </span>
          </div>
          <h3 className="font-bold text-lg text-[#25324B] group-hover:text-[#4640DE] transition-colors">
            {job.title}
          </h3>
          <p className="text-[#515B6F] text-sm mt-1 flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" /> {job.company}
          </p>
          <p className="text-[#515B6F] text-sm flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5" /> {job.location}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs bg-[#F8F8FD] text-[#515B6F] px-3 py-1 font-medium">
              {job.category}
            </span>
            <span className="text-xs text-[#515B6F]">
              {job._count?.applications ?? 0} applicants
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-[#F8F8FD]">
      <div className="bg-white">
        <Navbar />
      </div>

      {/* Header */}
      <div className="bg-white pt-[90px] pb-10 border-b border-[#D6DDEB]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px] pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#25324B]">
            Find your <span className="text-[#26A4FF]">dream job</span>
          </h1>
          <p className="text-[#515B6F] mt-3 text-lg">
            {params.q || params.category || params.location
              ? "Search results"
              : "Browse all available positions"}
          </p>

          {/* Search bar */}
          <form method="GET" className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              name="q"
              defaultValue={params.q}
              placeholder="Job title or keyword"
              className="flex-grow border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors bg-white"
            />
            <input
              name="location"
              defaultValue={params.location}
              placeholder="Location"
              className="sm:w-48 border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors bg-white"
            />
            <button
              type="submit"
              className="bg-[#4640DE] text-white font-bold px-8 py-3 hover:bg-[#3b36c9] transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px] py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-[#D6DDEB] p-6">
              <h3 className="font-bold text-[#25324B] mb-4">Category</h3>
              <div className="space-y-2">
                <Link
                  href="/jobs"
                  className={`block text-sm py-1.5 px-3 transition-colors ${!params.category ? "bg-[#4640DE] text-white" : "text-[#515B6F] hover:bg-[#F8F8FD]"}`}
                >
                  All Categories
                </Link>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/jobs?category=${cat}${params.q ? `&q=${params.q}` : ""}`}
                    className={`block text-sm py-1.5 px-3 transition-colors flex items-center justify-between ${params.category === cat ? "bg-[#4640DE] text-white" : "text-[#515B6F] hover:bg-[#F8F8FD]"}`}
                  >
                    {cat} <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Job Grid */}
          <div className="flex-grow">
            <Suspense fallback={<div className="text-center py-20 text-[#515B6F]">Loading jobs...</div>}>
              <JobList searchParams={params} />
            </Suspense>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
