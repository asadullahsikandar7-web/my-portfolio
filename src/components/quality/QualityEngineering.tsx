import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

const PIPELINE = ["Plan", "Build", "Test", "Automate", "Analyze", "Improve"];

const PRACTICES = [
  "API Testing",
  "Functional Testing",
  "Test Automation",
  "Regression Testing",
  "Software Quality Assurance",
  "AI-Assisted Testing",
];

export function QualityEngineering() {
  return (
    <section id="quality" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Quality Engineering"
          title="I don't just build software. I test it."
          description="Shipping something that works once is easy. Shipping something that keeps working is an engineering discipline — and it's the one I care about most."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PIPELINE.map((step, i) => (
            <motion.div
              key={step}
              variants={fadeUp}
              whileHover={{ y: -5, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="glass-panel story-step-card p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-lg font-medium text-text">{step}</span>
                <ArrowRight size={16} className="shrink-0 text-text-faint" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap justify-center gap-2.5"
        >
          {PRACTICES.map((practice) => (
            <motion.span
              key={practice}
              variants={fadeUp}
              className="rounded-full border border-border bg-bg-elevated px-4 py-2 font-mono text-xs text-text-muted"
            >
              {practice}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-panel mx-auto mt-14 max-w-xl rounded-[28px] p-6 text-center sm:p-8"
        >
          <p className="text-sm text-text-muted sm:text-base">
            This mindset is exactly what I'm building into{" "}
            <span className="font-medium text-text">AI QA Agent</span> — an
            autonomous testing platform that reasons like a QA engineer and
            verifies like one too.
          </p>
          <Link
            to="/work/ai-qa-agent"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            See how it works
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
