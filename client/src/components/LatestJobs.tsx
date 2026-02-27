import React from "react";
import { ArrowRight } from "lucide-react";
import { LatestJobCard } from "./LatestJobCard";
import { HeroBackgroundSVG } from "./SVGs";

const NomadLogo = () => (
    <div className="w-10 h-10 bg-[#56CDAD] rounded-xl flex items-center justify-center text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
            <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="white" opacity="0.6"/>
        </svg>
    </div>
);

const NetlifyLogo = () => (
    <div className="w-10 h-10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L0 16L16 32L32 16L16 0Z" fill="#32E0D1"/>
            <path d="M16 6L6 16L16 26L26 16L16 6Z" fill="white" opacity="0.8"/>
        </svg>
    </div>
);

const DropboxLogo = () => (
    <div className="w-10 h-10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9.33333L16 4L24 9.33333L16 14.6667L8 9.33333ZM8 22.6667L16 28L24 22.6667L16 17.3333L8 22.6667ZM16 14.6667L24 9.33333L32 14.6667L24 20L16 14.6667ZM0 14.6667L8 9.33333L16 14.6667L8 20L0 14.6667Z" fill="#0061FF"/>
        </svg>
    </div>
);

const MazeLogo = () => (
    <div className="w-10 h-10 bg-[#0052FF] rounded-full flex items-center justify-center text-white font-bold text-lg italic">
        m
    </div>
);

const TerraformLogo = () => (
    <div className="w-10 h-10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4H14V16H2V4Z" fill="#5C4EE5"/>
            <path d="M18 4H30V16H18V4Z" fill="#5C4EE5"/>
            <path d="M10 18H22V30H10V18Z" fill="#5C4EE5"/>
        </svg>
    </div>
);

const UdacityLogo = () => (
    <div className="w-10 h-10 bg-[#01B3E3] rounded-full flex items-center justify-center text-white">
        <span className="text-xl font-bold">U</span>
    </div>
);

const PackerLogo = () => (
    <div className="w-10 h-10 bg-[#F25F42] flex items-center justify-center text-white rounded-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <rect x="6" y="6" width="12" height="12"/>
        </svg>
    </div>
);

const WebflowLogo = () => (
    <div className="w-10 h-10 bg-[#4353FF] rounded-lg flex items-center justify-center text-white">
        <span className="font-bold">W</span>
    </div>
);

const latestJobs = [
  {
    logo: <NomadLogo />,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  },
  {
    logo: <NetlifyLogo />,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  },
  {
    logo: <DropboxLogo />,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  },
  {
    logo: <MazeLogo />,
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  },
  {
    logo: <TerraformLogo />,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  },
  {
    logo: <UdacityLogo />,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  },
  {
    logo: <PackerLogo />,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  },
  {
    logo: <WebflowLogo />,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    tags: [
        { label: "Full-Time", type: "full-time" as const },
        { label: "Marketing", type: "marketing" as const },
        { label: "Design", type: "design" as const }
    ]
  }
];

export function LatestJobs() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background SVG */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {latestJobs.map((job, index) => (
                <LatestJobCard
                    key={index}
                    logo={job.logo}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    tags={job.tags}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
