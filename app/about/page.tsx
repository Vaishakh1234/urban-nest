import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { Img } from "../components/Img";
import { PageHero } from "../components/PageHero";
import { ProcessSteps } from "../components/ProcessSteps";
import { Button, Chip, Section, SectionHead } from "../components/ui";
import { BUSINESS_ID, JsonLd, breadcrumbLd } from "../components/JsonLd";
import { SITE_URL, site } from "../site";

export const metadata: Metadata = {
  title: "About Us — Urbannest Interiors | Pathanamthitta, Kerala",
  description:
    "Urbannest Interiors is a residential interior design and execution studio based in Vallicode, Pathanamthitta. One accountable team handling 3D design, carpentry, ceiling and site execution across Kerala.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Urbannest Interiors — Residential Design & Execution Studio",
    description:
      "Modern interiors. Thoughtful spaces. Complete execution across Pathanamthitta, Trivandrum, Varkala and Alappuzha.",
  },
};

const principles = [
  "Lifestyle-Focused Space Planning",
  "Photorealistic 3D Visualization",
  "In-House Precision Carpentry",
  "Complete Turnkey Site Accountability",
];

const approach = [
  {
    title: "Understanding Space Flow",
    copy: "We begin with your home's actual dimensions, natural light, and structural layout before sketching solutions.",
  },
  {
    title: "Cohesive Material & Lighting",
    copy: "Teak louvers, acrylic wardrobes, quartz surfaces, and warm profile LEDs are selected together as one material palette.",
  },
  {
    title: "Turnkey Execution Control",
    copy: "In-house manufacturing and direct site supervisors mean the approved 3D design is precisely what gets handed over.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "About Us", path: "/about" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${SITE_URL}/about#page`,
          name: `About ${site.name}`,
          url: `${SITE_URL}/about`,
          mainEntity: { "@id": BUSINESS_ID },
        }}
      />

      <PageHero
        title="About Urbannest"
        crumb="About Us"
        image="hero-living-airy"
        imageAlt="Urbannest Interiors - Bright airy living space with teak louver TV unit, pooja niche and natural daylight"
        subtitle="One accountable studio handling concept design, 3D visualization, custom carpentry, and on-site execution across Kerala."
      />

      <Section pad="pt-12 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
        <div className="rounded-[28px] border border-line/80 bg-cream/70 p-6 sm:p-10 lg:p-12 shadow-sm reveal">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:items-center">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Chip>Who We Are</Chip>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  • {site.tagline}
                </span>
              </div>
              <p className="h-display text-2xl font-semibold leading-snug text-ink sm:text-[1.85rem] lg:text-[2.2rem]">
                Urbannest Interiors is a residential interior design and execution studio creating thoughtfully designed, modern homes tailored to the way people live.
              </p>
            </div>

            {/* Right Column: 4 Key Studio Metrics Matrix */}
            <div className="grid grid-cols-2 gap-3.5 border-t border-line/80 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div className="rounded-2xl bg-white p-4 border border-line/60 shadow-2xs">
                <p className="text-2xl font-bold text-accent font-mono sm:text-3xl">100%</p>
                <p className="mt-1 text-xs font-semibold text-ink">In-House Carpentry</p>
                <p className="mt-0.5 text-[11px] text-text-dim">Factory built in Vallicode</p>
              </div>

              <div className="rounded-2xl bg-white p-4 border border-line/60 shadow-2xs">
                <p className="text-2xl font-bold text-accent font-mono sm:text-3xl">50+</p>
                <p className="mt-1 text-xs font-semibold text-ink">Homes Delivered</p>
                <p className="mt-0.5 text-[11px] text-text-dim">Across Kerala districts</p>
              </div>

              <div className="rounded-2xl bg-white p-4 border border-line/60 shadow-2xs">
                <p className="text-2xl font-bold text-accent font-mono sm:text-3xl">5-Yr</p>
                <p className="mt-1 text-xs font-semibold text-ink">Material Warranty</p>
                <p className="mt-0.5 text-[11px] text-text-dim">BWP marine plywood</p>
              </div>

              <div className="rounded-2xl bg-white p-4 border border-line/60 shadow-2xs">
                <p className="text-2xl font-bold text-accent font-mono sm:text-3xl">100%</p>
                <p className="mt-1 text-xs font-semibold text-ink">3D Match Rate</p>
                <p className="mt-0.5 text-[11px] text-text-dim">What you see is built</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section pad="pb-16 sm:pb-24 lg:pb-32">
        <div className="grid items-center gap-8 border-t border-line pt-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <Chip>Our Story</Chip>
            <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl">
              We started because the handoff kept breaking
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-text-body">
              <p>
                Anyone who has renovated a home in Kerala knows the pattern: a designer draws something beautiful, a carpenter builds something different, an electrician arrives after the ceiling is closed, and nobody takes responsibility for the gaps.
              </p>
              <p>
                Urbannest Interiors was built to eliminate that friction. Based in Vallicode, Pathanamthitta, we combine interior concept design, 3D visualization, in-house carpentry production, false ceiling installation, and on-site trade supervision under one accountable roof.
              </p>
              <p>
                Whether it is a full master bedroom suite, an open-plan living TV console, a modular kitchen, or a complete residential villa façade, what we present in the 3D walkthrough is what we deliver on site.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Button href="/projects" variant="dark">Explore Our Projects</Button>
              <Button href="/contact" variant="outline">Contact Studio</Button>
            </div>
          </div>
          <Img
            name="living-tv-unit"
            alt="Fluted teak wood TV console unit with marble backdrop by Urbannest"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-[300px] w-full rounded-[20px] object-cover sm:h-[400px] lg:h-[460px] reveal reveal-delay-1"
          />
        </div>
      </Section>

      <Section pad="pb-16 sm:pb-24 lg:pb-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="reveal">
            <Chip>Why Urbannest</Chip>
            <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl">
              Design that feels natural, modern, and enduring
            </h2>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-text-body">
              We focus on warm minimalist aesthetics, natural wood textures, concealed LED illumination, and ergonomic space layouts that look stunning on handover day and feel effortless every day after.
            </p>

            <ul className="mt-7 space-y-3.5">
              {principles.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.2 4.8 8.5 9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/contact">Book Free Consultation</Button>
            </div>
          </div>
          <Img
            name="bedroom-master-suite"
            alt="Contemporary master suite execution by Urbannest Interiors"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-[280px] w-full rounded-[20px] object-cover sm:h-[360px] lg:h-[440px] reveal reveal-delay-1"
          />
        </div>
      </Section>

      <Section pad="pb-16 sm:pb-24 lg:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-14 reveal">
          <div>
            <Chip>Our Approach</Chip>
            <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl">Thoughtful Design Principles</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
              We shape every detail — from room circulation and custom wardrobe storage to lighting warmth and wall paneling.
            </p>
          </div>
          <Img
            name="kitchen-dining-combo"
            alt="Modular dining and kitchen combo by Urbannest"
            sizes="(max-width: 1024px) 100vw, 360px"
            className="mx-auto h-[260px] w-full rounded-[20px] object-cover sm:h-[320px] lg:h-[380px] lg:w-[320px] reveal reveal-delay-1"
          />
          <ul className="space-y-7">
            {approach.map((a) => (
              <li key={a.title} className="flex gap-4 reveal reveal-delay-1">
                <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-base font-semibold text-ink">{a.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-text-body">{a.copy}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-cream" pad="py-16 sm:py-24 lg:py-32">
        <SectionHead
          chip="Our Process"
          title="How We Execute Your Interior Project"
          intro="Our 5-step design-to-execution workflow ensures seamless coordination from initial 3D drawings to final snag-free handover."
          align="center"
        />
        <ProcessSteps />
      </Section>

      <CtaBand />
    </>
  );
}