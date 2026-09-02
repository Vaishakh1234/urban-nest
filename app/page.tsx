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
import { services, projects } from "./content";
import { SITE_URL, site } from "./site";

export const metadata: Metadata = {
  title: "Interior Designers in Pathanamthitta, Kerala",
  description:
    "Urbannest Interiors designs and builds complete home interiors across Pathanamthitta, Trivandrum, Varkala and Alappuzha. Modular kitchens, wardrobes, false ceiling and turnkey execution.",
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Complete home interiors across Kerala — design, carpentry, false ceiling and turnkey execution by one accountable team.",
  },
};

const testimonials = [
  {
    quote:
      "They handled everything — design, carpentry, ceiling and electrical coordination. We only had to make decisions, not chase people.",
    name: "Anoop R.",
    place: "Homeowner, Pathanamthitta",
  },
  {
    quote:
      "The 3D walkthrough matched the finished kitchen almost exactly. That's the part that gave us the confidence to go ahead.",
    name: "Sreeja M.",
    place: "Homeowner, Varkala",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero: inset rounded image with overlaid copy ---------- */}
      <section className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[20px]">
          <Img
            name="living-open-plan"
            alt="Open-plan living room with marble TV panel, wood slat wall and warm cove lighting"
            sizes="100vw"
            priority
            className="h-[min(74vh,700px)] min-h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
          {/* Left-corner bias so the heading sits on the deepest part of the scrim. */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0">
            <Container className="pb-12 sm:pb-16">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-pill backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Welcome to Urbannest
                  </span>
                  <h1 className="h-display mt-5 text-4xl text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem]">
                    Beautiful Homes,
                    <br />
                    Thoughtfully Decorated
                  </h1>
                </div>

                <div className="lg:max-w-sm lg:text-center">
                  <p className="text-sm leading-relaxed text-white/80">
                    We design calm, functional and stylish living spaces that feel
                    welcoming, well-balanced and comfortable from the moment you
                    walk in — blending aesthetics with everyday practicality.
                  </p>
                  <div className="mt-6 lg:flex lg:justify-end">
                    <Button href="/projects" variant="white">
                      Explore Projects
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* ---------- About statement ---------- */}
      <Section pad="py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-16 lg:items-start">
          <div>
            <Chip>About</Chip>
          </div>
          <p className="max-w-3xl text-[1.5rem] font-medium leading-[1.32] tracking-[-0.01em] text-ink sm:text-[1.8rem] lg:text-[2.1rem]">
            At Urbannest, we focus on creating interiors that feel calm,
            comfortable, and easy to live in. Every space is planned with
            care‑balancing layout, light, materials, and décor so your home
            not only looks good but works beautifully in daily life.
          </p>
        </div>
      </Section>

      {/* ---------- Services grid ---------- */}
      <Section pad="pb-16 sm:pb-24">
        <SectionHead
          chip="Services"
          title={
            <>
              Interior solutions
              <br className="hidden sm:block" /> designed for real spaces
            </>
          }
          intro="We offer a complete range of interior design and home décor services, helping you shape spaces that feel comfortable, functional and visually balanced — from the first idea to the final details."
          action={
            <Button href="/services" variant="dark">
              Explore Services
            </Button>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* ---------- Projects ---------- */}
      <Section pad="pb-16 sm:pb-24">
        <SectionHead
          chip="Projects"
          title={
            <>
              Spaces shaped with
              <br className="hidden sm:block" /> care and intention
            </>
          }
          intro="A selection of our recent projects — each designed with attention to layout, comfort and detail, from calm living areas to fully styled homes. Every project reflects a thoughtful balance of function and style."
          action={
            <Button href="/projects" variant="dark">
              See All Projects
            </Button>
          }
        />

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link key={p.slug} href="/projects" className="group block">
              <div className="overflow-hidden rounded-[20px]">
                <Img
                  name={p.image}
                  alt={p.imageAlt}
                  sizes="(max-width: 640px) 100vw, 580px"
                  className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[340px]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-base font-medium text-ink">{p.title}</span>
                <ArrowCircle
                  size="h-9 w-9"
                  className="bg-accent text-white transition-transform duration-200 group-hover:rotate-45"
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---------- Testimonials ---------- */}
      <Section pad="pb-16 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Chip>Testimonials</Chip>
            <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl">
              Thoughtful design,
              <br className="hidden sm:block" /> real experiences
            </h2>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-text-body">
              We work closely with homeowners to create interiors that feel
              comfortable, practical and personal. Here&apos;s what they say about
              working with Urbannest.
            </p>
          </div>

          <div className="space-y-5">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-[20px] border border-line bg-white p-7 shadow-card"
              >
                <blockquote className="text-[0.95rem] leading-relaxed text-text-body">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">
                      {t.name}
                    </span>
                    <span className="block text-xs text-text-dim">{t.place}</span>
                  </span>
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
