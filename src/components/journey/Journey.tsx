import { timeline } from "../../data/timeline";
import { GsapScrollCard, LetterPullUp } from "../ui/MagicText";

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#F5EFEB] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF6400] uppercase mb-2 block">
            EXPERIENCE &amp; EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight uppercase font-display mb-4">
            <LetterPullUp words="My Journey So Far" delay={0.03} />
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Real production software testing, university AI exploration, and autonomous product development.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-black/[0.08] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {timeline.map((entry, index) => (
            <GsapScrollCard key={entry.period} delay={index * 0.1}>
              <div className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#FF6400] shadow-sm flex items-center justify-center group-hover:scale-125 transition-transform" />

                <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-black/[0.06] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-300">
                  {/* Period badge & current pill */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#FFF0E6] text-[#FF6400] text-xs font-bold font-mono">
                      {entry.period}
                    </span>
                    {entry.current && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#121212] text-white text-[11px] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6400] animate-ping" />
                        Current Focus
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#121212] font-display mb-4">
                    {entry.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#5A5D66] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6400] shrink-0 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GsapScrollCard>
          ))}
        </div>
      </div>
    </section>
  );
}
