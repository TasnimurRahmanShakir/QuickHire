import React from "react";
import { cn } from "@/lib/utils";

export interface LatestJobCardProps {
  logo: React.ReactNode;
  title: string;
  company: string;
  location: string;
  tags: {
    label: string;
    type: "full-time" | "marketing" | "design" | "technology" | "business";
  }[];
  className?: string;
}

const tagStyles = {
  "full-time": "text-[#56CDAD] border-[#56CDAD] bg-transparent",
  marketing: "text-[#FFA756] border-[#FFA756] bg-transparent",
  design: "text-[#4640DE] border-[#4640DE] bg-transparent",
  technology: "text-[#FF6550] border-[#FF6550] bg-transparent",
  business: "text-[#4640DE] border-[#4640DE] bg-transparent",
};

export function LatestJobCard({
  logo,
  title,
  company,
  location,
  tags,
  className,
}: LatestJobCardProps) {
  return (
    <div className={cn(
      "bg-white border border-[#D6DDEB] p-6 flex gap-6 hover:shadow-md transition-shadow duration-300",
      className
    )}>
      {/* Logo */}
      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center relative bg-white">
        {logo}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-[#25324B] text-xl font-bold mb-1 hover:text-[#4640DE] transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-[#515B6F] text-base mb-4 flex items-center">
          {company} <span className="mx-2 text-[#A8ADB7]">•</span> {location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold border",
                tagStyles[tag.type] || "border-gray-200 text-gray-500"
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
