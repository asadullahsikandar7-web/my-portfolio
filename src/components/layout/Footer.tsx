import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { social } from "../../data/social";
import { getLenis } from "../../lib/lenis";

export function Footer() {
  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#141414] border-t border-white/10 text-white py-12 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
            <span className="w-full h-full bg-[#FF6400] rounded-xs" />
            <span className="w-full h-full bg-[#FF6400] rounded-full" />
            <span className="w-full h-full bg-[#FF6400] rounded-full" />
            <span className="w-full h-full bg-[#FF6400] rounded-xs" />
          </div>
          <p className="text-xs text-[#888888] font-medium">
            © {new Date().getFullYear()} Asad Ullah Sikandar. All Rights Reserved.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#FF6400] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#FF6400] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="text-[#888888] hover:text-[#FF6400] transition-colors"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-white hover:bg-[#FF6400] hover:border-[#FF6400] transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
