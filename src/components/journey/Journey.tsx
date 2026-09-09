import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { timeline } from "../../data/timeline";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="The path so far, told honestly."
          description="No inflated titles, no invented milestones — just what's actually happened and what's actively in motion."
        />

        <div className="story-rail relative mt-16">
          <div aria-hidden className="story-rail-line" />

          {timeline.map((entry, i) => (
            <motion.div
              key={entry.period}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.05 }}
              className="story-step"
            >
              <span aria-hidden className={`story-step-bullet ${entry.current ? "active" : ""}`} />

              <div className="story-step-card glass-panel">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-mono text-sm text-accent">{entry.period}</span>
                  {entry.current && (
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-accent" />
                      Now
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-medium text-text sm:text-2xl">
                  {entry.title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-text-muted sm:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
