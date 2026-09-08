import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { SectionLabel } from "./SectionLabel";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="text-balance text-3xl font-medium tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
