import { useRef } from "react";
import { motion } from "framer-motion";
import { getLenis } from "../../lib/lenis";
import heroCutout from "../../assets/hero-portrait.png";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    const lenis = getLenis();
    const target = document.querySelector("#about");
    if (target) {
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[92vh] sm:min-h-screen bg-[#F5EFEB] flex flex-col justify-between pt-20 sm:pt-24 pb-12 overflow-visible select-none"
    >
      {/* Background Subtle Warm Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6400]/[0.035] rounded-full blur-3xl" />
      </div>

      {/* Main Hero Visual Composition */}
      <div className="relative flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full min-h-[580px] sm:min-h-[660px] md:min-h-[720px]">
        {/* Layer 1: Geometric Orange Asterisk Graphic (BEHIND the text layer at z-5) */}
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 15, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[4%] sm:left-[8%] md:left-[12%] lg:left-[16%] bottom-[8%] sm:bottom-[12%] z-5 pointer-events-none"
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 text-[#FF6400] drop-shadow-sm"
          >
            <g transform="translate(100, 100) rotate(15)">
              <rect x="-14" y="-85" width="28" height="170" rx="14" fill="currentColor" />
              <rect
                x="-14"
                y="-85"
                width="28"
                height="170"
                rx="14"
                fill="currentColor"
                transform="rotate(45)"
              />
              <rect
                x="-14"
                y="-85"
                width="28"
                height="170"
                rx="14"
                fill="currentColor"
                transform="rotate(90)"
              />
              <rect
                x="-14"
                y="-85"
                width="28"
                height="170"
                rx="14"
                fill="currentColor"
                transform="rotate(135)"
              />
            </g>
          </svg>
        </motion.div>

        {/* Layer 2: Display Typography (IN FRONT of orange star at z-10, with white outline center letters at z-30) */}
        <div className="relative w-full flex flex-col items-center justify-center pointer-events-none my-auto select-none">
          {/* Top Line: I'M AN (solid black, z-10) + AI ENT (white outline, z-30) + HUSIAST (solid black, z-10) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center font-display font-extrabold uppercase tracking-tighter text-[clamp(2.3rem,7.8vw,7.4rem)] leading-[0.88] flex items-center justify-center"
          >
            {/* Left Solid Black Text */}
            <span className="text-[#121212] z-10">I'M AN&nbsp;</span>

            {/* Middle White Dotted/Outline Text across head & neck */}
            <span
              className="z-30 text-transparent relative inline-block"
              style={{
                WebkitTextStroke: "1.8px #FFFFFF",
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.55))",
              }}
            >
              AI ENT
            </span>

            {/* Right Solid Black Text */}
            <span className="text-[#121212] z-10">HUSIAST</span>
          </motion.h1>

          {/* Bottom Line: & D (solid black, z-10 on top of orange star) + EVELO (white outline, z-30 over chest) + PER (solid black, z-10) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center font-display font-extrabold uppercase tracking-tighter text-[clamp(2.7rem,9.6vw,9.2rem)] leading-[0.88] mt-2 sm:mt-4 flex items-center justify-center"
          >
            {/* Left Solid Black Text (sits ON TOP of the orange star at z-10) */}
            <span className="text-[#121212] z-10">&amp;&nbsp;D</span>

            {/* Middle White Dotted/Outline Text across dark polo shirt */}
            <span
              className="z-30 text-transparent relative inline-block"
              style={{
                WebkitTextStroke: "1.8px #FFFFFF",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.55))",
              }}
            >
              EVELO
            </span>

            {/* Right Solid Black Text */}
            <span className="text-[#121212] z-10">PER</span>
          </motion.div>
        </div>

        {/* Layer 3: Asadullah Cutout Portrait (Centered at z-20, between black text z-10 and white outline z-30) */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-4 sm:bottom-8 md:bottom-12 z-20 flex justify-center pointer-events-none"
        >
          <img
            src={heroCutout}
            alt="Asad Ullah Sikandar - AI Enthusiast & Developer"
            className="w-auto h-[490px] sm:h-[600px] md:h-[680px] max-w-none object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.16)]"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Layer 4: Floating Circular Scroll Down Badge (z-40) */}
      <div className="relative z-40 flex justify-center -mb-20 sm:-mb-22">
        <motion.button
          type="button"
          onClick={handleScrollDown}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#181818] border-2 border-white/20 shadow-2xl flex items-center justify-center group cursor-pointer"
          aria-label="Scroll to About Section"
        >
          {/* Rotating Text Ring */}
          <div className="absolute inset-0 w-full h-full animate-spin-badge pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="heroScrollCircle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9.5px] font-bold tracking-[0.24em] fill-white/90 uppercase">
                <textPath href="#heroScrollCircle" startOffset="0%">
                  SCROLL DOWN • SCROLL DOWN •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center Orange Mouse Icon */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FF6400] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
            <div className="w-4 h-6 border-2 border-white rounded-full flex justify-center pt-1">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
