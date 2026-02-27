import React from "react";
import { cn } from "@/lib/utils";

export interface JobCardProps {
  companyLogo: React.ReactNode;
  jobType: string;
  title: string;
  companyName: string;
  location: string;
  description: string;
  categories: ("Marketing" | "Design" | "Business" | "Technology")[];
  className?: string;
}

const categoryStyles = {
  Marketing: "text-[#FFA756] bg-[#FFA756]/10",
  Design: "text-[#56CDAD] bg-[#56CDAD]/10",
  Business: "text-[#4640DE] bg-[#4640DE]/10",
  Technology: "text-[#FF6550] bg-[#FF6550]/10",
};

export function JobCard({
  companyLogo,
  jobType,
  title,
  companyName,
  location,
  description,
  categories,
  className,
}: JobCardProps) {
  return (
    <div className={cn(
      "bg-white border border-[#D6DDEB] p-6 lg:p-8 flex flex-col hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      {/* Top Row: Logo & Job Type */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 flex items-center justify-center relative overflow-hidden shrink-0">
          {companyLogo}
        </div>
        <div className="border border-[#CCCCF5] px-3 py-1 bg-white shrink-0">
          <span className="text-[#4640DE] text-[13px] font-semibold">
            {jobType}
          </span>
        </div>
      </div>

      {/* Middle Row: Title & Company Info */}
      <div className="mb-4">
        <h3 className="text-[#25324B] text-[22px] font-bold mb-2 tracking-tight line-clamp-1 group-hover:text-[#4640DE] transition-colors">
          {title}
        </h3>
        <p className="text-[#515B6F] text-base font-medium truncate">
          {companyName} <span className="text-[#A8ADB7] px-1 text-[12px]">&bull;</span> {location}
        </p>
      </div>

      {/* Body: Description */}
      <p className="text-[#515B6F] text-base mb-6 line-clamp-2 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Bottom Row: Categories */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {categories.map((category) => (
          <span 
            key={category}
            className={cn(
              "px-4 border border-transparent py-1.5 rounded-full text-sm font-semibold transition-colors hover:border-current",
              categoryStyles[category]
            )}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
