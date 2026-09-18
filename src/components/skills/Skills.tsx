import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups, type Skill } from "../../data/skills";
import { projects } from "../../data/projects";
import { LetterPullUp, GsapScrollCard } from "../ui/MagicText";

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
        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F5EFEB] text-[#222222] border border-black/[0.04] hover:bg-[#FF6400] hover:text-white hover:border-[#FF6400] transition-all duration-200 cursor-pointer shadow-2xs"
      >
        {skill.name}
      </button>

      <AnimatePresence>
        {hasUsage && open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            role="tooltip"
            className="pointer-events-none absolute left-1/2 bottom-full z-30 mb-2 w-max max-w-[240px] -translate-x-1/2 rounded-lg bg-[#141414] px-3 py-1.5 text-center text-xs text-white shadow-xl"
          >
            <div className="text-[10px] text-[#A0A2AB] uppercase font-bold tracking-wider mb-0.5">
              Used in
            </div>
            <span className="font-semibold text-white">{titles}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#F5EFEB] scroll-mt-20 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[600px] h-[600px] bg-[#FF6400]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF6400] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6400] animate-pulse" />
            TECH STACK &amp; CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight uppercase font-display mb-4">
            <LetterPullUp words="Technologies I Build With" delay={0.03} />
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Hands-on technical stack across artificial intelligence, frontend, backend, database
            architecture, and automated testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, i) => (
            <GsapScrollCard key={group.id} delay={i * 0.08}>
              <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-black/[0.06] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#FF6400]" />
                    <h3 className="font-bold text-base text-[#121212] font-display uppercase tracking-wider">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {group.skills.map((skill) => (
                      <SkillPill key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </GsapScrollCard>
          ))}
        </div>
      </div>
    </section>
  );
}
