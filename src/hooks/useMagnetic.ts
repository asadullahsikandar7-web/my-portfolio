import { useRef, type MouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

// Pulls an element a few px toward the cursor while it's nearby — the
// "magnetic button" effect. Disabled under reduced motion.
export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 14, mass: 0.4 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, style: { x: springX, y: springY }, onMouseMove, onMouseLeave };
}
