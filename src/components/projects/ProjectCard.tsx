import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import type { Project } from "../../data/projects";
import { GsapScrollCard } from "../ui/MagicText";
import acadexaPreview from "../../assets/acadexa-preview.jpg";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  // Determine category pill label
  const categoryBadge = project.category[0] || "Featured";

  return (
    <GsapScrollCard direction={reverse ? "right" : "left"}>
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 border border-black/[0.06] shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Left Column: UI Preview / Dashboard Mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#F7F3EE] border border-black/[0.05] shadow-inner group/img aspect-[16/10] flex items-center justify-center">
              {project.id === "acadexa" ? (
                <img
                  src={acadexaPreview}
                  alt="Acadexa Dashboard Interface Preview"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-103"
                  loading="lazy"
                />
              ) : project.id === "ai-qa-agent" ? (
                // Interactive AI QA Agent Simulator Mockup
                <div className="w-full h-full p-6 bg-[#16161A] text-white flex flex-col justify-between font-mono text-xs select-none">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                      <span className="text-[11px] text-zinc-400 ml-2 font-sans font-medium">
                        Playwright Test Runner — ai-qa-worker
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                      ALL PASSING
                    </span>
                  </div>

                  <div className="space-y-2 py-3">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>✓ Scenario: auth-flow-login</span>
                      <span className="text-emerald-400">142ms</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>✓ Scenario: student-roster-export</span>
                      <span className="text-emerald-400">210ms</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>✓ Scenario: automated-grade-calc</span>
                      <span className="text-emerald-400">98ms</span>
                    </div>
                    <div className="flex items-center justify-between text-[#FF6400]">
                      <span className="animate-pulse">● Agent: Autonomous scenario synthesis</span>
                      <span className="text-zinc-500">running...</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase">Assertions Passed</div>
                      <div className="text-base font-bold text-white">48 / 48 (100%)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-zinc-500 uppercase">Engine</div>
                      <div className="text-xs font-semibold text-[#FF6400]">Playwright + GPT-4o</div>
                    </div>
                  </div>
                </div>
              ) : project.id === "product-trend-intelligence" ? (
                // Trend Intelligence Mockup
                <div className="w-full h-full p-6 bg-gradient-to-br from-[#FAFAF9] to-[#F2EFE9] flex flex-col justify-between select-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FF6400] text-white flex items-center justify-center font-bold text-xs">
                        PTI
                      </div>
                      <span className="text-xs font-bold text-zinc-800">
                        E-Commerce Pricing &amp; Demand Signals
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF0E6] text-[#FF6400] text-[10px] font-bold">
                      CONCEPT PROTOTYPE
                    </span>
                  </div>

                  {/* Visual Chart */}
                  <div className="my-auto py-2">
                    <div className="flex items-end justify-between h-28 gap-2 px-4">
                      <div className="w-full bg-[#E5E0D8] rounded-t-sm h-[40%]" />
                      <div className="w-full bg-[#E5E0D8] rounded-t-sm h-[55%]" />
                      <div className="w-full bg-[#E5E0D8] rounded-t-sm h-[45%]" />
                      <div className="w-full bg-[#E5E0D8] rounded-t-sm h-[70%]" />
                      <div className="w-full bg-[#FF6400] rounded-t-sm h-[92%] relative">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#FF6400] bg-white px-1 rounded shadow-xs">
                          +42%
                        </span>
                      </div>
                      <div className="w-full bg-[#E5E0D8] rounded-t-sm h-[65%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-zinc-400 px-4 mt-2 font-mono">
                      <span>W1</span>
                      <span>W2</span>
                      <span>W3</span>
                      <span>W4</span>
                      <span className="text-[#FF6400] font-bold">Peak</span>
                      <span>W6</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-600 pt-2 border-t border-black/5">
                    <span>Signal: 1,420 listings tracked</span>
                    <span className="font-semibold text-zinc-800">Python ML Engine</span>
                  </div>
                </div>
              ) : (
                // Attendance System Mockup
                <div className="w-full h-full p-6 bg-white flex flex-col justify-between select-none">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                    <span className="text-xs font-bold text-zinc-800">
                      Attendance Management Portal
                    </span>
                    <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Live Notification
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50">
                      <span className="font-medium text-zinc-700">Ali Khan (CS-2024-01)</span>
                      <span className="text-[11px] font-bold text-emerald-600">Present</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-red-50/50">
                      <span className="font-medium text-zinc-700">Hamza Tariq (CS-2024-02)</span>
                      <span className="text-[11px] font-bold text-red-500">Email Dispatched</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50">
                      <span className="font-medium text-zinc-700">Sara Ahmed (CS-2024-03)</span>
                      <span className="text-[11px] font-bold text-emerald-600">Present</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-400 flex justify-between pt-1">
                    <span>Auto-Email via Nodemailer</span>
                    <span>Date-Wise Analytics</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Category Pill Tag matching template */}
            <div className="mb-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF0E6] text-[#FF6400] text-xs font-bold tracking-wider uppercase">
                {categoryBadge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight font-display mb-2 group-hover:text-[#FF6400] transition-colors">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-semibold text-[#888888] mb-3">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#5A5D66] mb-5">
              {project.description}
            </p>

            {/* Key Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-7">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#F5EFEB] text-[#333333] text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-4 pt-1">
              <Link
                to={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121212] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#FF6400] transition-colors duration-300"
              >
                <span>View Case Study</span>
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#121212] hover:text-[#FF6400] hover:border-[#FF6400] transition-colors duration-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon size={17} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </GsapScrollCard>
  );
}
