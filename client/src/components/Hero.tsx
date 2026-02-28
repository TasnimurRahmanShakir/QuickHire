import Image from "next/image";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { HeroBackgroundSVG, ScribbleUnderlineSVG } from "./SVGs";

export function Hero() {
  return (
    <>
      <section className="relative w-full bg-[#F8F8FD] pt-[120px] lg:pt-[160px] overflow-hidden flex items-center">
        {/* Background Graphic Lines */}
        <div className="absolute top-10 right-10 w-[60%] h-[120%] pointer-events-none text-[#EBEBF4] z-0 opacity-80 mix-blend-multiply flex justify-end -translate-y-20">
           <HeroBackgroundSVG />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px] grid lg:grid-cols-[1.1fr_0.9fr] gap-8 relative z-10 pb-16 w-full">
          
          {/* Left Side Content */}
          <div className="flex flex-col w-full max-w-[650px] z-20 mx-auto lg:mx-0">
            <h1 className="text-[44px] md:text-[64px] lg:text-[72px] font-black text-[#25324B] leading-[1.15] md:leading-[1.1] tracking-[-0.02em]" style={{ fontFamily: "var(--font-epilogue)" }}>
              Discover <br/>
              more than <br/>
              <span className="text-[#26A4FF] relative inline-block whitespace-nowrap mt-1 md:mt-2">
                5000+ Jobs
                {/* Scribble Underline */}
                <ScribbleUnderlineSVG className="absolute top-[85%] md:top-[92%] left-[-2%] w-[104%] h-[14px] md:h-[18px] lg:h-[22px] text-[#26A4FF]" />
              </span>
            </h1>

            <p className="mt-6 md:mt-8 text-[16px] md:text-[20px] text-[#515B6F] leading-[1.6] max-w-[480px]">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Search Box */}
            <div className="mt-8 md:mt-10 bg-white w-full lg:w-[852px] lg:max-w-none p-4 flex flex-col md:flex-row shadow-[0px_20px_60px_rgba(37,50,75,0.05)] relative z-20 rounded-none gap-4 md:gap-0">
              <div className="flex-1 w-full flex items-center px-2 md:px-4 py-2 border-b md:border-b-0 md:border-r border-[#D6DDEB]">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-[#25324B] mr-3 md:mr-4 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Job title or keyword" 
                  className="w-full bg-transparent outline-none text-[#25324B] placeholder:text-[#A0AABF] text-[15px] md:text-[16px]"
                />
              </div>
              
              <div className="flex-1 w-full flex items-center px-2 md:px-4 py-2 relative md:ml-2 border-b md:border-b-0 border-[#D6DDEB]">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#25324B] mr-3 md:mr-4 shrink-0" />
                <select className="w-full bg-transparent outline-none text-[#25324B] appearance-none cursor-pointer pr-8 text-[15px] md:text-[16px]">
                  <option value="Florence, Italy">Florence, Italy</option>
                </select>
                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-[#25324B] absolute right-2 md:right-4 pointer-events-none" />
              </div>

              <Button className="bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-bold px-10 py-4 h-[50px] md:h-[60px] rounded-none w-full md:w-auto text-[16px] transition-colors md:ml-4 mt-2 md:mt-0">
                Search my job
              </Button>
            </div>

            <div className="mt-5 text-[14px] md:text-[16px] text-[#515B6F] flex flex-col md:flex-row md:items-center">
              <span className="mb-1 md:mb-0 text-[#25324B]">Popular :&nbsp;</span>
              <span className="font-medium text-[#515B6F]">UI Designer, UX Researcher, Android, Admin</span>
            </div>
          </div>

          {/* Spacer for Grid to keep left content constrained */}
          <div className="hidden lg:block relative w-full h-full z-10"></div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:flex absolute right-0 bottom-0 top-0 w-[50%] pointer-events-none items-end justify-center lg:justify-end pr-8">
          <div className="relative w-full lg:w-[90%] h-[85%] mix-blend-darken origin-bottom">
            {/* Man Image */}
            <Image 
              src="/hero.png" 
              alt="Confident smiling professional pointing" 
              fill
              priority
              className="object-contain object-bottom pointer-events-auto"
            />
          </div>
        </div>

        {/* Diagonal White Cut Over everything */}
        <div 
           className="absolute bottom-0 right-0 w-[25vw] h-[100px] lg:h-[180px] bg-white z-30 pointer-events-none hidden lg:block" 
           style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />
      </section>

      {/* Companies Section */}
      <section className="bg-white w-full py-12 px-6 lg:px-[124px] relative z-40">
        <div className="container mx-auto">
          <p className="text-[#515B6F] text-[18px] mb-8">
            Companies we helped grow
          </p>
          
          <div className="flex flex-wrap items-center justify-between gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Vodafone */}
            <div className="relative w-[140px] h-[36px]">
              <Image src="/vodafone.png" alt="Vodafone logo" fill className="object-contain" />
            </div>
            
            {/* Intel */}
            <div className="relative w-[80px] h-[32px]">
              <Image src="/intel.png" alt="Intel logo" fill className="object-contain" />
            </div>
            
            {/* Tesla */}
            <div className="relative w-[100px] h-[24px]">
              <Image src="/tesla.png" alt="Tesla logo" fill className="object-contain" />
            </div>
            
            {/* AMD */}
            <div className="relative w-[90px] h-[28px]">
              <Image src="/amd.png" alt="AMD logo" fill className="object-contain" />
            </div>

            <div className="relative w-[90px] h-[28px]">
              <Image src="/talkit.png" alt="Talkit logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

