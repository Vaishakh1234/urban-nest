import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { ProcessSteps } from "../components/ProcessSteps";
import { ServiceCard } from "../components/ServiceCard";
import { Button, Section, SectionHead } from "../components/ui";
import { services } from "../content";
import { SITE_URL, site } from "../site";

export const metadata: Metadata = {
  title: "Interior Design Services in Kerala",
  description:
    "Interior design, modular kitchens, false ceiling, wardrobes and carpentry, wall paneling and complete turnkey execution across Pathanamthitta, Trivandrum, Varkala and Alappuzha.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Interior Design Services | Urbannest Interiors",
    description:
      "A complete range of interior design and build services — from 3D design to turnkey site execution.",
  },
};

/** Service schema helps these pages surface for "interior design near me". */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Interior design services by Urbannest Interiors",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.copy,
      serviceType: s.title,
      provider: { "@type": "InteriorDesigner", name: site.name, url: SITE_URL },
      areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Our Services"
        crumb="Services"
        image="dining-kitchen"
        imageAlt="Dining and modular kitchen interior designed by Urbannest Interiors"
      />

      {/* Services grid */}
      <Section>
        <SectionHead
          chip="Services"
          title={
            <>
              Interior solutions designed
              <br className="hidden sm:block" /> for real spaces
            </>
          }
          intro="We offer a complete range of interior design and home décor services, helping you shape spaces that feel comfortable, functional and visually balanced — from the first idea to the final details."
          action={
            <Button href="/contact" variant="dark">
              Contact Us
            </Button>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section pad="pb-16 sm:pb-24">
        <SectionHead
          chip="Our Process"
          title="How we bring your vision to life"
          intro="From first consultation to final reveal, every step is designed to create spaces that feel right and look beautiful over time."
          align="center"
        />
        <ProcessSteps />
      </Section>

      <CtaBand
        title="Not sure which scope you need?"
        intro="Tell us the rooms you want done and your rough budget. We'll tell you honestly what's achievable within it."
        cta="Talk to Us"
      />
    </>
  );
}
