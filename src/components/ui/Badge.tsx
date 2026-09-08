import type { ReactNode } from "react";

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
}) {
  const styles: Record<string, string> = {
    default: "bg-surface text-text-muted border-border",
    accent: "bg-accent-soft text-accent border-transparent",
    outline: "bg-transparent text-text-muted border-border-strong",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
