/**
 * Brand logo lockup using the official Urbannest wordmark.
 * Renders the dark-ink version on light headers and the cream version on dark
 * backgrounds.
 *
 * Deliberately a plain <img>, not next/image: the Image Optimization API is
 * switched off (see next.config.ts), so next/image would ship the raw file
 * through a client component for no gain. The WebP is pre-built by
 * scripts/generate-brand-assets.mjs at exactly 2x its rendered height.
 */
export function Logo({
  className = "",
  imgClassName = "",
  dark = false,
  eager = true,
}: {
  className?: string;
  imgClassName?: string;
  dark?: boolean;
  /** Set false where the logo starts hidden (the mobile drawer, the footer). */
  eager?: boolean;
}) {
  return (
    <span className={`inline-flex items-center shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dark ? "/logo.webp" : "/logo-dark.webp"}
        alt="Urbannest Interiors"
        width={410}
        height={116}
        // Deliberately not fetchPriority="high": that slot belongs to the hero
        // image, which is the LCP element on every page. Promoting the logo
        // would have the browser race a 29KB file against the one that actually
        // decides LCP.
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`h-11 w-auto object-contain sm:h-13 md:h-14 lg:h-[58px] ${imgClassName}`}
      />
    </span>
  );
}
