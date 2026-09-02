import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

/**
 * Static sitemap — generated at build time, served as a plain file from the
 * CDN, so it costs no serverless invocations.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; freq: "monthly" | "yearly" }[] = [
    { path: "", priority: 1, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/projects", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
