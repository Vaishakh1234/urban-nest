import blurs from "../../public/img/manifest.json";

export type ImgName = keyof typeof blurs;

/**
 * Plain <img> with a hand-built srcset pointing at pre-generated WebP.
 *
 * Deliberately NOT next/image: on Vercel Hobby the Image Optimization API is a
 * metered resource, and every unique source/size combination counts against it.
 * These files are already WebP at 640/1024/1600, served straight from the CDN
 * with an immutable cache header — zero transformations, zero function calls.
 *
 * The inline blur data-URI (~140 bytes) paints instantly under the real image
 * so there's no flash of empty space, without costing an extra request.
 */
export function Img({
  name,
  alt,
  sizes = "100vw",
  className = "",
  priority = false,
  width = 1536,
  height = 1024,
}: {
  name: ImgName;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  const blur = blurs[name].blur;

  return (
    // next/image would route these through Vercel's metered Image Optimization
    // API. These are already WebP at three widths with a real srcset, sizes,
    // explicit dimensions and a blur placeholder, so the LCP/CLS concerns the
    // rule guards against are handled without the per-transformation cost.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/img/${name}-1024.webp`}
      srcSet={`/img/${name}-640.webp 640w, /img/${name}-1024.webp 1024w, /img/${name}-1600.webp 1600w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      // fetchPriority high on the LCP image, so the hero still paints fast.
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={className}
      style={{
        backgroundImage: `url(${blur})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
