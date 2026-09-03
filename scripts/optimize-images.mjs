#!/usr/bin/env node
/**
 * Re-encodes every WebP in public/img and rewrites the blur manifest.
 *
 * Idempotent: re-encoding an already-processed file at the same quality is a
 * no-op in practice (a few bytes of entropy-coder drift), so this is safe to
 * re-run. It skips any file where the new encode is not actually smaller.
 *
 * Quality 76 was picked by A/B-ing 1:1 crops of the most detailed asset (the
 * villa facade, with fine railing and brick texture) against the original q82.
 * The difference is not visible at full zoom, and it cuts the largest files
 * roughly in half — which matters here because these are served straight from
 * the CDN with no Image Optimization API in front of them.
 */
import sharp from "sharp";
import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join } from "path";

const IMG_DIR = join(import.meta.dirname, "..", "public", "img");
const MANIFEST = join(IMG_DIR, "manifest.json");
const QUALITY = 76;

/** ~20x20 WebP, inlined as a data URI to hold the layout while the real image loads. */
async function blurDataUri(buffer) {
  const tiny = await sharp(buffer).resize(20, 20, { fit: "cover" }).webp({ quality: 20 }).toBuffer();
  return `data:image/webp;base64,${tiny.toString("base64")}`;
}

async function main() {
  const files = readdirSync(IMG_DIR).filter((f) => f.endsWith(".webp"));
  const manifest = {};
  let before = 0;
  let after = 0;

  for (const file of files.sort()) {
    const path = join(IMG_DIR, file);
    const original = readFileSync(path);
    before += original.length;

    const encoded = await sharp(original)
      .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
      .toBuffer();

    // Never write a bigger file than we started with.
    if (encoded.length < original.length) writeFileSync(path, encoded);
    after += statSync(path).size;

    // The manifest is keyed by base name; build it off the 1024 variant.
    const match = file.match(/^(.*)-1024\.webp$/);
    if (match) {
      const current = readFileSync(path);
      const meta = await sharp(current).metadata();
      manifest[match[1]] = {
        blur: await blurDataUri(current),
        width: meta.width,
        height: meta.height,
      };
    }
  }

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  const kb = (n) => (n / 1024).toFixed(0);
  console.log(`${files.length} files: ${kb(before)}KB → ${kb(after)}KB (−${kb(before - after)}KB)`);
  console.log(`manifest: ${Object.keys(manifest).length} entries`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
