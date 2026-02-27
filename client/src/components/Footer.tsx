import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";
import { LogoSVG } from "./SVGs";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-[#202430] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[124px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.5fr] gap-12 mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <LogoSVG className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">QuickHire</span>
            </div>
            <p className="text-[#D6DDEB] text-base leading-relaxed max-w-[300px]">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">About</h3>
            <ul className="flex flex-col gap-4 text-[#D6DDEB]">
              <li><a href="#" className="hover:text-white transition-colors">Companies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="flex flex-col gap-4 text-[#D6DDEB]">
              <li><a href="#" className="hover:text-white transition-colors">Help Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">Get job notifications</h3>
            <p className="text-[#D6DDEB] text-base leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow bg-white text-[#25324B] px-4 py-3 outline-none min-w-0"
              />
              <Button className="bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-bold px-6 py-3 rounded-none h-auto transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D6DDEB]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#D6DDEB]/50 text-sm">
            2021 @ QuickHire. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-[#D6DDEB]/10 rounded-full flex items-center justify-center hover:bg-[#D6DDEB]/20 transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#D6DDEB]/10 rounded-full flex items-center justify-center hover:bg-[#D6DDEB]/20 transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#D6DDEB]/10 rounded-full flex items-center justify-center hover:bg-[#D6DDEB]/20 transition-colors">
                <Dribbble className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#D6DDEB]/10 rounded-full flex items-center justify-center hover:bg-[#D6DDEB]/20 transition-colors">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#D6DDEB]/10 rounded-full flex items-center justify-center hover:bg-[#D6DDEB]/20 transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
