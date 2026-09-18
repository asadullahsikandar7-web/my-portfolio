import { ArrowUpRight } from "lucide-react";
import { thinkingEntries } from "../../data/thinking";
import { GsapScrollCard, LetterPullUp } from "../ui/MagicText";

export function Thinking() {
  return (
    <section id="thinking" className="relative py-24 sm:py-32 bg-[#F5EFEB] scroll-mt-20 overflow-hidden">
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-[#FF6400]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF6400] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6400] animate-pulse" />
            ARTICLES &amp; THOUGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight uppercase font-display mb-4">
            <LetterPullUp words="Thinking In Public" delay={0.03} />
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Writing about AI engineering, real-world software quality, and building products.
          </p>
        </div>

        {/* Thinking Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thinkingEntries.map((entry, index) => (
            <GsapScrollCard key={entry.title} delay={index * 0.08}>
              <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-black/[0.06] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4 group">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF0E6] text-[#FF6400] text-[11px] font-bold uppercase tracking-wider mb-2">
                    {entry.topic}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#121212] font-display group-hover:text-[#FF6400] transition-colors">
                    {entry.title}
                  </h3>
                </div>

                {entry.comingSoon ? (
                  <span className="shrink-0 px-3 py-1 rounded-full bg-[#F5EFEB] text-[#777777] text-xs font-semibold">
                    Coming Soon
                  </span>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#121212] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FF6400] transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                )}
              </div>
            </GsapScrollCard>
          ))}
        </div>
      </div>
    </section>
  );
}
