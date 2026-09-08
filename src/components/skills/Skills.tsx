import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { skillGroups, type Skill } from "../../data/skills";
import { projects } from "../../data/projects";

function projectTitles(usedIn: string[]): string {
  return usedIn
    .map((id) => projects.find((p) => p.id === id)?.title)
    .filter(Boolean)
    .join(", ");
}

function SkillPill({ skill }: { skill: Skill }) {
  const [open, setOpen] = useState(false);
  const titles = projectTitles(skill.usedIn);
  const hasUsage = titles.length > 0;

  return (
    <div className="relative">
      <button
        type="button"
        onMouseEnter={() => hasUsage && setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => hasUsage && setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label={hasUsage ? `${skill.name} — used in ${titles}` : skill.name}
        className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-muted transition-colors duration-200 hover:border-border-strong hover:text-text"
      >
        {skill.name}
      </button>

      {hasUsage && open && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          role="tooltip"
          className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[220px] -translate-x-1/2 rounded-lg border border-border-strong bg-bg-elevated px-3 py-2 text-center font-mono text-[11px] text-text-muted shadow-xl"
        >
          Used in: <span className="text-text">{titles}</span>
        </motion.div>
      )}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Tools I actually reach for."
          description="Grouped by where they show up in real work, not a logo wall. Hover a skill to see which project it's used in."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.04 }}
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-text-faint">
                {group.title}
              </h3>
              <motion.div
                variants={staggerContainer(0.03)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
