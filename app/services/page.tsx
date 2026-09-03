import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { ProcessSteps } from "../components/ProcessSteps";
import { ServiceCard } from "../components/ServiceCard";
import { BUSINESS_ID, JsonLd, breadcrumbLd } from "../components/JsonLd";
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
    description: "A complete range of interior design and build services — from 3D design to turnkey site execution.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Interior design services by Urbannest Interiors",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    // url lets Google treat each entry as its own linkable item.
    url: `${SITE_URL}/services#${s.slug}`,
    item: {
      "@type": "Service",
      "@id": `${SITE_URL}/services#${s.slug}`,
      name: s.title,
      description: s.copy,
      serviceType: s.title,
      image: `${SITE_URL}/img/${s.image}-1024.webp`,
      provider: { "@id": BUSINESS_ID },
      areaServed: site.serviceAreas.map((a) => ({
        "@type": "City",
        name: a,
        containedInPlace: { "@type": "State", name: "Kerala" },
      })),
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbLd([{ name: "Services", path: "/services" }])} />

      <PageHero
        title="Our Services"
        crumb="Services"
        image="hero-kitchen-modern"
        imageAlt="Urbannest Interiors - Modern modular kitchen with grey cabinets, teak breakfast bar and pendant lighting"
        subtitle="Comprehensive residential interior scopes — from 3D planning and custom modular kitchens to full turnkey villa execution."
      />

      <Section>
        <SectionHead
          chip="Services"
          title={<>Interior solutions designed<br className="hidden sm:block" /> for real spaces</>}
          intro="We offer a complete range of interior design and home décor services, helping you shape spaces that feel comfortable, functional and visually balanced — from the first idea to the final details."
          action={<Button href="/contact" variant="dark">Contact Us</Button>}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} anchorOnly />
          ))}
        </div>
      </Section>

      <Section pad="pb-16 sm:pb-24 lg:pb-32">
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