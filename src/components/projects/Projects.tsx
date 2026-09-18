import { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { LetterPullUp } from "../ui/MagicText";

const CATEGORIES = ["All", "AI & Data", "Full-Stack", "SQA & Automation"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "AI & Data") {
      return project.category.some((c) => ["AI", "Data", "Analytics", "Machine Learning"].includes(c));
    }
    if (selectedCategory === "Full-Stack") {
      return project.category.some((c) => ["Full-Stack", "EdTech", "Web Development"].includes(c));
    }
    if (selectedCategory === "SQA & Automation") {
      return project.category.some((c) => ["SQA", "Automation", "Intelligent Agents"].includes(c));
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#F5EFEB] scroll-mt-20 overflow-hidden">
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-[550px] h-[550px] bg-[#FF6400]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Centered Section Heading matching template */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF6400] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6400] animate-pulse" />
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight uppercase font-display mb-4">
            <LetterPullUp words="Featured Project" delay={0.03} />
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Real-world systems, intelligent platforms, and practical tools engineered with modern
            technologies and rigorous quality standards.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#121212] text-white shadow-sm"
                    : "bg-white/80 text-[#555555] hover:bg-white hover:text-[#121212] border border-black/[0.04]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10 sm:space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
