import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { askPortfolioAssistant, SAMPLE_QUESTIONS } from "../../lib/portfolioAssistant";

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [notice, setNotice] = useState<string | null>(null);

  async function handleAsk(e: FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    try {
      await askPortfolioAssistant(question);
    } catch {
      setNotice(
        "This assistant isn't connected yet — it will answer only from Asad's real portfolio and project data once it is. Try the contact form in the meantime.",
      );
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label={open ? "Close portfolio assistant" : "Ask Asad's Portfolio AI"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-40 flex h-13 items-center gap-2 rounded-full border border-border-strong bg-bg-elevated px-4 py-3 text-sm font-medium text-text shadow-xl shadow-black/10 backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
      >
        <Sparkles size={16} className="text-accent" />
        Ask Asad's AI
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Ask Asad's Portfolio AI"
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm rounded-2xl border border-border-strong bg-bg-elevated p-5 shadow-2xl shadow-black/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent" />
                <h3 className="text-sm font-medium text-text">Ask Asad's Portfolio AI</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-text-faint transition-colors hover:text-text"
              >
                <X size={16} />
              </button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-text-muted">
              A grounded assistant that will answer only from Asad's real
              portfolio, CV, and project data — coming soon.
            </p>

            <div className="mt-4 space-y-2">
              {SAMPLE_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuestion(q)}
                  className="block w-full rounded-lg border border-border bg-surface/50 px-3 py-2 text-left text-xs text-text-muted transition-colors hover:border-border-strong hover:text-text"
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={handleAsk} className="mt-4 flex items-center gap-2">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question..."
                className="w-full rounded-full border border-border bg-surface px-4 py-2 text-xs text-text placeholder:text-text-faint focus:border-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-text px-4 py-2 text-xs font-medium text-bg transition-opacity hover:opacity-90"
              >
                Ask
              </button>
            </form>

            {notice && (
              <p className="mt-3 text-[11px] leading-relaxed text-text-faint" role="status">
                {notice}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
