import type { MetadataRoute } from "next";
import { site } from "./site";

/**
 * Served as /manifest.webmanifest. Statically generated at build time.
 * Lighthouse's installability audit wants name, icons at 192 and 512, a
 * start_url and a display mode.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFF6EC",
    theme_color: "#656042",
    lang: "en-IN",
    categories: ["business", "lifestyle", "shopping"],
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: "/icon-192.png", type: "image/png", sizes: "192x192", purpose: "any" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512", purpose: "any" },
      { src: "/icon-maskable-512.png", type: "image/png", sizes: "512x512", purpose: "maskable" },
    ],
  };
}
