import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { getJobs } from "@/lib/api";
import { Job } from "@/types";
import { HeroBackgroundSVG } from "./SVGs";
import { cn } from "@/lib/utils";

const jobTypeStyle: Record<string, string> = {
  "Full Time":  "text-[#56CDAD] border-[#56CDAD]",
  "Part Time":  "text-[#FFA756] border-[#FFA756]",
  "Contract":   "text-[#4640DE] border-[#4640DE]",
  "Internship": "text-[#FF6550] border-[#FF6550]",
  "Remote":     "text-[#56CDAD] border-[#56CDAD]",
};

const categoryStyle: Record<string, string> = {
  Marketing:   "text-[#FFA756] border-[#FFA756]",
  Design:      "text-[#4640DE] border-[#4640DE]",
  Technology:  "text-[#FF6550] border-[#FF6550]",
  Engineering: "text-[#FF6550] border-[#FF6550]",
  Business:    "text-[#4640DE] border-[#4640DE]",
  Finance:     "text-[#56CDAD] border-[#56CDAD]",
  Sales:       "text-[#FFA756] border-[#FFA756]",
};

function CompanyInitial({ name }: { name: string }) {
  return (
    <div className="w-14 h-14 flex-shrink-0 bg-[#F8F8FD] border border-[#D6DDEB] rounded-xl flex items-center justify-center text-xl font-bold text-[#25324B]">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function LatestJobCard({ job }: { job: Job }) {
  const typeClass =
    jobTypeStyle[job.jobType] ?? "text-[#515B6F] border-gray-300";
  const catClass =
    categoryStyle[job.category] ?? "text-[#515B6F] border-gray-300";

  return (
    <Link
      href={`/jobs/${job.id}`}
      className="bg-white border border-[#D6DDEB] p-6 flex gap-5 hover:shadow-md transition-shadow duration-300 group"
    >
      <CompanyInitial name={job.company} />

      <div className="flex flex-col flex-grow min-w-0">
        <h3 className="text-[#25324B] text-lg font-bold mb-1 group-hover:text-[#4640DE] transition-colors truncate">
          {job.title}
        </h3>
        <p className="text-[#515B6F] text-sm mb-3 flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5 shrink-0" />
          {job.company}
          <span className="mx-1 text-[#A8ADB7]">•</span>
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          {job.location}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {/* Job type badge */}
          <span
            className={cn(
              "px-3 py-0.5 rounded-full text-xs font-semibold border",
              typeClass
            )}
          >
            {job.jobType}
          </span>
          {/* Category badge */}
          <span
            className={cn(
              "px-3 py-0.5 rounded-full text-xs font-semibold border",
              catClass
            )}
          >
            {job.category}
          </span>
          {/* Applicant count */}
          {job._count !== undefined && (
            <span className="px-3 py-0.5 rounded-full text-xs font-semibold border border-gray-200 text-[#515B6F]">
              {job._count.applications} applicants
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export async function LatestJobs() {
  let jobs: Job[] = [];
  try {
    jobs = await getJobs();
    // Show the 8 most recent jobs
    jobs = jobs.slice(0, 8);
  } catch {
    // Silently fail — show empty state
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[#f8f8fd]"
        style={{
          clipPath:
            "polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)",
        }}
      />
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none opacity-30 z-0 flex justify-end">
        <HeroBackgroundSVG />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px] relative z-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#25324B]">Latest </span>
            <span className="text-[#26A4FF]">jobs open</span>
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
            <p className="text-lg">No jobs posted yet.</p>
            <p className="text-sm mt-1">Head to the admin panel to post the first job.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            {jobs.map((job) => (
              <LatestJobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
