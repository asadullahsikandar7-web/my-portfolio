import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const CORNERS = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "left-0 bottom-0 border-l border-b",
  "right-0 bottom-0 border-r border-b",
];

export function CornerFrame({
  children,
  scanline = false,
  className = "",
}: {
  children: ReactNode;
  scanline?: boolean;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      {CORNERS.map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute h-4 w-4 border-border-strong ${pos}`}
        />
      ))}

      {scanline && !reducedMotion && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
          initial={{ top: "4%", opacity: 0 }}
          animate={{ top: ["4%", "96%", "4%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      )}

      {children}
    </div>
  );
}
