import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { Chip, Section, SectionHead } from "../components/ui";
import { ProjectGallery } from "./ProjectGallery";
import { projects } from "../content";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Interior Design Projects in Kerala",
  description:
    "Selected interior projects by Urbannest Interiors — living rooms, bedrooms, modular kitchens and dining areas across Pathanamthitta, Trivandrum, Varkala and Alappuzha.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Our Projects | Urbannest Interiors",
    description:
      "A selection of homes, kitchens and living spaces we've designed and built across Kerala.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        crumb="Projects"
        image="living-green-accent"
        imageAlt="Living room project with sectional sofa and built-in shelving by Urbannest"
      />

      <Section pad="pt-16 pb-8 sm:pt-24 sm:pb-10">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div>
            <Chip>Projects</Chip>
          </div>
          <p className="h-display max-w-3xl text-2xl leading-snug text-ink sm:text-[1.75rem]">
            Spaces shaped with care and intention — each project designed around
            layout, comfort and detail, from calming living areas to fully styled
            homes.
          </p>
        </div>
      </Section>

      <Section pad="pb-8 sm:pb-12">
        <div className="border-t border-line pt-12">
          <ProjectGallery projects={projects} />
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHead
          chip="Service Areas"
          title="Delivering interiors across Kerala"
          intro="We regularly execute projects in these districts, and are open to other locations in Kerala depending on project size."
          align="center"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {site.serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-line bg-white px-6 py-2.5 text-sm text-text-body"
            >
              {area}
            </span>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Your project could be next"
        intro="Send us your floor plan and we'll show you what's possible within your budget."
      />
    </>
  );
}
