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

        <div className="container px-4 md:px-6 lg:px-[124px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 relative z-10 pb-16">
          
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

            <p className="mt-5 text-[14px] md:text-[16px] text-[#515B6F] flex flex-col md:block">
              <span className="mb-1 md:mb-0 block md:inline text-[#25324B]">Popular : </span>
              <span className="font-medium text-[#515B6F]">UI Designer, UX Researcher, Android, Admin</span>
            </p>
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
          
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Vodafone */}
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM28.614 26.666C28.614 31.576 24.636 35.554 19.726 35.554C14.816 35.554 10.838 31.576 10.838 26.666C10.838 22.864 13.238 19.596 16.63 18.258V18.176C12.894 17.51 10 14.248 10 10.334C10 5.424 13.978 1.446 18.888 1.446C23.798 1.446 27.776 5.424 27.776 10.334C27.776 14.28 24.814 17.484 21.044 18.176V18.258C25.432 19.006 28.614 22.518 28.614 26.666Z" fill="currentColor"/>
              </svg>
              <span className="text-2xl font-bold tracking-tight">vodafone</span>
            </div>
            
            {/* Intel */}
            <div className="flex items-center">
              <span className="text-4xl font-bold tracking-tighter text-[#0071C5]">intel<span className="text-[#0071C5] text-sm align-super">®</span></span>
            </div>
            
            {/* Tesla */}
            <div className="flex items-center">
              <svg width="120" height="16" viewBox="0 0 120 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.96 15.65H0V11.23H11.96V15.65ZM50.67 15.65H23.08V11.24H50.67V15.65ZM50.67 8.32H23.08V3.92H50.67V8.32ZM23.08 0V0.01H50.67V3.53H23.08V0ZM11.96 3.92H0V8.33H11.96V3.92ZM11.96 0H0V3.53H11.96V0ZM77.05 15.65H92.21V3.91H77.05V15.65ZM98V0.01H120V3.52H98V0.01ZM98 15.65H120V12.14H98V15.65ZM98 8.32H120V4.8H98V8.32ZM56.36 0.01H71.53V15.65H56.36V0.01ZM77.05 0H92.21V3.52H77.05V0Z"/>
              </svg>
            </div>
            
            {/* AMD */}
            <div className="flex items-center">
              <span className="text-4xl font-black tracking-tighter">AMD<span className="text-sm align-super font-normal">®</span></span>
            </div>
            
            {/* Talkit */}
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-tight">Talkit</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

