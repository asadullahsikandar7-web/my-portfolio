import type { ReactNode } from "react";
import { Navbar } from "../navigation/Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "../ui/ScrollProgress";
import { CustomCursor } from "../ui/CustomCursor";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      <div aria-hidden className="bg-grid bg-noise pointer-events-none fixed inset-0 -z-10" />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
