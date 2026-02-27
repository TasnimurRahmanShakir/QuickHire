import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { getJobs } from "@/lib/api";
import { Job } from "@/types";

const categoryColors: Record<string, string> = {
  Marketing:  "text-[#FFA756] bg-[#FFA756]/10",
  Design:     "text-[#56CDAD] bg-[#56CDAD]/10",
  Business:   "text-[#4640DE] bg-[#4640DE]/10",
  Technology: "text-[#FF6550] bg-[#FF6550]/10",
  Engineering:"text-[#FF6550] bg-[#FF6550]/10",
  Finance:    "text-[#56CDAD] bg-[#56CDAD]/10",
  Sales:      "text-[#FFA756] bg-[#FFA756]/10",
};

function CompanyInitial({ name }: { name: string }) {
  return (
    <div className="w-12 h-12 bg-[#F8F8FD] border border-[#D6DDEB] rounded-full flex items-center justify-center text-lg font-bold text-[#25324B] shrink-0">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function FeaturedJobCard({ job }: { job: Job }) {
  const colorClass =
    categoryColors[job.category] ?? "text-[#515B6F] bg-[#F8F8FD]";

  return (
    <Link
      href={`/jobs/${job.id}`}
      className="bg-white border border-[#D6DDEB] p-6 lg:p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 group"
    >
      {/* Top: Logo & Job Type */}
      <div className="flex justify-between items-start mb-6">
        <CompanyInitial name={job.company} />
        <div className="border border-[#CCCCF5] px-3 py-1 bg-white shrink-0">
          <span className="text-[#4640DE] text-[13px] font-semibold">
            {job.jobType}
          </span>
        </div>
      </div>

      {/* Title & Company */}
      <div className="mb-4">
        <h3 className="text-[#25324B] text-[20px] font-bold mb-2 tracking-tight line-clamp-1 group-hover:text-[#4640DE] transition-colors">
          {job.title}
        </h3>
        <p className="text-[#515B6F] text-sm font-medium flex items-center gap-1 truncate">
          <Briefcase className="w-3.5 h-3.5 shrink-0" />
          {job.company}
          <span className="text-[#A8ADB7] px-1">•</span>
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          {job.location}
        </p>
      </div>

      {/* Description */}
      <p className="text-[#515B6F] text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
        {job.description}
      </p>

      {/* Category tag + applicant count */}
      <div className="flex flex-wrap gap-2 mt-auto">
        <span
          className={`px-4 py-1.5 rounded-full text-sm font-semibold ${colorClass}`}
        >
          {job.category}
        </span>
        {job._count !== undefined && (
          <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-[#515B6F] bg-[#F8F8FD]">
            {job._count.applications} applicants
          </span>
        )}
      </div>
    </Link>
  );
}

export async function FeaturedJobs() {
  let jobs: Job[] = [];
  try {
    jobs = await getJobs();
    // Show at most 8 featured jobs
    jobs = jobs.slice(0, 8);
  } catch {
    // Silently fail — show empty state
  }

  return (
    <section className="relative overflow-hidden py-20 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px]">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-[#25324B]">Featured </span>
          <span className="text-[#26A4FF]">jobs</span>
        </h2>
        <a
          href="/jobs"
          className="text-[#4640DE] font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          Show all jobs <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-16 text-[#515B6F]">
          <p className="text-lg">No jobs available yet.</p>
          <p className="text-sm mt-1">Check back soon or post the first job.</p>
        </div>
      ) : (
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible gap-4 lg:gap-6 pb-4 lg:pb-0 snap-x snap-mandatory scroll-smooth -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-none">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="snap-start shrink-0 w-[78vw] sm:w-[56vw] md:w-[40vw] lg:w-auto"
            >
              <FeaturedJobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
