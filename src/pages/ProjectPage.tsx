import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GithubIcon } from "../components/ui/BrandIcons";
import { getProjectBySlug } from "../data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function CaseStudyCard({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className="bg-white rounded-[24px] p-6 sm:p-8 border border-black/[0.06] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#FF6400]" />
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#FF6400]">
          {title}
        </h2>
      </div>
      <div className="text-sm sm:text-[15px] leading-relaxed text-[#5A5D66]">{children}</div>
    </motion.div>
  );
}

function BulletList({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
              accent ? "bg-[#FF6400]" : "bg-[#C7C2B8]"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
    <article className="bg-[#F5EFEB]">
      {/* Dark Header — matches About/Contact section treatment */}
      <header className="relative bg-[#141414] text-white pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 sm:px-8 relative z-10">
          <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#A0A2AB] transition-colors hover:text-[#FF6400]"
              >
                <ArrowLeft size={15} />
                Back to work
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm text-[#666666]">{project.number}</span>
              {project.isConcept && <Badge variant="outline">Concept</Badge>}
              <Badge variant="accent">{project.statusLabel}</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-balance text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white"
            >
              {project.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-base sm:text-lg italic text-[#A0A2AB] max-w-xl">
              {project.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-1">
              {project.category.map((c, i) => (
                <span key={c} className="font-mono text-xs uppercase tracking-wider text-[#FF6400]">
                  {c}
                  {i < project.category.length - 1 && (
                    <span className="ml-1.5 text-[#666666]">·</span>
                  )}
                </span>
              ))}
            </motion.div>

            {(project.github || project.live) && (
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-[#FF6400] hover:text-[#FF6400]"
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
                    className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#FF6400] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#E55A00]"
                  >
                    Live Preview
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Case Study Body */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="space-y-6 sm:space-y-8">
          <CaseStudyCard title="Overview">
            <p>{project.overview}</p>
          </CaseStudyCard>

          <CaseStudyCard title="Problem">
            <p>{project.problem}</p>
          </CaseStudyCard>

          <CaseStudyCard title="Solution">
            <p>{project.solution}</p>
          </CaseStudyCard>

          <CaseStudyCard title="Key Features">
            <BulletList items={project.features} accent />
          </CaseStudyCard>

          <CaseStudyCard title="Architecture">
            <BulletList items={project.architecture} />
          </CaseStudyCard>

          <CaseStudyCard title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-[#F5EFEB] text-[#333333] text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </CaseStudyCard>

          <CaseStudyCard title="Challenges">
            <BulletList items={project.challenges} />
          </CaseStudyCard>

          <CaseStudyCard title="Future Roadmap">
            <BulletList items={project.roadmap} accent />
          </CaseStudyCard>
        </div>
      </div>
    </article>
  );
}
