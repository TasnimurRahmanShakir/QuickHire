import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: React.ReactNode;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
  imageSrc,
  imageAlt = "Dashboard Preview",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("relative w-full py-2 overflow-hidden flex items-center min-h-[500px] pb-10", className)}>
      {/* Background shape with specific clip-path for equal angled cuts */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#4640DE] mx-auto max-w-[1440px]"
        style={{
           clipPath: "polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)"
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 max-w-lg">
          <h2 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            {title}
          </h2>
          <p className="text-lg lg:text-xl font-medium text-white/90">
            {subtitle}
          </p>
          <div className="pt-4">
            <a 
              href={buttonLink} 
              className="inline-block bg-white text-[#4640DE] font-bold text-[17px] px-8 py-3.5 shadow-lg hover:bg-gray-50 transition-colors duration-300"
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="hidden lg:flex relative w-full h-full min-h-[450px] items-end justify-end translate-y-20 z-20">
          <div className="absolute bottom-0 right-0 w-[110%] xl:w-[125%] max-w-[800px] h-auto rounded-tl-xl shadow-2xl overflow-hidden translate-x-12 translate-y-16">
             <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={500}
                className="w-full h-auto object-cover object-left-top"
                priority
              />
          </div>
        </div>
        
        {/* Mobile styling for the image */}
        <div className="flex lg:hidden relative mt-8 w-full z-20 justify-end">
          <div className="relative w-full aspect-[16/10] rounded-tl-xl shadow-2xl overflow-hidden translate-y-20">
             <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-left-top"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
