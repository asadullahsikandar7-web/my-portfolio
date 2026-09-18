import type { ReactNode } from "react";

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
}) {
  const styles: Record<string, string> = {
    default: "bg-white/10 text-white/70 border-white/10",
    accent: "bg-[#FF6400]/15 text-[#FF9152] border-transparent",
    outline: "bg-transparent text-white/70 border-white/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
