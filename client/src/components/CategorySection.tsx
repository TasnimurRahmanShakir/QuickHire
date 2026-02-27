import React from "react"
import { ArrowRight } from "lucide-react"
import { CategoryCard } from "./CategoryCard"
import { 
  DesignerSVG, 
  SalesSVG, 
  MarketingSVG, 
  FinanceSVG, 
  ComputerSVG, 
  CodeSVG, 
  SuiteCaseSVG, 
  GroupSVG 
} from "./SVGs"

const categories = [
  {
    title: "Design",
    count: 235,
    icon: <DesignerSVG />,
  },
  {
    title: "Sales",
    count: 756,
    icon: <SalesSVG />,
  },
  {
    title: "Marketing",
    count: 140,
    icon: <MarketingSVG />,
    isActive: true,
  },
  {
    title: "Finance",
    count: 325,
    icon: <FinanceSVG />,
  },
  {
    title: "Technology",
    count: 436,
    icon: <ComputerSVG />,
  },
  {
    title: "Engineering",
    count: 542,
    icon: <CodeSVG />,
  },
  {
    title: "Business",
    count: 211,
    icon: <SuiteCaseSVG />,
  },
  {
    title: "Human Resource",
    count: 346,
    icon: <GroupSVG />,
  },
]

export function CategorySection() {
  return (
    <section className="py-20 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px]">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-5xl font-bold text-[#25324B]">
          Explore by <span className="text-[#26A4FF]">category</span>
        </h2>
        <a 
          href="#" 
          className="flex items-center gap-2 text-[#4640DE] font-semibold text-lg hover:underline transition-all group"
        >
          Show all jobs 
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            count={category.count}
            icon={category.icon}
            isActive={category.isActive}
          />
        ))}
      </div>
    </section>
  )
}
