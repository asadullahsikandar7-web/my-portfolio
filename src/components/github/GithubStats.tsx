import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, Star, Users } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { GlowCard } from "../ui/GlowCard";
import { GithubIcon } from "../ui/BrandIcons";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { useGithubStats } from "../../hooks/useGithubStats";
import { social } from "../../data/social";

export function GithubStats() {
  const { user, repos, loading, error } = useGithubStats();

  return (
    <section id="github" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Open Source"
          title="What's public on GitHub."
          description="Pulled live from GitHub's public API — no fabricated activity, just what's actually there."
        />

        {!error && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-text-muted">
              <GithubIcon size={16} />
              <span className="font-mono text-sm">
                {loading ? "—" : user?.public_repos ?? "—"} public repos
              </span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <Users size={16} />
              <span className="font-mono text-sm">
                {loading ? "—" : user?.followers ?? "—"} followers
              </span>
            </div>
          </motion.div>
        )}

        {error ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 rounded-2xl border border-dashed border-border-strong bg-surface/30 p-8 text-center"
          >
            <p className="text-sm text-text-muted">
              GitHub activity couldn't be loaded right now — that's fine, it
              doesn't affect anything else here.
            </p>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              View the profile directly
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {loading &&
              Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-32 animate-pulse rounded-2xl border border-border bg-surface/40"
                />
              ))}

            {!loading && repos.length === 0 && (
              <p className="col-span-full text-sm text-text-muted">
                No public repositories yet — check back soon.
              </p>
            )}

            {!loading &&
              repos.map((repo) => (
                <motion.a
                  key={repo.id}
                  variants={fadeUp}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GlowCard className="h-full p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="truncate text-sm font-medium text-text">{repo.name}</h3>
                      <ArrowUpRight size={14} className="shrink-0 text-text-faint" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs text-text-muted">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-text-faint">
                      {repo.language && <span>{repo.language}</span>}
                      <span className="flex items-center gap-1">
                        <Star size={11} /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={11} /> {repo.forks_count}
                      </span>
                    </div>
                  </GlowCard>
                </motion.a>
              ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
