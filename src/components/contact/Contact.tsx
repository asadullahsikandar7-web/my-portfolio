import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FileText, Mail, Send } from "lucide-react";
import { Container } from "../ui/Container";
import { Button, LinkButton } from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { social } from "../../data/social";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LINKS = [
  { label: "LinkedIn", href: social.linkedin, icon: LinkedinIcon, external: true },
  { label: "GitHub", href: social.github, icon: GithubIcon, external: true },
  { label: "Email", href: `mailto:${social.email}`, icon: Mail, external: false },
  { label: "Resume", href: social.resumeUrl, icon: FileText, external: true },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please share your name.";
    if (!values.email.trim()) next.email = "Please share an email so I can reply.";
    else if (!EMAIL_RE.test(values.email)) next.email = "That email doesn't look right.";
    if (!values.message.trim()) next.message = "Say a little about what you have in mind.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-medium tracking-tight text-text sm:text-5xl">
            Let's build something meaningful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            I'm always interested in learning, collaborating, and exploring
            meaningful technology ideas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {LINKS.map(({ label, href, icon: Icon, external }) => (
            <motion.div key={label} variants={fadeUp}>
              <LinkButton
                href={href}
                variant="secondary"
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                className="text-sm"
              >
                <Icon size={15} />
                {label}
              </LinkButton>
            </motion.div>
          ))}
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-14 max-w-xl space-y-5 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text placeholder:text-text-faint focus:border-accent"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-danger">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text placeholder:text-text-faint focus:border-accent"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-danger">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-text-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text placeholder:text-text-faint focus:border-accent"
              placeholder="What are you thinking of building, or what would you like to talk about?"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-danger">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Send Message
            <Send size={15} />
          </Button>

          {sent && (
            <p className="text-center text-sm text-text-muted" role="status">
              Opening your email client with this message pre-filled — feel
              free to edit it before sending.
            </p>
          )}
        </motion.form>
      </Container>
    </section>
  );
}
