import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { CTASection } from "@/components/CTASection";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { LatestJobs } from "@/components/LatestJobs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8FD]">
      <Navbar />
      <Hero />
      <CategorySection />
      
      <CTASection
        title={
          <>
            Start posting<br />
            jobs today
          </>
        }
        subtitle="Start posting jobs for only $10."
        buttonText="Sign Up For Free"
        imageSrc="/dashboard.png"
      />

      <div className="w-full mt-20">
        <FeaturedJobs />
      </div>

      <div className="w-full mt-20">
        <LatestJobs />
      </div>
      <Footer />
    </main>
  );
}
