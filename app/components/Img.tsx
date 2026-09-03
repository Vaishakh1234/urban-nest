import blurs from "../../public/img/manifest.json";

export type ImgName = keyof typeof blurs;

/**
 * Responsive image backed by the pre-built WebP srcset in /public/img.
 *
 * A server component on purpose. The previous version was a client component
 * that rendered the <img> at opacity-0 until an onLoad handler fired — which
 * meant the hero image could not paint until React had downloaded, parsed and
 * hydrated, pushing LCP out by however long that took. Here the markup is in
 * the initial HTML and the browser starts fetching immediately.
 *
 * The blur placeholder is a ~100-byte data URI painted as the wrapper's
 * background, so there is still something on screen while the image streams in,
 * with no JavaScript and no layout shift (width/height are always set).
 */
export function Img({
  name,
  alt,
  sizes = "100vw",
  className = "",
  priority = false,
  width,
  height,
}: {
  name: ImgName;
  alt: string;
  sizes?: string;
  className?: string;
  /** Set on above-the-fold images — skips lazy loading and raises fetch priority. */
  priority?: boolean;
  /** Defaults to the asset's real dimensions from the manifest. */
  width?: number;
  height?: number;
}) {
  const entry = blurs[name];
  const blur = entry?.blur;
  // Intrinsic size comes from the manifest, which the image pipeline writes
  // from the actual files. Hardcoding a guess here (it used to say 1536x1024
  // for assets that are square) gives the browser the wrong aspect ratio, so it
  // picks an unnecessarily large srcset candidate.
  const w = width ?? entry?.width ?? 1024;
  const h = height ?? entry?.height ?? 1024;

  return (
    <div
      className={`relative overflow-hidden bg-stone-200 ${className}`}
      style={
        blur
          ? {
              backgroundImage: `url("${blur}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/img/${name}-1024.webp`}
        srcSet={`/img/${name}-640.webp 640w, /img/${name}-1024.webp 1024w, /img/${name}-1600.webp 1600w`}
        sizes={sizes}
        alt={alt}
        width={w}
        height={h}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
