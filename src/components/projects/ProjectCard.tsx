import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { Badge } from "../ui/Badge";
import { GlowCard } from "../ui/GlowCard";
import { GithubIcon } from "../ui/BrandIcons";
import { ProjectVisual } from "./ProjectVisual";
import { fadeUp, viewportOnce } from "../../lib/motion";

export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
      transition={{ type: "spring", stiffness: 150, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <GlowCard className="p-2 shadow-[0_20px_70px_rgba(6,8,16,0.4)]">
        <div
          className={`grid gap-6 p-4 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <ProjectVisual project={project} />

          <div className="flex flex-col justify-center">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-text-faint">{project.number}</span>
              {project.isConcept && <Badge variant="outline">Concept</Badge>}
              <Badge variant="accent">{project.statusLabel}</Badge>
            </div>

            <h3 className="text-2xl font-medium tracking-tight text-text sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm italic text-text-faint">{project.tagline}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.category.map((c) => (
                <span key={c} className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  {c}
                  <span className="ml-1.5 text-text-faint last:hidden">·</span>
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-5">
              <Link
                to={`/work/${project.slug}`}
                className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
              >
                View Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} source on GitHub`}
                  className="text-text-faint transition-colors hover:text-text"
                >
                  <GithubIcon size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
