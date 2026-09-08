import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { CompactProjectCard } from "./CompactProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const supporting = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Proof of work, not a portfolio of promises."
          description="Real projects, presented with what they actually solve — the problem, the approach, and where each one stands today."
        />

        <div className="mt-14 space-y-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        {supporting.length > 0 && (
          <div className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-text-faint">
              Supporting Projects
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {supporting.map((project) => (
                <CompactProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
