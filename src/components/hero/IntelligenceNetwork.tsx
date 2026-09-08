import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const HUB_TOP = { x: 200, y: 70 };
const HUB_BOTTOM = { x: 200, y: 330 };
const BRANCHES = [
  { id: "data", label: "DATA", x: 100, y: 200 },
  { id: "code", label: "CODE", x: 200, y: 200 },
  { id: "system", label: "SYSTEM", x: 300, y: 200 },
];

export function IntelligenceNetwork() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 60, damping: 14, mass: 0.6 };
  const branchX = useSpring(rawX, springConfig);
  const branchY = useSpring(rawY, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(relX * 14);
    rawY.set(relY * 14);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto aspect-square w-full max-w-md select-none"
    >
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="Diagram of an intelligence network: AI connecting to data, code, and systems, converging into a product"
        style={{ x: branchX, y: branchY }}
      >
        <g stroke="var(--border-strong)" strokeWidth="1" fill="none">
          {BRANCHES.map((b, i) => (
            <motion.line
              key={`top-${b.id}`}
              x1={HUB_TOP.x}
              y1={HUB_TOP.y}
              x2={b.x}
              y2={b.y}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeInOut" }}
            />
          ))}
          {BRANCHES.map((b, i) => (
            <motion.line
              key={`bottom-${b.id}`}
              x1={b.x}
              y1={b.y}
              x2={HUB_BOTTOM.x}
              y2={HUB_BOTTOM.y}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeInOut" }}
            />
          ))}
        </g>

        {!reducedMotion && (
          <motion.circle
            r={2.5}
            fill="var(--accent-2)"
            initial={{ cx: HUB_TOP.x, cy: HUB_TOP.y, opacity: 0 }}
            animate={{
              cx: [HUB_TOP.x, BRANCHES[1].x, HUB_BOTTOM.x],
              cy: [HUB_TOP.y, BRANCHES[1].y, HUB_BOTTOM.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
          />
        )}

        <g>
          {BRANCHES.map((b, i) => (
            <motion.g
              key={b.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
            >
              <circle cx={b.x} cy={b.y} r={5} fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.5" />
              <text
                x={b.x}
                y={b.y + 26}
                textAnchor="middle"
                className="font-mono"
                fontSize="11"
                letterSpacing="1.5"
                fill="var(--text-faint)"
              >
                {b.label}
              </text>
            </motion.g>
          ))}
        </g>

        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <circle cx={HUB_TOP.x} cy={HUB_TOP.y} r={7} fill="var(--accent)" />
          <text
            x={HUB_TOP.x}
            y={HUB_TOP.y - 20}
            textAnchor="middle"
            className="font-mono"
            fontSize="12"
            letterSpacing="2"
            fill="var(--text-muted)"
          >
            AI
          </text>
          <motion.circle
            cx={HUB_TOP.x}
            cy={HUB_TOP.y}
            r={14}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              reducedMotion
                ? { opacity: 0.3, scale: 1 }
                : { opacity: [0.5, 0, 0.5], scale: [1, 1.7, 1] }
            }
            transition={{ duration: 3, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <circle cx={HUB_BOTTOM.x} cy={HUB_BOTTOM.y} r={7} fill="var(--accent)" />
          <text
            x={HUB_BOTTOM.x}
            y={HUB_BOTTOM.y + 28}
            textAnchor="middle"
            className="font-mono"
            fontSize="12"
            letterSpacing="2"
            fill="var(--text-muted)"
          >
            PRODUCT
          </text>
          <motion.circle
            cx={HUB_BOTTOM.x}
            cy={HUB_BOTTOM.y}
            r={14}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              reducedMotion
                ? { opacity: 0.3, scale: 1 }
                : { opacity: [0.5, 0, 0.5], scale: [1, 1.7, 1] }
            }
            transition={{ duration: 3, repeat: reducedMotion ? 0 : Infinity, delay: 1, ease: "easeInOut" }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
