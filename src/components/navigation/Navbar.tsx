import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Thinking", href: "#thinking" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection(location.pathname === "/" ? SECTION_IDS : []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleNav(href: string) {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="relative z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <div
          className={`flex w-full items-center justify-between rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-border bg-bg-elevated/80 px-4 py-2 shadow-lg shadow-black/5 backdrop-blur-lg"
              : "border-transparent bg-transparent px-2 py-2"
          }`}
        >
          <Link
            to="/"
            onClick={() => handleNav("#home")}
            className="font-mono text-sm font-semibold tracking-tight text-text"
          >
            AUS<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV_LINKS.slice(1).map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative flex items-center gap-1.5 px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-text" : "text-text-muted hover:text-text"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] transition-opacity duration-200 ${
                      isActive ? "text-accent opacity-100" : "opacity-0"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-4 -bottom-px h-px bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface hover:text-text"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <div className="hidden sm:block">
              <Button onClick={() => handleNav("#contact")} className="text-xs">
                Let's Connect
              </Button>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-text transition-colors hover:bg-surface md:hidden"
            >
              <span className="relative block h-4 w-4">
                <span
                  className={`absolute left-0 top-1 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    open ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[13px] block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    open ? "top-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <nav
              className="flex h-full flex-col items-start justify-center gap-2 px-10"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNav(link.href)}
                    className={`text-4xl font-medium tracking-tight transition-colors ${
                      isActive ? "text-accent" : "text-text hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + NAV_LINKS.length * 0.05, duration: 0.4 }}
                className="mt-6"
              >
                <Button onClick={() => handleNav("#contact")}>Let's Connect</Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
