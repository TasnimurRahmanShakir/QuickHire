import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="w-full h-[78px] bg-transparent flex items-center justify-between px-6 lg:px-[124px] absolute top-0 left-0 z-50">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white relative">
            <div className="w-5 h-5 border-[3px] border-white rounded-[0.5px] absolute" />
          </div>
          <span className="font-bold text-2xl text-brand-dark tracking-tight">
            JobHuntly
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-brand-muted font-medium hover:text-brand-dark transition-colors">
            Find Jobs
          </Link>
          <Link href="#" className="text-brand-muted font-medium hover:text-brand-dark transition-colors">
            Browse Companies
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-brand-primary font-bold hover:bg-brand-primary/10">
          Login
        </Button>
        <div className="w-px h-6 bg-brand-neutral-20 hidden sm:block" />
        <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-6 py-2 h-auto">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
