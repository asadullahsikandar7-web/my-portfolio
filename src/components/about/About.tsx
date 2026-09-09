import { motion } from "framer-motion";
import { Bot, Code2, FlaskConical, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { social } from "../../data/social";

const IDENTITY = [
  { icon: Sparkles, label: "BS Artificial Intelligence Student" },
  { icon: Code2, label: "Developer" },
  { icon: FlaskConical, label: "SQA / Test Automation Enthusiast" },
  { icon: Bot, label: "AI & Data Enthusiast" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="More than a student. A builder in progress."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4 text-base leading-relaxed text-text-muted sm:text-lg"
          >
            <div className="glass-panel story-panel p-5 sm:p-6">
              <motion.p variants={fadeUp}>
                I'm studying Artificial Intelligence at the university level, but most
                of what I know didn't come from a lecture slide — it came from
                building things that had to actually work: a platform for managing
                an institute, an agent that tests software the way a QA engineer
                would, a system for tracking classroom attendance.
              </motion.p>
            </div>

            <div className="glass-panel story-panel p-5 sm:p-6">
              <motion.p variants={fadeUp}>
                My work sits at the intersection of four things I keep coming back
                to: artificial intelligence, full-stack engineering, software
                quality assurance, and product thinking. I'm drawn to the point
                where a model or an idea stops being theoretical and has to survive
                contact with real users, real data, and real edge cases.
              </motion.p>
            </div>

            <div className="glass-panel story-panel p-5 sm:p-6">
              <motion.p variants={fadeUp}>
                I don't present this as a finished résumé of achievements — it's an
                evolving engineering career, still early, still being built in
                public. What follows is the honest version of that journey.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              {IDENTITY.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-3"
                >
                  <Icon size={16} className="shrink-0 text-accent" />
                  <span className="text-sm text-text">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="story-viewport lg:sticky lg:top-28 lg:self-start"
          >
            <motion.div
              className="portrait-card"
              whileHover={{
                rotateY: 12,
                rotateX: -8,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-ring portrait-ring-one" aria-hidden="true" />
              <div className="portrait-ring portrait-ring-two" aria-hidden="true" />

              <div className="portrait-frame">
                <img
                  src={social.photoUrl}
                  alt="Portrait of Asad Ullah Sikandar"
                  className="portrait-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-gradient-to-b from-surface to-bg-elevated text-text-faint">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border-strong font-mono text-xl text-text-muted">
                    AS
                  </div>
                  <p className="px-8 text-center text-xs">Photo coming soon</p>
                </div>
              </div>

              <div className="portrait-badge">
                <span className="portrait-badge-dot" />
                AI Builder
              </div>
            </motion.div>

            <div className="mt-4 glass-panel px-3 py-4 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-faint">
                Learn → Build → Test → Improve → Ship
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
