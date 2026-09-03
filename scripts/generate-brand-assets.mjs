#!/usr/bin/env node
/**
 * Generates every brand asset the site serves from the two source logo PNGs.
 *
 * Run after replacing public/brand/logo-source-*.png:
 *   node scripts/generate-brand-assets.mjs
 *
 * Outputs (all committed, all served straight off the CDN — the Vercel Image
 * Optimization API is switched off in next.config.ts, so nothing is resized at
 * request time and everything must be pre-built at exactly the sizes we use):
 *
 *   public/logo.webp        cream wordmark for dark backgrounds  (2x of render size)
 *   public/logo-dark.webp   ink wordmark for light headers       (2x of render size)
 *   public/icon.svg         scalable tab icon (modern browsers prefer this)
 *   public/icon-{192,512}.png   PWA install icons referenced by app/manifest.ts
 *   public/icon-maskable-512.png  Android adaptive-icon variant
 *   public/apple-icon.png       180px iOS home-screen icon, opaque background
 *   public/favicon.ico          16/32/48 multi-size ICO for legacy + Windows tabs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");
const PUB = join(ROOT, "public");

/** Icon tile colour, mirrored from --accent in app/globals.css. */
const ACCENT = "#656042";

/** The header renders the wordmark at 58px tall; 2x that is plenty for retina. */
const WORDMARK_HEIGHT = 116;

/**
 * The pediment-and-columns emblem, redrawn as vector geometry from the source
 * artwork: a triangular roof, a "U"-shaped left column, two plain columns, and
 * a base plinth. Coordinates are on a 64x64 grid inset to a 40x40 safe area.
 */
const EMBLEM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="14" fill="${ACCENT}"/>
<g fill="#FFF6EC">
<path d="M32 13 52 30H45.2L32 18.7 18.8 30H12z"/>
<path d="M20.5 31h4v18.5a4.2 4.2 0 0 0 8.4 0V31h4v18.5a8.2 8.2 0 0 1-16.4 0z"/>
<rect x="38.5" y="31" width="4" height="22"/>
<rect x="45" y="31" width="4" height="22"/>
<rect x="13" y="52.5" width="38" height="4.5" rx="0.6"/>
</g>
</svg>
`;

/**
 * The favicon needs a square, legible glyph — the full wordmark is 3.5:1 and
 * turns to mush at 32px. The brand's pediment-and-columns emblem is the leading
 * element of the wordmark, so we crop it out and set it on a solid accent tile,
 * which reads on both light and dark tab bars.
 *
 * The crop is 1.05x the trimmed height: that takes the emblem in full and stops
 * short of the vertical divider bar that follows it.
 */
async function emblem() {
  const trimmed = await sharp(readFileSync(join(PUB, "brand", "logo-source-cream.png")))
    .trim({ threshold: 1 })
    .toBuffer({ resolveWithObject: true });

  const { height } = trimmed.info;
  return sharp(trimmed.data)
    .extract({ left: 0, top: 0, width: Math.round(height * 1.05), height })
    .toBuffer();
}

/**
 * @param rounded  false for the Apple touch icon — iOS applies its own mask and
 *                 double-rounding leaves visible notches at the corners.
 * @param scale    fraction of the tile the emblem occupies. The 0.62 default
 *                 keeps it clear of the rounded corners; maskable icons need a
 *                 smaller value to survive Android's safe-zone crop.
 */
async function emblemTile(size, mark, { background, rounded = true, scale = 0.62 }) {
  const inner = Math.round(size * scale);
  const layers = [
    {
      input: await sharp(mark)
        .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer(),
      gravity: "center",
    },
  ];

  // Punch the rounded-rect mask in the same composite pass — sharp keeps only
  // the layer list from the last .composite() call, so it cannot be chained.
  if (rounded) {
    layers.push({
      input: Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
          <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#fff"/>
        </svg>`
      ),
      blend: "dest-in",
    });
  }

  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite(layers)
    .png()
    .toBuffer();
}

async function main() {
  // ── Wordmarks ───────────────────────────────────────────────────────────
  // trim() drops the transparent padding baked into the source art, so the
  // rendered height is all glyph — no invisible box inflating the layout.
  for (const [src, out] of [
    ["logo-source-cream.png", "logo.webp"],
    ["logo-source-ink.png", "logo-dark.webp"],
  ]) {
    const buf = readFileSync(join(PUB, "brand", src));
    const info = await sharp(buf)
      .trim({ threshold: 1 })
      .resize({ height: WORDMARK_HEIGHT, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 92, effort: 6 })
      .toFile(join(PUB, out));
    console.log(`✓ public/${out} — ${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)}KB`);
  }

  // The cream emblem, cropped once and reused for every icon size.
  const mark = await emblem();

  // ── Scalable tab icon ───────────────────────────────────────────────────
  // Chrome prefers an SVG icon when one is offered; it stays crisp at any DPR
  // and costs well under a kilobyte. The emblem is redrawn as real vector
  // geometry rather than an embedded raster — tracing the source PNG produced a
  // 42KB file, where these four primitives come to well under 1KB.
  writeFileSync(join(PUB, "icon.svg"), EMBLEM_SVG);
  console.log(`✓ public/icon.svg — ${(Buffer.byteLength(EMBLEM_SVG) / 1024).toFixed(2)}KB`);

  // ── PNG app icons (Android / PWA install, referenced by app/manifest.ts) ─
  for (const size of [192, 512]) {
    writeFileSync(join(PUB, `icon-${size}.png`), await emblemTile(size, mark, { background: ACCENT }));
    console.log(`✓ public/icon-${size}.png — ${size}x${size}`);
  }

  // Maskable variant: Android crops icons to arbitrary shapes and only the
  // centre 80% is guaranteed visible, so this one is square-edged with the
  // emblem pulled in tighter.
  writeFileSync(
    join(PUB, "icon-maskable-512.png"),
    await emblemTile(512, mark, { background: ACCENT, rounded: false, scale: 0.5 })
  );
  console.log("✓ public/icon-maskable-512.png — 512x512");

  // ── Apple touch icon ────────────────────────────────────────────────────
  // iOS ignores transparency and applies its own corner mask, so this one is
  // squared off and fully opaque.
  writeFileSync(
    join(PUB, "apple-icon.png"),
    await emblemTile(180, mark, { background: ACCENT, rounded: false })
  );
  console.log("✓ public/apple-icon.png — 180x180");

  // ── Multi-size ICO ──────────────────────────────────────────────────────
  // Written by hand: sharp has no ICO encoder, and an ICO is just a small
  // header plus embedded PNGs. 16/32/48 covers tabs, bookmarks and Windows.
  const sizes = [16, 32, 48];
  const pngs = [];
  for (const s of sizes) pngs.push(await emblemTile(s, mark, { background: ACCENT }));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(sizes.length, 4);

  let offset = 6 + sizes.length * 16;
  const entries = sizes.map((s, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(s === 256 ? 0 : s, 0); // width  (0 means 256)
    e.writeUInt8(s === 256 ? 0 : s, 1); // height
    e.writeUInt8(0, 2); // palette size — 0 for truecolor
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(pngs[i].length, 8);
    e.writeUInt32LE(offset, 12);
    offset += pngs[i].length;
    return e;
  });

  const ico = Buffer.concat([header, ...entries, ...pngs]);
  writeFileSync(join(PUB, "favicon.ico"), ico);
  console.log(`✓ public/favicon.ico — ${sizes.join("/")}px, ${(ico.length / 1024).toFixed(1)}KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
