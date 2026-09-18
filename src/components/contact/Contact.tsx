import { useState, type FormEvent } from "react";
import { Mail, Send, FileText, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { social } from "../../data/social";
import { GsapScrollCard, LetterPullUp } from "../ui/MagicText";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#141414] text-white scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF6400] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6400] animate-pulse" />
              GET IN TOUCH
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-display leading-[1.05] mb-6">
              <LetterPullUp words="Let's Build Something Together" delay={0.03} />
            </h2>
            <p className="text-base sm:text-lg text-[#A0A2AB] leading-relaxed mb-10">
              Whether you want to discuss an AI project, collaborate on full-stack software, or discuss software quality assurance, I'd love to hear from you.
            </p>

            {/* Social / Contact Links */}
            <div className="space-y-4">
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C1C1E] border border-white/10 hover:border-[#FF6400] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6400] text-white flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-[#888888] uppercase font-bold tracking-wider">Email Me</div>
                  <div className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FF6400] transition-colors">
                    {social.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1C1C1E] border border-white/10 text-sm font-bold text-white hover:text-[#FF6400] hover:border-[#FF6400] transition-colors"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1C1C1E] border border-white/10 text-sm font-bold text-white hover:text-[#FF6400] hover:border-[#FF6400] transition-colors"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={social.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1C1C1E] border border-white/10 text-sm font-bold text-white hover:text-[#FF6400] hover:border-[#FF6400] transition-colors"
                >
                  <FileText size={18} />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <GsapScrollCard direction="right">
              <div className="bg-[#1C1C1E] rounded-[28px] p-8 sm:p-10 border border-white/10 shadow-2xl">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                    <p className="text-[#A0A2AB] text-sm max-w-sm mx-auto">
                      Thank you for reaching out. Your default email client was opened. I will respond to your message promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#A0A2AB] mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6400] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#A0A2AB] mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6400] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#A0A2AB] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell me about your project, idea, or questions..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6400] transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-shine w-full py-4 rounded-xl bg-[#FF6400] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#E55A00] transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 active:scale-[0.99] cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </GsapScrollCard>
          </div>
        </div>
      </div>
    </section>
  );
}
