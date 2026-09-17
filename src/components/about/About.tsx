import { useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import aboutPhoto from "../../assets/about-portrait.jpg";
import { LetterPullUp, WordFadeIn, GsapScrollCard } from "../ui/MagicText";

const METRICS = [
  { value: "02+", label: "Years Experience", description: "SQA & AI degree projects" },
  { value: "10+", label: "Completed Projects", description: "EdTech, testing agents & tools" },
  { value: "100%", label: "Verified Quality", description: "Evidence-based testing & precision" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#141414] text-white pt-32 sm:pt-40 pb-28 sm:pb-36 overflow-hidden"
    >
      {/* Subtle Background Pattern / Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Metrics */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Subtitle */}
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] text-[#888888] uppercase mb-3 block">
              HELLO
            </span>

            {/* Main Heading with Magic UI effect */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase font-display leading-[1.05] mb-6">
              <LetterPullUp words="I'M ASADULLAH" delay={0.04} />
            </h2>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg leading-relaxed text-[#A0A2AB] max-w-xl mb-10 font-normal">
              <WordFadeIn
                text="Passionate BS Artificial Intelligence student, developer, and product builder dedicated to crafting intelligent systems and digital experiences. With a keen eye for software quality, automated testing, and AI workflows, I transform complex ideas into intuitive and visually stunning products."
                delay={0.02}
              />
            </p>

            {/* Metrics List matching template design */}
            <div className="space-y-6 pt-2">
              {METRICS.map((metric, i) => (
                <GsapScrollCard key={metric.label} delay={i * 0.15}>
                  <div className="flex items-center gap-4 group">
                    {/* Checkmark Circle Badge */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6400] group-hover:text-white">
                      <Check size={20} className="stroke-[3]" />
                    </div>

                    {/* Stat Value & Label */}
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#C4C6CF]">
                        {metric.label}
                      </span>
                    </div>
                  </div>
                </GsapScrollCard>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Portrait with Creative Doodles */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end">
            <GsapScrollCard direction="right">
              <div className="relative max-w-[340px] sm:max-w-[400px]">
                {/* Subtle Geometric Checkerboard / Concentric Arc Backdrop */}
                <div
                  className="absolute -inset-4 rounded-3xl -z-10 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px)",
                  }}
                />

                {/* Orange Doodle: 3 Radiant Lines over Head */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -top-7 right-14 sm:right-18 z-20 pointer-events-none"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <line
                      x1="6"
                      y1="24"
                      x2="2"
                      y2="10"
                      stroke="#FF6400"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="20"
                      y1="22"
                      x2="20"
                      y2="6"
                      stroke="#FF6400"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="34"
                      y1="24"
                      x2="38"
                      y2="10"
                      stroke="#FF6400"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* Main Studio Portrait Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1C1C1E]">
                  <img
                    src={aboutPhoto}
                    alt="Asad Ullah Sikandar with notebook and coffee"
                    className="w-full h-auto object-cover grayscale contrast-110 brightness-95 transition-transform duration-700 hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Orange Doodle: 2 Wavy Lines on Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-16 -right-6 z-20 pointer-events-none"
                >
                  <svg width="55" height="30" viewBox="0 0 55 30" fill="none">
                    <path
                      d="M 2 8 Q 14 0, 26 8 T 50 8"
                      stroke="#FF6400"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 2 20 Q 14 12, 26 20 T 50 20"
                      stroke="#FF6400"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </motion.div>
              </div>
            </GsapScrollCard>
          </div>
        </div>
      </div>
    </section>
  );
}
