import { useRef, type ComponentProps, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { IntelligenceNetwork } from "./IntelligenceNetwork";
import { CornerFrame } from "../ui/CornerFrame";
import { LinkButton } from "../ui/Button";
import { LineReveal } from "../ui/LineReveal";
import { useMagnetic } from "../../hooks/useMagnetic";
import { fadeUp, staggerContainer } from "../../lib/motion";

function MagneticLink({ children, ...props }: ComponentProps<typeof LinkButton>) {
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic(0.2);
  return (
    <motion.div ref={ref} style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <LinkButton {...props}>{children}</LinkButton>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  function handlePointerMove(e: MouseEvent<HTMLElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--py", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="drift-slow absolute -top-32 left-[8%] h-[26rem] w-[26rem] rounded-full opacity-50 blur-[100px]"
          style={{ background: "var(--glow)" }}
        />
        <div
          className="drift-slow absolute -top-20 right-[4%] h-72 w-72 rounded-full opacity-30 blur-[100px]"
          style={{ background: "var(--accent-2)", animationDelay: "-8s" }}
        />
        <div
          className="absolute inset-0 opacity-70 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(500px circle at var(--px, 50%) var(--py, 0%), var(--accent-soft), transparent 65%)",
          }}
        />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="mb-7 flex items-center gap-2.5 border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-wider text-text-muted"
          >
            <span className="text-accent-2">●</span>
            <span>
              Currently_Building <span className="text-text-faint">·</span>{" "}
              <span className="text-text">Acadexa</span>
              <span className="blink-cursor text-accent">_</span>
            </span>
          </motion.div>

          <div className="glass-panel hero-copy-panel p-3 sm:p-5">
            <h1 className="text-balance text-4xl font-medium leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
              <LineReveal delay={0.1}>
                Building <span className="text-gradient">Intelligence.</span>
              </LineReveal>
              <LineReveal delay={0.22}>
                Turning Ideas Into <span className="text-gradient">Reality.</span>
              </LineReveal>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-text-muted sm:text-lg"
            >
              I'm Asad Ullah Sikandar — a BS Artificial Intelligence student, developer,
              and product builder exploring AI, full-stack engineering, software
              quality assurance, automation, and intelligent systems.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-5">
              <MagneticLink href="#work" variant="primary">
                Explore My Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticLink>
              <MagneticLink href="#contact" variant="secondary">
                Let's Connect
              </MagneticLink>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider text-text-faint"
            >
              <span>AI &amp; Data</span>
              <span aria-hidden>·</span>
              <span>Full-Stack</span>
              <span aria-hidden>·</span>
              <span>SQA &amp; Automation</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hero-visual mx-auto w-full max-w-[300px] sm:max-w-sm lg:max-w-none"
        >
          <div className="glass-panel hero-visual-core p-3 sm:p-4">
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <CornerFrame scanline className="p-6">
              <IntelligenceNetwork />
            </CornerFrame>
            <div className="hero-float-panel">
              <span className="hero-float-title">Signal</span>
              <strong>AI Systems</strong>
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute inset-x-0 bottom-8 hidden items-center justify-center gap-3 sm:flex"
        aria-hidden
      >
        <span className="h-px w-6 bg-border-strong" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-faint">
          Scroll
        </span>
        <span className="h-px w-6 bg-border-strong" />
      </motion.div>
    </section>
  );
}
