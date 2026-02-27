import { notFound } from "next/navigation";
import { getJob } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ApplyForm } from "@/components/ApplyForm";
import { MapPin, Briefcase, Calendar, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let job;
  try {
    job = await getJob(id);
  } catch {
    notFound();
  }

  const postedDate = new Date(job.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#F8F8FD]">
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="pt-[90px] max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px] py-12">
        {/* Breadcrumb */}
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-[#4640DE] font-semibold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Left: Job Details */}
          <div className="space-y-8">
            {/* Header Card */}
            <div className="bg-white border border-[#D6DDEB] p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#F8F8FD] rounded-full flex items-center justify-center text-2xl font-bold text-[#25324B] border border-[#D6DDEB] shrink-0">
                  {job.company.charAt(0)}
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#25324B]">{job.title}</h1>
                  <div className="flex flex-wrap gap-4 mt-2 text-[#515B6F] text-sm">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" /> {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> Posted {postedDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" /> {job._count?.applications ?? 0} applicants
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    <span className="text-xs font-semibold border border-[#4640DE] text-[#4640DE] px-3 py-1">
                      {job.jobType}
                    </span>
                    <span className="text-xs font-semibold bg-[#F8F8FD] text-[#515B6F] px-3 py-1">
                      {job.category}
                    </span>
                    {job.salary && (
                      <span className="text-xs font-semibold bg-green-50 text-green-700 border border-green-200 px-3 py-1">
                        {job.salary}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-[#D6DDEB] p-8">
              <h2 className="text-xl font-bold text-[#25324B] mb-4">Job Description</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-[#515B6F] leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Apply Form */}
          <div className="bg-white border border-[#D6DDEB] p-8 h-fit">
            <h2 className="text-xl font-bold text-[#25324B] mb-6">Apply for this role</h2>
            <ApplyForm jobId={job.id} jobTitle={job.title} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
