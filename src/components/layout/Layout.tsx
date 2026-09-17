import type { ReactNode } from "react";
import { Navbar } from "../navigation/Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "../ui/ScrollProgress";
import { useSmoothScroll } from "../../lib/lenis";

export function Layout({ children }: { children: ReactNode }) {
  // Initialize Lenis smooth momentum scrolling with GSAP ScrollTrigger sync
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-[#F5EFEB] text-[#121212]">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
