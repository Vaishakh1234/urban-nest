# Deployment checklist — Vercel

The site is a fully static Next.js build: every route is prerendered to HTML at
build time, there are **no serverless functions**, and the Vercel Image
Optimization API is switched off. A page view is answered entirely by the CDN.

## Vercel project settings

| Setting | Value |
|---|---|
| Framework preset | Next.js |
| Build command | `next build` (default) |
| Output directory | `.next` (default — do **not** set `out/`) |
| Install command | `npm ci` |
| Node version | 20.x or 22.x |
| Root directory | repo root |

No environment variables are required. The site has no backend, no database and
no API routes; `SITE_URL` is a compile-time constant in `app/site.ts`.

### Why the usage meters stay near zero

- **Image Optimization: 0 transformations.** `images.unoptimized` is set in
  `next.config.ts`. Every image is a pre-built WebP in `public/img` served as a
  three-width `srcset`. Nothing is resized at request time.
- **Function invocations: 0.** All 22 routes are `○ (Static)` or `● (SSG)`.
  Confirm after any change by checking the route table printed by `next build` —
  an `ƒ (Dynamic)` marker means something started rendering per-request.
- **Bandwidth.** Images and fonts carry `Cache-Control: immutable, max-age=1y`,
  so repeat visits fetch nothing from the origin.

## Before the first deploy

- [ ] Point the domain `urbannestinteriors.in` at Vercel and let the
      certificate issue. `SITE_URL` in `app/site.ts` must match the final
      domain exactly, including `www` or its absence — it is what every
      canonical URL, the sitemap and the JSON-LD `@id`s are built from.
- [ ] Pick one canonical host and 301 the other (Vercel does this automatically
      when you mark one domain as primary). Two reachable hosts split ranking
      signals.
- [ ] Verify `https://urbannestinteriors.in/robots.txt` and `/sitemap.xml`
      resolve and list the production domain, not localhost.

## After the first deploy

- [ ] **Google Search Console** — add the domain property, verify by DNS TXT,
      submit `https://urbannestinteriors.in/sitemap.xml`.
- [ ] **Google Business Profile** — this is the single highest-leverage item for
      "interior designers Pathanamthitta". Claim the listing, and make the name,
      address and phone byte-identical to `app/site.ts`. Google cross-checks the
      `LocalBusiness` JSON-LD on the site against the GBP listing; a mismatch in
      the NAP triple weakens both.
- [ ] **Rich Results Test** (search.google.com/test/rich-results) on the home,
      services, contact and one project page. Expect: `LocalBusiness` /
      `InteriorDesigner`, `BreadcrumbList`, `ItemList`, `FAQPage`, `CreativeWork`.
- [ ] **Bing Webmaster Tools** — import the Search Console property; it is two
      clicks and Bing feeds ChatGPT search results.
- [ ] Request indexing for the five top-level routes in Search Console rather
      than waiting for the first organic crawl.

## Regenerating assets

Both scripts are idempotent and safe to re-run.

```bash
# Logos, favicon, PWA icons — after replacing public/brand/logo-source-*.png
node scripts/generate-brand-assets.mjs

# Re-encode public/img and rebuild the blur manifest — after adding photos
node scripts/optimize-images.mjs
```

`scripts/optimize-images.mjs` rewrites `public/img/manifest.json`, which is the
source of truth for both blur placeholders and intrinsic image dimensions. Run
it after adding any image, or `Img` will not know the new file exists and the
build will fail on the `ImgName` type.

## Adding a project or service

Both live in `app/content.ts`. Adding an entry automatically:

- creates the static route (`generateStaticParams` in `app/projects/[slug]`),
- adds the URL to `sitemap.xml`,
- adds it to the page's `ItemList` structured data,
- adds it to the `hasOfferCatalog` on the business schema (services only).

The `image` field is typed against the manifest, so a typo is a build error
rather than a broken image in production.

## Regression checks before merging

```bash
npm run lint          # must be clean
npm run build         # every route must stay ○ or ● — no ƒ
```

For Core Web Vitals, audit the production build rather than `next dev`:

```bash
npm run build && npx next start -p 3000
npx lighthouse http://localhost:3000/ --preset=desktop --view
```

Desktop baseline at the time of writing: performance 99, accessibility 98,
best-practices 100, SEO 100 — LCP 1.0s, CLS 0, TBT 0ms.
