import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  pad = "py-16 sm:py-24",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  /**
   * Vertical padding classes. Passed as a prop (not merged into className)
   * because conflicting Tailwind padding utilities resolve by stylesheet
   * order, so `pt-0` in className would silently lose to `sm:py-24`.
   */
  pad?: string;
}) {
  return (
    <section id={id} className={`${pad} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** The small outlined pill that labels every section in the reference. */
export function Chip({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return <span className={`chip ${dark ? "chip-dark" : ""}`}>{children}</span>;
}

/** Circular arrow button — appears on project cards and inside CTAs. */
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
  /* Accent pill with a white circular arrow — the primary CTA. */
  accent: "bg-accent text-white hover:bg-accent-hover",
  /* White pill on imagery or dark panels. */
  white: "bg-white text-ink hover:bg-cream-2",
  /* Near-black pill on light sections. */
  dark: "bg-ink text-white hover:bg-ink-2",
  outline: "border border-line text-ink hover:border-accent hover:text-accent",
} as const;

export function Button({
  href,
  children,
  variant = "accent",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  arrow?: boolean;
}) {
  const arrowTone =
    variant === "accent"
      ? "bg-white text-accent"
      : variant === "white" || variant === "outline"
        ? "bg-accent text-white"
        : "bg-white text-ink";

  const classes = `group inline-flex items-center gap-2.5 rounded-full py-2 pl-6 pr-2 text-sm font-medium shadow-pill transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-btn active:translate-y-0 active:shadow-pill ${variants[variant]} ${className}`;

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

  const external =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
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

/**
 * Section head: chip on the left, big heading, and optional supporting copy +
 * action pushed to the right — the exact arrangement used throughout Decori.
 */
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
  if (align === "center") {
    return (
      <div className="flex flex-col items-center text-center">
        <Chip dark={dark}>{chip}</Chip>
        <h2
          className={`h-display mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem] ${
            dark ? "text-on-dark" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={`mt-4 max-w-2xl text-[0.95rem] leading-relaxed ${
              dark ? "text-on-dark-dim" : "text-text-body"
            }`}
          >
            {intro}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
      <div>
        <Chip dark={dark}>{chip}</Chip>
        <h2
          className={`h-display mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] ${
            dark ? "text-on-dark" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {intro || action ? (
        <div className="flex flex-col items-start gap-5 lg:items-end">
          {intro ? (
            <p
              className={`max-w-md text-[0.95rem] leading-relaxed lg:text-right ${
                dark ? "text-on-dark-dim" : "text-text-body"
              }`}
            >
              {intro}
            </p>
          ) : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}
