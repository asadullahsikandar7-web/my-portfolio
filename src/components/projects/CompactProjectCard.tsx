import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { Badge } from "../ui/Badge";
import { GlowCard } from "../ui/GlowCard";
import { fadeUp, viewportOnce } from "../../lib/motion";

export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <GlowCard className="h-full p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs text-text-faint">{project.number}</span>
          <Badge>{project.statusLabel}</Badge>
        </div>
        <h3 className="text-xl font-medium text-text">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.category.map((c) => (
            <span key={c} className="font-mono text-[10px] uppercase tracking-wider text-text-faint">
              {c}
            </span>
          ))}
        </div>
        <Link
          to={`/work/${project.slug}`}
          className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
        >
          View Project
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </GlowCard>
    </motion.div>
  );
}
