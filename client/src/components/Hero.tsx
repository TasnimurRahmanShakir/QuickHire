import { Search, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

export function Hero() {
  return (
    <section className="relative w-full min-h-[794px] bg-[#F8F8FD] pt-32 overflow-hidden flex flex-col justify-center">
      {/* Background patterns (Approximated) */}
      <div className="absolute top-0 right-[-10%] w-[860px] h-[794px] opacity-10 pointer-events-none">
        <div className="w-[328px] h-[796px] border-4 border-brand-primary transform rotate-[64deg] absolute left-[146px] top-[21px]" />
        <div className="w-[319px] h-[778px] border-4 border-brand-primary transform rotate-[64deg] absolute left-[-17px] top-[240px]" />
      </div>

      <div className="container px-6 lg:px-[124px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-6 max-w-[629px]">
          <h1 className="text-5xl lg:text-[72px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            Discover <br />
            more than <br />
            <span className="text-brand-accent-blue relative inline-block">
              5000+ Jobs
              {/* Scribble underline */}
              <svg
                className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto text-brand-accent-blue"
                viewBox="0 0 400 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 5 150 2 398 10M10 16C80 14 200 12 390 16"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-brand-muted opacity-80 leading-[1.6] max-w-[521px]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl shadow-[0px_20px_40px_rgba(192,192,192,0.1)] flex flex-col sm:flex-row items-center gap-4 w-full max-w-[852px]">
              <div className="flex items-center flex-1 gap-3 px-4 w-full">
                <Search className="w-6 h-6 text-brand-dark" />
                <div className="flex flex-col w-full">
                  <Input
                    type="text"
                    placeholder="Job title or keyword"
                    className="border-none shadow-none focus-visible:ring-0 text-base p-0 h-auto placeholder:text-brand-light placeholder:opacity-50"
                  />
                  <div className="w-full h-px bg-brand-neutral-20 mt-2 hidden sm:block" />
                </div>
              </div>

              <Separator orientation="vertical" className="hidden sm:block h-12" />

              <div className="flex items-center flex-1 gap-3 px-4 w-full">
                <MapPin className="w-6 h-6 text-brand-dark" />
                <div className="flex flex-col w-full">
                  <Select defaultValue="florence">
                    <SelectTrigger className="border-none shadow-none focus:ring-0 text-base p-0 h-auto">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="florence">Florence, Italy</SelectItem>
                      <SelectItem value="rome">Rome, Italy</SelectItem>
                      <SelectItem value="milan">Milan, Italy</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="w-full h-px bg-brand-neutral-20 mt-2 hidden sm:block" />
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 h-[57px] text-lg rounded-none sm:rounded-md mt-4 sm:mt-0">
                Search my job
              </Button>
            </div>
            <p className="text-brand-dark opacity-70">
              Popular : <span className="font-medium">UI Designer, UX Researcher, Android, Admin</span>
            </p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hidden lg:flex justify-end relative h-[600px] right-0">
          {/* Placeholder for the guy pointing */}
          <div className="relative w-full max-w-[550px] h-full rounded-2xl overflow-hidden bg-brand-tertiary">
            <img 
              src="https://images.unsplash.com/photo-1542322319-389f4befe0d5?q=80&w=600&h=800&auto=format&fit=crop" 
              alt="Confident man pointing" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
