import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8FD]">
      <Navbar />
      <Hero />
    </main>
  );
}
