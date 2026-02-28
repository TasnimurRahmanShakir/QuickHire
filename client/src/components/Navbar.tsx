import Link from "next/link";
import { Button } from "./ui/button";
import { LogoSVG } from "./SVGs";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full h-[90px] absolute top-0 left-0 right-0 z-50 bg-transparent flex items-center">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-6 lg:px-[124px]">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Icon */}
            <LogoSVG />

            <span className="font-bold text-[24px] text-[#25324B] tracking-tight">
              QuickHire
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 ml-2">
            <Link href="#" className="text-[#515B6F] font-medium hover:text-[#25324B] transition-colors">
              Find Jobs
            </Link>
            <Link href="#" className="text-[#515B6F] font-medium hover:text-[#25324B] transition-colors">
              Browse Companies
            </Link>
          </nav>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-[#4640DE] font-bold hover:underline transition-all hidden sm:block">
            Login
          </Link>
          <Button className="bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-bold px-8 py-3 rounded-none h-[46px]">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#D6DDEB] text-[#25324B] hover:bg-gray-50 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
