import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CategoryCard } from "./CategoryCard"
import { getJobs } from "@/lib/api"
import {
  DesignerSVG,
  SalesSVG,
  MarketingSVG,
  FinanceSVG,
  ComputerSVG,
  CodeSVG,
  SuiteCaseSVG,
  GroupSVG,
} from "./SVGs"

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Design:          <DesignerSVG />,
  Sales:           <SalesSVG />,
  Marketing:       <MarketingSVG />,
  Finance:         <FinanceSVG />,
  Technology:      <ComputerSVG />,
  Engineering:     <CodeSVG />,
  Business:        <SuiteCaseSVG />,
  "Human Resource":<GroupSVG />,
}

// Fixed order to always show all 8 categories
const CATEGORY_ORDER = [
  "Design",
  "Sales",
  "Marketing",
  "Finance",
  "Technology",
  "Engineering",
  "Business",
  "Human Resource",
]

export async function CategorySection() {
  // Count jobs per category from the API
  const countMap: Record<string, number> = {}
  try {
    const jobs = await getJobs()
    for (const job of jobs) {
      countMap[job.category] = (countMap[job.category] ?? 0) + 1
    }
  } catch {
    // If fetch fails, all counts stay 0
  }

  return (
    <section className="py-20 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px]">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-5xl font-bold text-[#25324B]">
          Explore by <span className="text-[#26A4FF]">category</span>
        </h2>
        <Link
          href="/jobs"
          className="flex items-center gap-2 text-[#4640DE] font-semibold text-lg hover:underline transition-all group"
        >
          Show all jobs
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORY_ORDER.map((title) => (
          <Link key={title} href={`/jobs?category=${encodeURIComponent(title)}`}>
            <CategoryCard
              title={title}
              count={countMap[title] ?? 0}
              icon={CATEGORY_ICONS[title]}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
