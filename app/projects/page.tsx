import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { Chip, Section, SectionHead } from "../components/ui";
import { JsonLd, breadcrumbLd } from "../components/JsonLd";
import { ProjectGallery } from "./ProjectGallery";
import { projects } from "../content";
import { SITE_URL, site } from "../site";

export const metadata: Metadata = {
  title: "Interior Design Projects in Kerala",
  description: "Selected interior projects by Urbannest Interiors — living rooms, bedrooms, modular kitchens and dining areas across Pathanamthitta, Trivandrum, Varkala and Alappuzha.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title: "Our Projects | Urbannest Interiors", description: "A selection of homes, kitchens and living spaces we've designed and built across Kerala." },
};

/** Portfolio index — gives Google an explicit crawl list of every project URL. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Interior design projects by Urbannest Interiors",
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/projects/${p.slug}`,
    name: p.title,
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbLd([{ name: "Projects", path: "/projects" }])} />

      <PageHero
        title="Our Projects"
        crumb="Projects"
        image="hero-bedroom-suite"
        imageAlt="Urbannest Interiors - Luxury master bedroom with cognac leather headboard, grey wardrobes and warm cove ceiling lighting"
        subtitle="Explore our portfolio of completed residential interiors, bedrooms, kitchens, and architectural space transformations."
      />

      <Section pad="pt-12 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
        <div className="rounded-[28px] border border-line/80 bg-cream/70 p-6 sm:p-10 lg:p-12 shadow-sm reveal">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-center">
            <div className="space-y-4">
              <Chip>Our Portfolio</Chip>
              <p className="h-display text-2xl font-semibold leading-snug text-ink sm:text-[1.85rem] lg:text-[2.2rem]">
                Spaces shaped with care and intention — each project designed around layout, comfort and detail, from calming living areas to fully styled homes.
              </p>
            </div>

            {/* Right Column: Portfolio Quick Categories Grid */}
            <div className="flex flex-wrap gap-2.5 border-t border-line/80 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <span className="rounded-full border border-accent/20 bg-white px-4 py-2 text-xs font-semibold text-accent shadow-2xs">
                ✨ Living Rooms & TV Units
              </span>
              <span className="rounded-full border border-accent/20 bg-white px-4 py-2 text-xs font-semibold text-accent shadow-2xs">
                🍳 Modular Kitchens & Dining
              </span>
              <span className="rounded-full border border-accent/20 bg-white px-4 py-2 text-xs font-semibold text-accent shadow-2xs">
                🛏️ Master Suites & Wardrobes
              </span>
              <span className="rounded-full border border-accent/20 bg-white px-4 py-2 text-xs font-semibold text-accent shadow-2xs">
                🏡 Villa Exteriors & Elevations
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section pad="pb-8 sm:pb-12">
        <div className="border-t border-line pt-12">
          <ProjectGallery projects={projects} />
        </div>
      </Section>

      <Section className="bg-cream" pad="pb-16 sm:pb-24 lg:pb-32">
        <SectionHead chip="Service Areas" title="Delivering interiors across Kerala" intro="We regularly execute projects in these districts, and are open to other locations in Kerala depending on project size." align="center" />
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {site.serviceAreas.map((area) => (
            <span key={area} className="rounded-full border border-line bg-white px-6 py-2.5 text-sm text-text-body">{area}</span>
          ))}
        </div>
      </Section>

      <CtaBand title="Your project could be next" intro="Send us your floor plan and we'll show you what's possible within your budget." />
    </>
  );
}