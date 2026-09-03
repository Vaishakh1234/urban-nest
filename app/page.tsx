import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "./components/CtaBand";
import { Img } from "./components/Img";
import { ServiceCard } from "./components/ServiceCard";
import {
  ArrowCircle,
  Button,
  Chip,
  Container,
  Section,
  SectionHead,
} from "./components/ui";
import { services, projects, process } from "./content";
import { SITE_URL, site } from "./site";

export const metadata: Metadata = {
  title: "Urbannest Interiors | Interior Designers in Pathanamthitta & Kerala",
  description:
    "Urbannest Interiors is a premier residential interior design & turnkey execution studio based in Pathanamthitta, Kerala. Specializing in modern modular kitchens, 3D interior design, custom wardrobe carpentry, false ceiling lighting, and full home transformations across Pathanamthitta, Trivandrum, Varkala & Alappuzha.",
  keywords: [
    "interior designers Pathanamthitta",
    "interior design company Kerala",
    "modular kitchen Pathanamthitta",
    "3D interior design Kerala",
    "turnkey interior execution Kerala",
    "home interior designers Vallicode",
    "false ceiling profile lighting Kerala",
    "custom wardrobe carpentry Pathanamthitta",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title: "Urbannest Interiors | Modern Interior Designers in Pathanamthitta & Kerala",
    description:
      "Transforming raw spaces into modern, beautiful homes. Complete 3D design, custom factory carpentry, and turnkey site execution in Kerala.",
    images: [
      {
        url: `${SITE_URL}/img/living-open-plan-1600.webp`,
        width: 1536,
        height: 1024,
        alt: "Urbannest Interiors - Modern Living Room Interior Design in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urbannest Interiors | Interior Designers in Pathanamthitta",
    description: "Modern interior design & turnkey home execution studio in Pathanamthitta, Kerala.",
    images: [`${SITE_URL}/img/living-open-plan-1600.webp`],
  },
};

const testimonials = [
  {
    quote:
      "Urbannest handled everything for our home — 3D design, custom wardrobes, false ceiling, and lighting execution. They transformed an empty structure into our dream home without us chasing contractors.",
    name: "Anoop & Priya R.",
    place: "Trivandrum",
    project: "Complete Home Execution",
    stars: 5,
  },
  {
    quote:
      "The 3D walkthrough matched our finished master bedroom and living room TV wall almost down to the millimeter. Outstanding craftsmanship and finish quality.",
    name: "Sreeja M.",
    place: "Pathanamthitta",
    project: "Master Bedroom & TV Wall",
    stars: 5,
  },
  {
    quote:
      "Exceptional coordination from 3D designs to final carpentry delivery. The teak louver wall paneling and ambient cove lighting transformed our living area completely.",
    name: "Dr. K. Mathew",
    place: "Varkala",
    project: "Living & False Ceiling",
    stars: 5,
  },
  {
    quote:
      "Honest timeline commitment and snag-free handover. Their modular kitchen and acrylic wardrobe finish are top-notch.",
    name: "Rahul & Neha S.",
    place: "Alappuzha",
    project: "Modular Kitchen & Wardrobes",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[24px]">
          <Img
            name="hero-living-warm"
            alt="Urbannest Interiors - Contemporary living room with walnut fluted TV wall and warm ambient lighting"
            sizes="100vw"
            priority
            className="h-[min(78vh,720px)] min-h-[540px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0">
            <Container className="pb-10 sm:pb-16">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl reveal">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-medium text-white shadow-pill backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {site.tagline}
                  </span>
                  <h1 className="h-display mt-5 text-4xl font-semibold text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.08]">
                    Modern interiors.
                    <br />
                    Thoughtful spaces.
                    <br />
                    <span className="text-white/90">Complete execution.</span>
                  </h1>
                </div>

                <div className="lg:max-w-md reveal reveal-delay-1">
                  <p className="hidden sm:block text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
                    Urbannest Interiors is a residential interior design and execution studio creating thoughtfully designed, modern homes tailored to the way people live. From concept and 3D visualization to custom furniture, lighting and on-site execution, we transform empty spaces into complete homes.
                  </p>
                  <div className="mt-4 sm:mt-6 flex flex-row items-center gap-2.5 sm:gap-3">
                    <Button href="/contact" variant="white" size="md" className="flex-1 justify-center sm:flex-initial text-xs sm:text-sm py-2.5 px-3.5 sm:px-5">
                      Book Consultation
                    </Button>
                    <Button href="/projects" variant="white" size="md" className="flex-1 justify-center sm:flex-initial text-xs sm:text-sm py-2.5 px-3.5 sm:px-5">
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* CORE POSITIONING / PHILOSOPHY */}
      <Section pad="py-12 sm:py-16 lg:py-20">
        <div className="rounded-[28px] border border-line/80 bg-cream/70 p-6 sm:p-10 lg:p-12 shadow-sm reveal">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-center">
            <div className="space-y-4">
              <Chip>Our Positioning</Chip>
              <h2 className="text-[1.6rem] font-semibold leading-[1.25] tracking-[-0.01em] text-ink sm:text-[2rem] lg:text-[2.35rem]">
                &ldquo;We don&apos;t just sell furniture. We transform the entire space.&rdquo;
              </h2>
              <p className="text-[0.95rem] leading-relaxed text-text-body">
                Every home we design is treated as a cohesive environment — where furniture, custom carpentry, false ceilings, lighting, wall paneling, and decorative accents work together in complete balance. Based in Vallicode, Pathanamthitta, our team handles design, production drawings, in-house manufacturing, and site supervision under one roof.
              </p>
            </div>

            {/* Right Column: 3 Studio Pillars Grid */}
            <div className="grid gap-3.5 border-t border-line/80 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div className="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-line/60 shadow-2xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">Turnkey Single-Point Responsibility</h3>
                  <p className="mt-0.5 text-xs text-text-body">No vendor handoff breakdowns. One studio accountable from start to handover.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-line/60 shadow-2xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">In-House Manufacturing Workshop</h3>
                  <p className="mt-0.5 text-xs text-text-body">Factory carpentry production in Vallicode with precision CNC & marine plywood.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-line/60 shadow-2xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">5-Year Material & Build Warranty</h3>
                  <p className="mt-0.5 text-xs text-text-body">Guaranteed BWP marine plywood & premium Hettich/Hafele hardware fittings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* VISUAL TRANSFORMATION SPOTLIGHT (BEFORE / AFTER & EXECUTIONS) */}
      <Section pad="pb-16 sm:pb-24 lg:pb-28">
        <SectionHead
          chip="Space Transformation"
          title="From Raw Concept to Completed Home"
          intro="Our portfolio reflects our core strength: turning unfinished structural spaces into complete, beautifully executed residential interiors."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Transformation Card 1 */}
          <div className="group overflow-hidden rounded-[24px] border border-line bg-white shadow-card transition-all duration-300 hover:shadow-xl reveal">
            <div className="relative h-[300px] sm:h-[360px] w-full overflow-hidden">
              <Img
                name="exterior-modern-villa"
                alt="Kerala Villa Facade Exterior Design Transformation by Urbannest"
                sizes="(max-width: 1024px) 100vw, 680px"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-ink/80 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Residential Exterior Façade
                </span>
                <span className="rounded-full bg-accent/90 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Full Transformation
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="h-display text-2xl text-ink">Contemporary Residential Exterior</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-body">
                Turned a raw structural residence into a modern 2-story contemporary villa with white rendered surfaces, terracotta brick accent wall, glass balcony railings, and outdoor garden lights.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-medium text-text-dim">
                <span>Location: Pathanamthitta</span>
                <Link href="/projects/contemporary-residential-exterior" className="flex items-center gap-1 text-accent transition-colors hover:text-ink">
                  View Project Case Study →
                </Link>
              </div>
            </div>
          </div>

          {/* Transformation Card 2 */}
          <div className="group overflow-hidden rounded-[24px] border border-line bg-white shadow-card transition-all duration-300 hover:shadow-xl reveal reveal-delay-1">
            <div className="relative h-[300px] sm:h-[360px] w-full overflow-hidden">
              <Img
                name="bedroom-master-suite"
                alt="The Trivandrum Residence Master Bedroom Suite Transformation by Urbannest"
                sizes="(max-width: 1024px) 100vw, 680px"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-ink/80 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                  The Trivandrum Project
                </span>
                <span className="rounded-full bg-accent/90 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Complete Room Transformation
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="h-display text-2xl text-ink">Master Bedroom & Storage Suite</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-body">
                Designed as one cohesive space: floor-to-ceiling slate grey wardrobes, cognac leather headboard, backlit teak display niche, floating dressing vanity, and warm cove ceiling.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-medium text-text-dim">
                <span>Location: Trivandrum</span>
                <Link href="/projects/trivandrum-residence" className="flex items-center gap-1 text-accent transition-colors hover:text-ink">
                  View Project Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6 MAJOR SERVICE CATEGORIES */}
      <Section pad="pb-16 sm:pb-24 lg:pb-28">
        <SectionHead
          chip="Services"
          title={
            <>
              6 Major Categories for
              <br className="hidden sm:block" /> Your Complete Home
            </>
          }
          intro="Instead of dozens of piecemeal services, we structure our work into 6 comprehensive categories to cover every aspect of residential design and execution."
          action={
            <Button href="/services" variant="dark">
              All Service Scopes
            </Button>
          }
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* REDESIGNED 6-STEP DESIGN-TO-EXECUTION PROCESS */}
      <Section className="bg-cream" pad="py-16 sm:py-24 lg:py-28">
        <SectionHead
          chip="How We Work"
          title="Our 6-Step Design-to-Execution Model"
          intro="From first space understanding to final snag-free handover, our structured workflow guarantees your space turns out exactly like the approved 3D design."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, idx) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-line/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40 reveal"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-sm font-bold text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold text-text-dim uppercase tracking-wider">
                    Step 0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {step.copy}
                </p>
              </div>

              <div className="mt-6 h-1 w-full rounded-full bg-stone-100 overflow-hidden">
                <div className="h-full w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURED PROJECTS PORTFOLIO */}
      <Section pad="py-16 sm:py-24 lg:py-28">
        <SectionHead
          chip="Selected Works"
          title={
            <>
              Recent Residential &
              <br className="hidden sm:block" /> Commercial Projects
            </>
          }
          intro="Explore our recent projects across Pathanamthitta, Trivandrum, Varkala, and Alappuzha — featuring bedrooms, living rooms, custom furniture, and exterior elevations."
          action={
            <Button href="/projects" variant="dark">
              View Full Gallery
            </Button>
          }
        />

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <Link key={p.slug} href={`/projects`} className="group block reveal">
              <div className="relative overflow-hidden rounded-[20px]">
                <Img
                  name={p.image}
                  alt={p.title}
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.isTransformation ? (
                  <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-md">
                    Full Room Execution
                  </span>
                ) : null}
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <span className="block text-xs font-medium text-accent">{p.category}</span>
                  <h3 className="mt-1 text-base font-semibold text-ink group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <span className="block mt-1 text-xs text-text-dim">{p.location}</span>
                </div>
                <ArrowCircle
                  size="h-8 w-8"
                  className="bg-accent/10 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white group-hover:rotate-45"
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* REDESIGNED TESTIMONIALS & STUDIO LOCATION SECTION */}
      <Section pad="pb-16 sm:pb-24 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 items-start reveal">
          {/* Studio Location & Metrics */}
          <div className="space-y-6">
            <div>
              <Chip>Testimonials & Studio</Chip>
              <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl">
                Trusted by Homeowners Across Kerala
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
                Our studio in Vallicode, Pathanamthitta is open for walk-ins and consultation appointments. We oversee every trade to ensure your space feels right and lasts for years.
              </p>
            </div>

            {/* Core Metrics Badge Grid */}
            <div className="grid grid-cols-3 gap-3 rounded-[24px] border border-line bg-cream p-5 text-center">
              <div>
                <span className="block text-xl font-bold text-ink">250+</span>
                <span className="text-[11px] font-medium text-text-dim">Projects Done</span>
              </div>
              <div className="border-x border-line px-2">
                <span className="block text-xl font-bold text-accent">4.9 ★</span>
                <span className="text-[11px] font-medium text-text-dim">Client Rating</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-ink">6+ Yrs</span>
                <span className="text-[11px] font-medium text-text-dim">Experience</span>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className="rounded-[24px] border border-line bg-white p-6 shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Studio Location</span>
              </div>
              <p className="mt-3 text-sm font-medium text-ink leading-relaxed">
                {site.address.full}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-4">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  Open in Google Maps →
                </a>
                <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                  Open Today
                </span>
              </div>
            </div>
          </div>

          {/* 2x2 Grid of Redesigned Testimonial Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-[24px] border border-line/80 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-xl hover:border-accent/40 ${
                  i % 2 === 0 ? "reveal" : "reveal reveal-delay-1"
                }`}
              >
                <div>
                  {/* Rating Stars & Project Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex text-amber-400 text-xs">
                      {"★".repeat(t.stars)}
                    </div>
                    <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-semibold text-stone-600 border border-stone-200">
                      {t.project}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-4 text-xs sm:text-[0.88rem] leading-relaxed text-text-body">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line/60 pt-4">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-ink">{t.name}</span>
                    <span className="block text-[11px] text-text-dim">{t.place}, Kerala</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}