import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Send } from "lucide-react";
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
        "This assistant is being connected to Asad's verified data. Feel free to use the contact form or LinkedIn in the meantime!",
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
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-[#141414] px-0 sm:px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xl hover:border-[#FF6400] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <Bot size={16} className="text-[#FF6400]" />
        <span className="hidden sm:inline">Ask Asad's AI</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Ask Asad's Portfolio AI"
            className="fixed bottom-20 right-5 sm:bottom-22 sm:right-6 z-40 w-[calc(100vw-2.5rem)] sm:w-full max-w-sm rounded-[24px] border border-white/10 bg-[#1C1C1E] p-5 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#FF6400] flex items-center justify-center text-white">
                  <Bot size={13} />
                </div>
                <h3 className="text-sm font-bold text-white">Asad's Portfolio AI</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
              Ask any question about Asadullah's background, AI projects, or SQA experience.
            </p>

            <div className="mt-3 space-y-1.5">
              {SAMPLE_QUESTIONS.slice(0, 2).map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setQuestion(q)}
                  className="w-full text-left text-[11px] font-medium text-zinc-300 hover:text-[#FF6400] p-2 rounded-lg bg-[#141414] transition-colors border border-white/5"
                >
                  "{q}"
                </button>
              ))}
            </div>

            <form onSubmit={handleAsk} className="mt-4 flex items-center gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 rounded-xl bg-[#141414] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6400]"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-[#FF6400] text-white flex items-center justify-center shrink-0 hover:bg-[#E55A00] transition-colors"
              >
                <Send size={13} />
              </button>
            </form>

            {notice && (
              <p className="mt-3 text-[11px] text-orange-300/80 bg-orange-950/30 border border-orange-800/30 p-2.5 rounded-lg">
                {notice}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
