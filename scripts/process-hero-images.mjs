#!/usr/bin/env node
/**
 * Process generated hero images into multi-resolution WebP variants
 * and update the manifest.json with blur data URIs.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const IMG_DIR = join(import.meta.dirname, "..", "public", "img");
const MANIFEST_PATH = join(IMG_DIR, "manifest.json");
const WIDTHS = [640, 1024, 1600];

// Map of new image name -> source PNG path
const images = {
  "hero-living-warm": "/home/vaishakh/.gemini/antigravity/brain/d968718c-c298-479a-b90b-ae0e2fe6135d/hero_homepage_1788451354235.png",
  "hero-living-airy": "/home/vaishakh/.gemini/antigravity/brain/d968718c-c298-479a-b90b-ae0e2fe6135d/hero_about_1788451372358.png",
  "hero-kitchen-modern": "/home/vaishakh/.gemini/antigravity/brain/d968718c-c298-479a-b90b-ae0e2fe6135d/hero_services_1788451387981.png",
  "hero-bedroom-suite": "/home/vaishakh/.gemini/antigravity/brain/d968718c-c298-479a-b90b-ae0e2fe6135d/hero_projects_1788451403996.png",
  "hero-dining-warm": "/home/vaishakh/.gemini/antigravity/brain/d968718c-c298-479a-b90b-ae0e2fe6135d/hero_contact_1788451427146.png",
};

async function generateBlur(buffer) {
  const tiny = await sharp(buffer)
    .resize(20, 20, { fit: "cover" })
    .webp({ quality: 20 })
    .toBuffer();
  return `data:image/webp;base64,${tiny.toString("base64")}`;
}

async function main() {
  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));

  for (const [name, srcPath] of Object.entries(images)) {
    console.log(`Processing: ${name}`);
    const srcBuffer = readFileSync(srcPath);
    const meta = await sharp(srcBuffer).metadata();

    // Generate multi-width WebP files
    for (const w of WIDTHS) {
      const outPath = join(IMG_DIR, `${name}-${w}.webp`);
      await sharp(srcBuffer)
        .resize(w, Math.round(w * (meta.height / meta.width)), { fit: "cover" })
        .webp({ quality: 82 })
        .toFile(outPath);
      console.log(`  ✓ ${name}-${w}.webp`);
    }

    // Generate blur placeholder
    const blur = await generateBlur(srcBuffer);

    // Add to manifest
    manifest[name] = {
      blur,
      width: 1024,
      height: 1024,
    };
    console.log(`  ✓ blur placeholder added`);
  }

  // Write updated manifest
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\n✅ Manifest updated at ${MANIFEST_PATH}`);
}

main().catch(console.error);
