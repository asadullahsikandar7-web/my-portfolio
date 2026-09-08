import { Mail } from "lucide-react";
import { Container } from "../ui/Container";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { social } from "../../data/social";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} Asad Ullah Sikandar. Built from scratch.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-text-faint transition-colors hover:text-text"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-text-faint transition-colors hover:text-text"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${social.email}`}
            aria-label="Send an email"
            className="text-text-faint transition-colors hover:text-text"
          >
            <Mail size={18} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
