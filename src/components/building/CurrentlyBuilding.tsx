import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { getProjectBySlug } from "../../data/projects";

export function CurrentlyBuilding() {
  const acadexa = getProjectBySlug("acadexa");
  if (!acadexa) return null;

  return (
    <section id="building" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--glow)" }}
          />

          <div className="relative flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-2" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
              Currently Building
            </p>
          </div>

          <h2 className="relative mt-4 text-3xl font-medium tracking-tight text-text sm:text-4xl">
            {acadexa.title}
          </h2>
          <p className="relative mt-3 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {acadexa.description}
          </p>

          <div className="relative mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-text-faint">
                Current Focus
              </p>
              <p className="text-sm text-text-muted sm:text-base">{acadexa.solution}</p>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-text-faint">
                Roadmap
              </p>
              <ul className="space-y-1.5">
                {acadexa.roadmap.slice(0, 2).map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-text-muted sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap gap-2">
            {acadexa.technologies.map((t) => (
              <span key={t} className="rounded-md border border-border bg-bg-elevated px-2.5 py-1 font-mono text-[11px] text-text-muted">
                {t}
              </span>
            ))}
          </div>

          <Link
            to="/work/acadexa"
            className="group relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
          >
            Read the full case study
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
