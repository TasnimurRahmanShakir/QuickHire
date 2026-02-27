import React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  icon: React.ReactNode
  title: string
  count: number
  isActive?: boolean
  className?: string
}

export function CategoryCard({
  icon,
  title,
  count,
  isActive = false,
  className,
}: CategoryCardProps) {
  return (
    <div
      className={cn(
        "group p-6 border transition-all duration-300 cursor-pointer flex flex-col gap-6 h-full min-h-[220px]",
        isActive
          ? "bg-[#4640DE] border-[#4640DE] text-white"
          : "bg-white border-[#D6DDEB] text-[#25324B] hover:border-[#4640DE] hover:bg-[#F8F8FD]",
        className
      )}
    >
      <div className={cn(
        "w-12 h-12 flex items-center justify-center",
        isActive ? "text-white" : "text-[#4640DE]"
      )}>
        {icon}
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <div className="flex items-center justify-between">
          <p className={cn(
            "text-lg",
            isActive ? "text-white/80" : "text-[#7C8493]"
          )}>
            {count} jobs available
          </p>
          <ArrowRight className={cn(
            "w-6 h-6 transition-transform group-hover:translate-x-1",
            isActive ? "text-white" : "text-[#25324B]"
          )} />
        </div>
      </div>
    </div>
  )
}
