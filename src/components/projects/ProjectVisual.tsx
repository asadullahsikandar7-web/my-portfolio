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

  if (project.id === "acadexa") {
    return (
      <div className="project-visual-shell acadexa-cover relative flex h-full min-h-[220px] w-full overflow-hidden rounded-[22px] border border-border bg-bg-elevated">
        <div aria-hidden className="acadexa-grid absolute inset-0 opacity-80" />
        <div aria-hidden className="acadexa-glow absolute inset-0" />

        <div className="relative flex h-full w-full items-end justify-center gap-2 px-2 pb-2">
          <div className="acadexa-phone acadexa-phone-left relative flex h-[150px] w-[76px] items-end justify-center rounded-[18px] border border-white/10 bg-[#091221] p-2 shadow-[0_18px_40px_rgba(4,8,18,0.75)]">
            <div className="absolute left-1/2 top-2 h-1 w-7 -translate-x-1/2 rounded-full bg-slate-700" />
            <div className="w-full overflow-hidden rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,#091827,#0a1020)]">
              <div className="flex items-center justify-between border-b border-white/8 bg-white/3 px-2 py-1.5">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-cyan-200">Acadexa</span>
                </div>
                <span className="font-mono text-[5px] text-slate-400">12:34</span>
              </div>

              <div className="space-y-2 p-2">
                <div className="h-10 rounded-md bg-[linear-gradient(135deg,#1d4ed8,#68e0ff)] p-1.5">
                  <div className="flex h-full items-end justify-between rounded-sm bg-black/10 px-1">
                    <div className="h-3 w-5 rounded-sm bg-white/35" />
                    <div className="h-4 w-4 rounded-full bg-white/50" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded-md bg-white/5 p-1.5">
                    <div className="mb-1 h-1.5 w-5 rounded bg-cyan-400/60" />
                    <div className="h-3 w-6 rounded bg-slate-700" />
                  </div>
                  <div className="rounded-md bg-white/5 p-1.5">
                    <div className="mb-1 h-1.5 w-5 rounded bg-violet-400/70" />
                    <div className="h-3 w-6 rounded bg-slate-700" />
                  </div>
                </div>
                <div className="rounded-md bg-white/5 p-1.5">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="h-1.5 w-7 rounded bg-slate-500" />
                    <div className="h-1.5 w-3 rounded bg-emerald-400" />
                  </div>
                  <div className="h-5 rounded bg-[linear-gradient(90deg,rgba(34,211,238,0.7),rgba(192,132,252,0.7))]" />
                </div>
              </div>
            </div>
          </div>

          <div className="acadexa-laptop relative h-[160px] w-[240px] rounded-[18px] border border-white/12 bg-[#08182d]/95 p-2 shadow-[0_22px_60px_rgba(10,14,28,0.8)]">
            <div className="acadexa-laptop-top flex items-center justify-between border-b border-white/10 px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[linear-gradient(135deg,#6dd8ff,#4f46e5)] text-[8px] font-bold text-white">
                  A
                </div>
                <span className="text-[9px] font-semibold tracking-[0.18em] text-slate-200 uppercase">Acadexa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-emerald-300">Live</span>
              </div>
            </div>

            <div className="grid h-[calc(100%-36px)] grid-cols-[0.9fr_1.3fr] gap-2 p-2.5">
              <div className="space-y-2">
                <div className="rounded-xl border border-white/8 bg-white/5 p-2">
                  <div className="mb-2 h-1.5 w-10 rounded bg-cyan-400/60" />
                  <div className="flex items-end justify-between">
                    <span className="text-[18px] font-semibold text-white">92%</span>
                    <span className="font-mono text-[7px] text-emerald-300">+12%</span>
                  </div>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/5 p-2">
                  <div className="mb-2 h-1.5 w-8 rounded bg-violet-400/70" />
                  <div className="flex items-end justify-between">
                    <span className="text-[18px] font-semibold text-white">8</span>
                    <span className="font-mono text-[7px] text-violet-300">new</span>
                  </div>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/5 p-2">
                  <div className="mb-2 h-1.5 w-9 rounded bg-amber-300/70" />
                  <div className="flex items-end justify-between">
                    <span className="text-[18px] font-semibold text-white">3</span>
                    <span className="font-mono text-[7px] text-amber-300">alerts</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="rounded-xl border border-white/8 bg-white/5 p-2.5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-slate-300">Attendance</span>
                    <span className="text-[7px] text-cyan-300">View all</span>
                  </div>
                  <div className="h-10 rounded bg-[linear-gradient(90deg,rgba(20,184,166,0.35),rgba(34,211,238,0.8),rgba(168,85,247,0.7))]" />
                </div>

                <div className="rounded-xl border border-white/8 bg-white/5 p-2.5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-slate-300">Upcoming</span>
                    <span className="text-[7px] text-slate-400">Today</span>
                  </div>
                  <div className="space-y-1.5 text-[7px]">
                    <div className="flex items-center justify-between rounded bg-slate-900/40 px-1.5 py-1">
                      <span className="text-slate-200">Digital Logic Design</span>
                      <span className="text-emerald-300">Live</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-slate-900/40 px-1.5 py-1">
                      <span className="text-slate-200">Probability & Statistics</span>
                      <span className="text-violet-300">Upcoming</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-slate-900/40 px-1.5 py-1">
                      <span className="text-slate-200">Discrete Structures</span>
                      <span className="text-cyan-300">09:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="acadexa-phone acadexa-phone-right relative flex h-[150px] w-[76px] items-end justify-center rounded-[18px] border border-white/10 bg-[#091221] p-2 shadow-[0_18px_40px_rgba(4,8,18,0.75)]">
            <div className="absolute left-1/2 top-2 h-1 w-7 -translate-x-1/2 rounded-full bg-slate-700" />
            <div className="w-full overflow-hidden rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,#0a1830,#0b1526)]">
              <div className="flex items-center justify-between border-b border-white/8 bg-white/3 px-2 py-1.5">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-violet-400" />
                  <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-violet-200">AI</span>
                </div>
                <span className="font-mono text-[5px] text-slate-400">09:20</span>
              </div>

              <div className="space-y-2 p-2">
                <div className="rounded-md bg-white/5 p-1.5">
                  <div className="mb-1 h-1.5 w-11 rounded bg-violet-400/70" />
                  <div className="h-3 w-8 rounded bg-slate-700" />
                </div>
                <div className="rounded-md bg-white/5 p-1.5">
                  <div className="mb-1 h-1.5 w-12 rounded bg-cyan-400/60" />
                  <div className="h-8 rounded bg-[linear-gradient(90deg,rgba(34,211,238,0.7),rgba(59,130,246,0.9))]" />
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded-md bg-white/5 p-1">
                    <div className="h-3 w-4 rounded bg-emerald-400/70" />
                  </div>
                  <div className="rounded-md bg-white/5 p-1">
                    <div className="h-3 w-4 rounded bg-amber-400/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-4 top-4 flex items-center gap-2 text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#1b5ef3,#4cc9ff)] text-xs font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.55)]">
            A
          </div>
          <div>
            <div className="text-lg font-semibold text-white">Acadexa</div>
            <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-slate-300">by Asad</div>
          </div>
        </div>

        <div className="absolute right-4 top-5 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-2 py-1 text-[7px] uppercase tracking-[0.18em] text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          Smart learning
        </div>
      </div>
    );
  }

  if (project.id === "ai-qa-agent") {
    return (
      <div className="project-visual-shell qa-agent-cover relative flex h-full min-h-[220px] w-full overflow-hidden rounded-[22px] border border-border bg-bg-elevated">
        <div
          aria-hidden
          className="bg-grid absolute inset-0 opacity-60"
          style={{ maskImage: "radial-gradient(circle at center, black, transparent 75%)" }}
        />
        <div aria-hidden className="qa-agent-glow absolute inset-0" />

        <div className="qa-agent-dashboard absolute inset-[12%_8%_10%_8%] overflow-hidden rounded-[18px] border border-white/10 bg-[#0a1120]/90 shadow-[0_0_40px_rgba(46,204,255,0.18)]">
          <div className="qa-agent-topbar flex items-center justify-between border-b border-white/10 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-[8px] text-cyan-200">
                Q
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">
                QA Agent
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-300">
                Live
              </span>
            </div>
          </div>

          <div className="qa-agent-content grid grid-cols-[0.85fr_1.15fr] gap-3 p-3">
            <div className="space-y-3">
              <div className="qa-agent-panel rounded-xl border border-white/10 bg-white/5 p-2.5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Tests</p>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-xl font-semibold text-white">24</span>
                  <span className="font-mono text-[8px] text-emerald-300">+12%</span>
                </div>
              </div>
              <div className="qa-agent-panel rounded-xl border border-white/10 bg-white/5 p-2.5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Bugs</p>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-xl font-semibold text-white">7</span>
                  <span className="font-mono text-[8px] text-rose-300">-32%</span>
                </div>
              </div>
              <div className="qa-agent-panel rounded-xl border border-white/10 bg-white/5 p-2.5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Coverage</p>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-xl font-semibold text-white">86%</span>
                  <span className="font-mono text-[8px] text-cyan-300">+14%</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="qa-agent-panel flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Status</p>
                  <p className="mt-1 text-sm font-medium text-emerald-300">Running</p>
                </div>
                <div className="h-8 w-8 rounded-full border border-emerald-400/60 bg-emerald-400/10" />
              </div>

              <div className="qa-agent-panel rounded-xl border border-white/10 bg-white/5 p-2.5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Test Execution</p>
                  <span className="font-mono text-[8px] text-cyan-300">76%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                  <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                </div>
                <div className="mt-2 space-y-1.5 text-[9px] text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Discovery</span>
                    <span className="text-emerald-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Planning</span>
                    <span className="text-emerald-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Execution</span>
                    <span className="text-amber-300">●</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-cyan-400/40 bg-slate-900/90 text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.35)]">
            <FlaskConical size={28} />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-200/80">
              {project.number}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-text-muted">
              {project.statusLabel}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual-shell relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden rounded-[22px] border border-border bg-bg-elevated">
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
            "radial-gradient(180px circle at 30% 20%, var(--glow), transparent 68%)",
        }}
      />
      <div className="project-visual-orbit project-visual-orbit-one" aria-hidden="true" />
      <div className="project-visual-orbit project-visual-orbit-two" aria-hidden="true" />

      <div className="relative flex flex-col items-center gap-4">
        <div className="project-visual-icon flex h-16 w-16 items-center justify-center rounded-[22px] border border-border-strong bg-surface/80 text-accent shadow-[0_0_30px_rgba(124,121,255,0.2)]">
          <Icon size={26} />
        </div>
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-faint">
            {project.number}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-muted">
            {project.statusLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
