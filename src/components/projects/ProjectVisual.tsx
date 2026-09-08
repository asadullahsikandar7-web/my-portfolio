import { FlaskConical, LayoutDashboard, LineChart, ListChecks } from "lucide-react";
import type { Project } from "../../data/projects";

const ICONS: Record<string, typeof LayoutDashboard> = {
  acadexa: LayoutDashboard,
  "ai-qa-agent": FlaskConical,
  "product-trend-intelligence": LineChart,
  "attendance-management-system": ListChecks,
};

export function ProjectVisual({ project }: { project: Project }) {
  const Icon = ICONS[project.id] ?? LayoutDashboard;

  return (
    <div className="relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-elevated">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 opacity-60"
        style={{ maskImage: "radial-gradient(circle at center, black, transparent 75%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120px circle at 30% 20%, var(--glow), transparent 70%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-strong bg-surface text-accent">
          <Icon size={24} />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">
          {project.number}
        </span>
      </div>
    </div>
  );
}
