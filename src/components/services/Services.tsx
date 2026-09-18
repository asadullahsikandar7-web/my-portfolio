import { Bot, Code2, ShieldCheck, Sparkles } from "lucide-react";
import { GsapScrollCard, LetterPullUp } from "../ui/MagicText";

const SERVICES = [
  {
    number: "01",
    icon: Bot,
    title: "AI & Intelligent Systems",
    description:
      "Developing machine learning workflows, intelligent test agents, and data analysis pipelines that turn unstructured data into actionable insights.",
    tags: ["Machine Learning", "AI Agents", "Python", "Predictive Models"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Engineering robust single-page applications and backend APIs using React, TypeScript, Node.js, and modern serverless architectures.",
    tags: ["React", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS"],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "SQA & Automated Testing",
    description:
      "Rigorous quality engineering learned in production environments. Writing deterministic Playwright tests and ensuring software reliability.",
    tags: ["Playwright", "Test Automation", "Postman", "API Validation"],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Product Architecture",
    description:
      "Designing clean information hierarchies and role-based workflows for institutions, ensuring complex systems feel effortless to use.",
    tags: ["System Design", "Ecosystem Thinking", "UI/UX", "Vercel"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#F5EFEB] scroll-mt-20 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF6400]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF6400] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6400] animate-pulse" />
            SERVICES &amp; EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight uppercase font-display mb-4">
            <LetterPullUp words="What I Bring To The Table" delay={0.03} />
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Bridging theoretical artificial intelligence, production software quality, and modern
            web engineering.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <GsapScrollCard key={service.number} delay={index * 0.1}>
                <div className="bg-white rounded-[28px] p-8 sm:p-10 border border-black/[0.06] shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Header with Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF0E6] text-[#FF6400] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6400] group-hover:text-white">
                        <Icon size={24} className="stroke-[2.2]" />
                      </div>
                      <span className="text-2xl font-display font-extrabold text-[#D5D0C8] group-hover:text-[#FF6400] transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#121212] font-display mb-3 group-hover:text-[#FF6400] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] leading-relaxed text-[#5A5D66] mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-black/[0.04] flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#F5EFEB] text-[#333333] text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapScrollCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
