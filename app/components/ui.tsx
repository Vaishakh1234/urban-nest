import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const max = size === "sm" ? "max-w-4xl" : size === "md" ? "max-w-[1280px]" : "max-w-[1440px]";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  pad = "py-16 sm:py-24 lg:py-32",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  pad?: string;
}) {
  return (
    <section id={id} className={`${pad} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Chip({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return <span className={`chip ${dark ? "chip-dark" : ""}`}>{children}</span>;
}

export function ArrowCircle({
  className = "",
  size = "h-9 w-9",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={`inline-flex ${size} shrink-0 items-center justify-center rounded-full ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M3.5 10.5 10.5 3.5M10.5 3.5H5M10.5 3.5V9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const variants = {
  accent: "bg-accent text-white hover:bg-accent-hover",
  white: "bg-white text-ink hover:bg-cream-2",
  dark: "bg-ink text-white hover:bg-ink-2",
  outline: "border border-line text-ink hover:border-accent hover:text-accent",
} as const;

export function Button({
  href,
  children,
  variant = "accent",
  className = "",
  arrow = true,
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  arrow?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const arrowTone =
    variant === "accent"
      ? "bg-white text-accent"
      : variant === "white" || variant === "outline"
        ? "bg-accent text-white"
        : "bg-white text-ink";

  const sizeClasses = {
    sm: "py-2 px-4 text-xs",
    md: "py-2.5 px-5 text-sm",
    lg: "py-3 px-6 text-base",
  };

  const classes = `group inline-flex items-center gap-2.5 rounded-full font-medium shadow-pill transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-btn active:translate-y-0 active:shadow-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${variants[variant]} ${sizeClasses[size]} ${className}`;

  const inner = (
    <>
      {children}
      {arrow ? (
        <ArrowCircle
          size="h-8 w-8"
          className={`${arrowTone} transition-transform duration-200 group-hover:rotate-45`}
        />
      ) : null}
    </>
  );

  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} className={classes} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function SectionHead({
  chip,
  title,
  intro,
  action,
  dark = false,
  align = "split",
}: {
  chip: string;
  title: ReactNode;
  intro?: string;
  action?: ReactNode;
  dark?: boolean;
  align?: "split" | "center";
}) {
  const textClass = dark ? "text-on-dark" : "text-ink";
  const bodyClass = dark ? "text-on-dark-dim" : "text-text-body";

  if (align === "center") {
    return (
      <div className="flex flex-col items-center text-center">
        <Chip dark={dark}>{chip}</Chip>
        <h2 className={`h-display mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem] ${textClass}`}>
          {title}
        </h2>
        {intro ? (
          <p className={`mt-4 max-w-2xl text-[0.95rem] leading-relaxed ${bodyClass}`}>
            {intro}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
      <div>
        <Chip dark={dark}>{chip}</Chip>
        <h2 className={`h-display mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] ${textClass}`}>
          {title}
        </h2>
      </div>
      {(intro || action) && (
        <div className="flex flex-col items-start gap-5 lg:items-end">
          {intro && (
            <p className={`max-w-md text-[0.95rem] leading-relaxed lg:text-right ${bodyClass}`}>
              {intro}
            </p>
          )}
          {action}
        </div>
      )}
    </div>
  );
}