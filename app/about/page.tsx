import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { Img } from "../components/Img";
import { PageHero } from "../components/PageHero";
import { ProcessSteps } from "../components/ProcessSteps";
import { Button, Chip, Section, SectionHead } from "../components/ui";
import { site } from "../site";

export const metadata: Metadata = {
  title: "About Us — Interior Design & Build Studio in Kerala",
  description:
    "Urbannest Interiors is a design and build studio in Pathanamthitta, Kerala. One accountable team handling design, production drawings, manufacturing and site execution.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Urbannest Interiors — Design & Build Studio in Kerala",
    description:
      "One accountable team handling design, production and site execution across Pathanamthitta, Trivandrum, Varkala and Alappuzha.",
  },
};

const principles = [
  "Lifestyle-Focused Design",
  "Balanced Aesthetics",
  "Attention to Detail",
  "Clear Process",
];

const approach = [
  {
    title: "Reading the Space",
    copy: "We begin by understanding how the space is used and what it needs to support.",
  },
  {
    title: "Planning the Layout",
    copy: "Layouts and flow are worked out before finishes, because that is what makes a room work.",
  },
  {
    title: "Refining the Details",
    copy: "Materials, lighting and finishes are chosen to support balance and usability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        crumb="About"
        image="bedroom-classic"
        imageAlt="Master bedroom interior with full-height wardrobe and dressing counter"
      />

      {/* Statement */}
      <Section pad="pt-16 pb-8 sm:pt-24 sm:pb-10">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div>
            <Chip>About</Chip>
          </div>
          <p className="h-display max-w-3xl text-2xl leading-snug text-ink sm:text-[1.75rem]">
            Urbannest Interiors is a design and build studio working out of
            Pathanamthitta, delivering complete residential and commercial
            interiors across Kerala — from the first drawing to the final handover.
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section pad="pb-16 sm:pb-24">
        <div className="grid items-center gap-10 border-t border-line pt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h-display text-3xl text-ink sm:text-4xl">
              We started because the handoff kept breaking
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-text-body">
              <p>
                Anyone who has renovated a home in Kerala knows the pattern. A
                designer draws something beautiful. A carpenter builds something
                different. An electrician arrives after the ceiling is closed. The
                budget moves, the timeline moves, and nobody owns the gap.
              </p>
              <p>
                Urbannest was built to close that gap. Design, production drawings,
                manufacturing and site execution all sit under one roof, so the
                drawing that gets approved is the thing that gets built. Our own
                production unit means we control quality and lead times instead of
                chasing them.
              </p>
              <p>
                Today we work across {site.serviceAreas.join(", ")} on everything
                from single modular kitchens to full turnkey homes and office
                fit-outs.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/projects" variant="dark">
                View Our Work
              </Button>
            </div>
          </div>

          <Img
            name="living-green-accent"
            alt="Living room with sectional sofa, accent chair and built-in display shelving"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-[340px] w-full rounded-[20px] object-cover sm:h-[420px]"
          />
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section pad="pb-16 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Chip>Why Choose Us</Chip>
            <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl">
              Design that feels natural, not forced
            </h2>
            <h3 className="mt-6 text-base font-semibold text-ink">
              Lifestyle-Focused Design
            </h3>
            <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-text-body">
              We focus on creating interiors that feel comfortable to live in,
              suit your goals and look good on the day you move in — and every
              day after.
            </p>

            <ul className="mt-7 space-y-3.5">
              {principles.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6.2 4.8 8.5 9.5 3.8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/contact">Get a Quote</Button>
            </div>
          </div>

          <Img
            name="bedroom-warm"
            alt="Bedroom with fluted headboard paneling, pendant lighting and warm tones"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-[340px] w-full rounded-[20px] object-cover sm:h-[460px]"
          />
        </div>
      </Section>

      {/* Approach — text | image | list, as in the reference */}
      <Section pad="pb-16 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-14">
          <div>
            <Chip>Our Approach</Chip>
            <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl">
              Our design approach
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
              We focus on understanding how a space is used, then shape layouts and
              design decisions that flow from that — balance and usability first.
            </p>
          </div>

          <Img
            name="dining-kitchen"
            alt="Dining area with marble table opening onto a modular kitchen"
            sizes="(max-width: 1024px) 100vw, 360px"
            className="h-[280px] w-full rounded-[20px] object-cover lg:h-[400px] lg:w-[340px]"
          />

          <ul className="space-y-7">
            {approach.map((a) => (
              <li key={a.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 8h12M9 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-base font-semibold text-ink">
                    {a.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-text-body">
                    {a.copy}
                  </span>
                </span>
              </li>
            ))}
          </ul>
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

      <CtaBand />
    </>
  );
}
