import React from "react";
import { ArrowRight } from "lucide-react";
import { JobCard } from "./JobCard";
import { HeroBackgroundSVG } from "./SVGs";

// Placeholder Logos - In a real app these would be proper SVGs or imported images
const RevolutLogo = () => <div className="text-3xl font-bold italic">R</div>;
const DropboxLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00016 9.33333L16.0002 4L24.0002 9.33333L16.0002 14.6667L8.00016 9.33333ZM8.00016 22.6667L16.0002 28L24.0002 22.6667L16.0002 17.3333L8.00016 22.6667ZM16.0002 14.6667L24.0002 9.33333L32 14.6667L24.0002 20L16.0002 14.6667ZM0 14.6667L8.00016 9.33333L16.0002 14.6667L8.00016 20L0 14.6667Z" fill="#0061FF"/>
  </svg>
);
const PitchLogo = () => (
  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xs font-medium">Pitch</div>
);
const BlinkistLogo = () => (
  <div className="w-8 h-8 rounded-full bg-[#00DDA3] relative overflow-hidden flex items-center justify-center">
      <div className="w-3 h-3 bg-black rounded-full mb-1"></div>
  </div>
);
const ClassPassLogo = () => (
  <div className="w-10 h-10 bg-[#0055FF] rounded-full flex items-center justify-center text-white font-bold text-xl">
    C<span className="opacity-50 -ml-1">p</span>
  </div>
);
const CanvaLogo = () => (
  <div className="w-10 h-10 bg-[#00C4CC] rounded-full flex items-center justify-center text-white font-cursive text-sm italic">
    Canva
  </div>
);
const GoDaddyLogo = () => (
   <div className="text-3xl font-bold text-gray-800">
     <span className="tracking-tighter">Go</span>
   </div>
);
const TwitterLogo = () => (
  <div className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white">
     <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9997 1.88931C19.2558 2.21557 18.4552 2.43577 17.6105 2.53503C18.4727 2.01633 19.1332 1.19633 19.4447 0.222383C18.6432 0.697621 17.756 1.04169 16.8122 1.22684C16.0567 0.421477 14.9806 0 13.7937 0C11.5161 0 9.66961 1.84643 9.66961 4.1241C9.66961 4.44738 9.70618 4.76182 9.77668 5.06456C6.35032 4.89242 3.32185 3.25199 1.30403 0.772522C0.949021 1.38138 0.745543 2.09172 0.745543 2.84474C0.745543 4.27546 1.47352 5.53989 2.58064 6.27976C1.90159 6.25828 1.26461 6.07172 0.718876 5.76632C0.71765 5.78342 0.71765 5.80093 0.71765 5.81884C0.71765 7.811 2.13508 9.47161 4.0189 9.85025C3.67252 9.94432 3.30872 9.99462 2.93291 9.99462C2.6669 9.99462 2.40875 9.96869 2.15826 9.92087C2.68265 11.5543 4.19973 12.7441 6.00392 12.7774C4.59596 13.8809 2.8228 14.5383 0.895311 14.5383C0.56208 14.5383 0.233868 14.5188 0 14.4811C1.7964 15.6328 3.92987 16.3059 6.22312 16.3059C13.6908 16.3059 17.7735 10.12 17.7735 4.75709C17.7735 4.58104 17.7695 4.4055 17.7617 4.231C18.5552 3.6583 19.2458 2.95605 19.9997 1.88931Z" fill="white"/>
     </svg>
  </div>
);

// We define the specific categories allowed by the JobCardProps
type JobCategory = "Marketing" | "Design" | "Business" | "Technology";

const featuredJobs = [
  {
    id: 1,
    companyLogo: <RevolutLogo />,
    jobType: "Full Time",
    title: "Email Marketing",
    companyName: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    categories: ["Marketing", "Design"] as JobCategory[],
  },
  {
    id: 2,
    companyLogo: <DropboxLogo />,
    jobType: "Full Time",
    title: "Brand Designer",
    companyName: "Dropbox",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    categories: ["Design", "Business"] as JobCategory[],
  },
  {
    id: 3,
    companyLogo: <PitchLogo />,
    jobType: "Full Time",
    title: "Email Marketing",
    companyName: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    categories: ["Marketing"] as JobCategory[],
  },
  {
    id: 4,
    companyLogo: <BlinkistLogo />,
    jobType: "Full Time",
    title: "Visual Designer",
    companyName: "Blinkist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    categories: ["Design"] as JobCategory[],
  },
  {
    id: 5,
    companyLogo: <ClassPassLogo />,
    jobType: "Full Time",
    title: "Product Designer",
    companyName: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    categories: ["Marketing", "Design"] as JobCategory[],
  },
  {
    id: 6,
    companyLogo: <CanvaLogo />,
    jobType: "Full Time",
    title: "Lead Designer",
    companyName: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Designer to help develop n ...",
    categories: ["Design", "Business"] as JobCategory[],
  },
  {
    id: 7,
    companyLogo: <GoDaddyLogo />,
    jobType: "Full Time",
    title: "Brand Strategist",
    companyName: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    categories: ["Marketing"] as JobCategory[],
  },
  {
    id: 8,
    companyLogo: <TwitterLogo />,
    jobType: "Full Time",
    title: "Data Analyst",
    companyName: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    categories: ["Technology"] as JobCategory[],
  }
];

export function FeaturedJobs() {
  return (
    <section className="relative overflow-hidden py-20 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px]">
      {/* Background SVG */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none opacity-30 z-0 flex justify-end">
        <HeroBackgroundSVG />
      </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredJobs.map((job) => (
          <JobCard
            key={job.id}
            companyLogo={job.companyLogo}
            jobType={job.jobType}
            title={job.title}
            companyName={job.companyName}
            location={job.location}
            description={job.description}
            categories={job.categories}
          />
        ))}
      </div>
    </section>
  );
}
