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
    <section className={cn("w-full py-10 lg:py-16", className)}>
      {/* Main Wrapper - Changed from 1440px to standard max-w-7xl to align with your top cards */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* The Blue Container Block */}
        <div className="relative w-full min-h-[460px] lg:min-h-[500px] flex rounded-lg">
          
          {/* Blue Background with Clip Path (Desktop) */}
          <div
            className="absolute inset-0 bg-[#4640DE] hidden lg:block"
            style={{
              clipPath:
                "polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)",
            }}
          />
          
          {/* Blue Background with Clip Path (Mobile) */}
          <div
            className="absolute inset-0 bg-[#4640DE] block lg:hidden"
            style={{
              clipPath:
                "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
            }}
          />

          {/* Content Grid */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Text + Button */}
            {/* Added left padding (lg:px-16 xl:px-20) so the text starts perfectly inside */}
            <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                {title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-medium text-white/90 max-w-md">
                {subtitle}
              </p>
              <div className="pt-2">
                <a
                  href={buttonLink}
                  className="inline-block bg-white text-[#4640DE] font-bold text-[17px] px-8 py-3.5 shadow-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  {buttonText}
                </a>
              </div>
            </div>

            {/* Right: Dashboard Image */}
            <div className="flex items-end justify-center lg:justify-end px-8 md:px-12 lg:px-0 lg:pr-12 xl:pr-16 pt-8 lg:pt-16">
              {/* Image aligns strictly to the bottom */}
              <div className="relative w-full max-w-[600px] xl:max-w-[680px] rounded-t-xl shadow-2xl overflow-hidden mt-auto">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={780}
                  height={520}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}