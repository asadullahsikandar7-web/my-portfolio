export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}
