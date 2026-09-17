import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import { getLenis } from "../../lib/lenis";
import { social } from "../../data/social";

const NAV_LINKS = [
  { label: "HOME", href: "#home", hasDropdown: false },
  { label: "ABOUT ME", href: "#about", hasDropdown: false },
  { label: "SERVICES", href: "#services", hasDropdown: false },
  { label: "PROJECTS", href: "#projects", hasDropdown: false },
  { label: "JOURNEY", href: "#journey", hasDropdown: false },
  { label: "CONTACT", href: "#contact", hasDropdown: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const lenis = getLenis();
    const target = document.querySelector(href);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -30, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5EFEB]/90 backdrop-blur-md py-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-b border-black/[0.04]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-2.5 group"
        >
          {/* Stylized geometric orange emblem matching template */}
          <div className="w-8 h-8 grid grid-cols-2 gap-1 p-0.5 transition-transform duration-300 group-hover:rotate-45">
            <span className="w-full h-full bg-[#FF6400] rounded-sm" />
            <span className="w-full h-full bg-[#FF6400] rounded-full" />
            <span className="w-full h-full bg-[#FF6400] rounded-full" />
            <span className="w-full h-full bg-[#FF6400] rounded-sm" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#121212] font-display">
            Asadullah Sidandar
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[13px] font-bold tracking-wider text-[#333333] hover:text-[#FF6400] transition-colors flex items-center gap-1 group py-1"
            >
              <span>{link.label}</span>
              {link.hasDropdown && (
                <ChevronDown
                  size={13}
                  className="transition-transform duration-200 group-hover:rotate-180 opacity-60"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={social.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#121212] text-white text-[13px] font-bold tracking-wider uppercase hover:bg-[#FF6400] transition-colors duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/20 active:scale-95"
          >
            <Download size={14} className="stroke-[2.5]" />
            DOWNLOAD CV
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#121212] hover:text-[#FF6400] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#F5EFEB] border-b border-black/10 px-6 py-6 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-base font-bold text-[#121212] hover:text-[#FF6400] transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-black/5">
            <a
              href={social.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#121212] text-white text-sm font-bold tracking-wider uppercase hover:bg-[#FF6400] transition-colors"
            >
              <Download size={15} />
              DOWNLOAD CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
