import type { NextConfig } from "next";

/**
 * Tuned to stay inside Vercel's free (Hobby) limits.
 *
 * - `images.unoptimized` turns OFF the Image Optimization API entirely. That API
 *   is metered on Hobby (source images / transformations); serving pre-built
 *   WebP from /public instead costs zero transformations and is pure CDN.
 * - Every route is statically prerendered, so there is no serverless function
 *   invocation on a page view — the CDN answers it.
 * - Immutable, year-long cache headers on hashed static assets keep repeat
 *   visits off the origin entirely.
 */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  // Smaller HTML payloads; compression is handled at the edge too.
  compress: true,

  // Don't leak the framework version header.
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Pre-optimized WebP — content is immutable, so cache it hard.
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Static pages: serve from cache, revalidate in the background.
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
