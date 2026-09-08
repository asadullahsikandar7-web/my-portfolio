import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Badge } from "../components/ui/Badge";
import { GithubIcon } from "../components/ui/BrandIcons";
import { getProjectBySlug } from "../data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function CaseStudyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{title}</h2>
      <div className="mt-3 text-base leading-relaxed text-text-muted sm:text-lg">{children}</div>
    </motion.div>
  );
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="pt-32 pb-24 sm:pt-40">
      <Container className="max-w-3xl">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              <ArrowLeft size={15} />
              Back to work
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm text-text-faint">{project.number}</span>
            {project.isConcept && <Badge variant="outline">Concept</Badge>}
            <Badge variant="accent">{project.statusLabel}</Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-balance text-4xl font-medium tracking-tight text-text sm:text-5xl"
          >
            {project.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-lg italic text-text-faint">
            {project.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-1.5">
            {project.category.map((c) => (
              <span
                key={c}
                className="font-mono text-xs uppercase tracking-wider text-accent"
              >
                {c}
                <span className="ml-1.5 text-text-faint last:hidden">·</span>
              </span>
            ))}
          </motion.div>

          {(project.github || project.live) && (
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-surface"
                >
                  <GithubIcon size={15} />
                  Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  Live
                  <ArrowUpRight size={15} />
                </a>
              )}
            </motion.div>
          )}
        </motion.div>

        <div className="mt-16 space-y-14">
          <CaseStudyBlock title="Overview">
            <p>{project.overview}</p>
          </CaseStudyBlock>

          <CaseStudyBlock title="Problem">
            <p>{project.problem}</p>
          </CaseStudyBlock>

          <CaseStudyBlock title="Solution">
            <p>{project.solution}</p>
          </CaseStudyBlock>

          <CaseStudyBlock title="Key Features">
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock title="Architecture">
            <ul className="space-y-2.5">
              {project.architecture.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  {a}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-text"
                >
                  {t}
                </span>
              ))}
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock title="Challenges">
            <ul className="space-y-2.5">
              {project.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  {c}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock title="Future Roadmap">
            <ul className="space-y-2.5">
              {project.roadmap.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        </div>
      </Container>
    </article>
  );
}
