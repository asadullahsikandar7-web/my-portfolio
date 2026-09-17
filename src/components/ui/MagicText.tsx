import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Magic UI style Letter Pull Up animation
interface LetterPullUpProps {
  words: string;
  delay?: number;
  className?: string;
}

export function LetterPullUp({ words, delay = 0.04, className = "" }: LetterPullUpProps) {
  const letters = words.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const pullupVariant: Variants = {
    initial: { y: 35, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={i}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

// Magic UI style Word Fade In animation
interface WordFadeInProps {
  text: string;
  delay?: number;
  className?: string;
}

export function WordFadeIn({ text, delay = 0.08, className = "" }: WordFadeInProps) {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{
            duration: 0.45,
            delay: i * delay,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// GSAP ScrollTrigger Animated Card Container
interface GsapScrollCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function GsapScrollCard({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: GsapScrollCardProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    if (direction === "up") y = 35;
    if (direction === "left") x = 35;
    if (direction === "right") x = -35;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x, y, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
