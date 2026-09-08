import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const CLIP = "[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))]";

const base = `group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none ${CLIP}`;

const variants = {
  primary: "bg-text text-bg hover:opacity-95 active:scale-[0.98]",
  secondary:
    "border border-border-strong bg-surface/40 text-text backdrop-blur-sm hover:border-accent/50 hover:bg-surface active:scale-[0.98]",
  ghost: "text-text-muted hover:text-text [clip-path:none]",
};

type Variant = keyof typeof variants;

function Sheen() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute inset-y-0 left-[-40%] w-1/4 -skew-x-[20deg] bg-white/30 mix-blend-overlay transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
    </span>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
}

export function Button({ variant = "primary", icon, className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {variant === "primary" && <Sheen />}
      <span className="relative inline-flex items-center gap-2">{children}</span>
      {icon}
    </button>
  );
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  icon?: ReactNode;
}

export function LinkButton({ variant = "primary", icon, className = "", children, ...props }: LinkButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {variant === "primary" && <Sheen />}
      <span className="relative inline-flex items-center gap-2">{children}</span>
      {icon}
    </a>
  );
}
