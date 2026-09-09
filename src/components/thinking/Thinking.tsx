import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { thinkingEntries } from "../../data/thinking";

export function Thinking() {
  return (
    <section id="thinking" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Thinking in Public"
          title="Writing about what I'm actually learning."
          description="Nothing published yet — these are the topics queued up next. Shown honestly as upcoming, not backdated to look like a finished archive."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          {thinkingEntries.map((entry) => (
            <motion.div
              key={entry.title}
              variants={fadeUp}
              whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="glass-panel flex items-center justify-between gap-4 rounded-[22px] px-5 py-4"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-faint">
                  {entry.topic}
                </p>
                <p className="mt-1 text-sm font-medium text-text sm:text-base">{entry.title}</p>
              </div>
              {entry.comingSoon && (
                <span className="shrink-0 rounded-full bg-bg-elevated px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-faint">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
