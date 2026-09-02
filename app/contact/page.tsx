import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Chip, Section, SectionHead } from "../components/ui";
import { ContactForm } from "./ContactForm";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Contact Urbannest Interiors, Pathanamthitta",
  description: `Talk to Urbannest Interiors — ${site.phones[0]}, ${site.email}. Interior design and build studio in Mavila, Pathanamthitta, Kerala. Open 24 hours.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Urbannest Interiors",
    description:
      "Book a free consultation for your home interior. Serving Pathanamthitta, Trivandrum, Varkala and Alappuzha.",
  },
};

const faqs = [
  {
    q: "Do you charge for the first consultation?",
    a: "No. The first conversation and site visit are free. 3D design work is complimentary when you execute the project with us.",
  },
  {
    q: "How long does a full home interior take?",
    a: "A 2BHK typically runs 45–60 days from design sign-off, depending on material selection and site readiness. We give you a dated schedule before starting.",
  },
  {
    q: "Do you work outside Pathanamthitta?",
    a: `Yes — we regularly execute projects in ${site.serviceAreas.join(", ")} and are open to other locations in Kerala depending on project size.`,
  },
  {
    q: "Can you work with my existing furniture or contractor?",
    a: "We can. Partial scopes are welcome, and we'll coordinate with your civil contractor. We'll be clear upfront about what we can and can't take responsibility for.",
  },
];

/** FAQPage schema — eligible for the FAQ rich result in search. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Contact Us"
        crumb="Contact"
        image="bedroom-warm"
        imageAlt="Warmly lit bedroom interior designed by Urbannest Interiors"
      />

      <Section pad="pt-16 pb-8 sm:pt-24 sm:pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Chip>Enquiry</Chip>
            <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl">
              Tell us what you&apos;re planning
            </h2>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-text-body">
              Send us a message, call, or drop into the studio. We reply to every
              enquiry — usually the same day.
            </p>
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          <aside>
            <div className="rounded-[20px] border border-line bg-cream p-7">
              <h3 className="text-sm font-semibold text-ink">Direct lines</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <span className="block text-xs text-text-dim">Phone</span>
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="mt-1 block text-ink transition-colors hover:text-accent"
                    >
                      {p}
                    </a>
                  ))}
                </li>
                <li>
                  <span className="block text-xs text-text-dim">Email</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block break-all text-ink transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs text-text-dim">Studio</span>
                  <p className="mt-1 leading-relaxed text-ink">
                    {site.address.full}
                  </p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-xs text-accent underline underline-offset-4"
                  >
                    Open in Google Maps →
                  </a>
                </li>
                <li>
                  <span className="block text-xs text-text-dim">Hours</span>
                  <p className="mt-1 text-ink">{site.hours}</p>
                </li>
                <li>
                  <span className="block text-xs text-text-dim">Follow</span>
                  <div className="mt-1 flex gap-4">
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-ink transition-colors hover:text-accent"
                    >
                      Instagram
                    </a>
                    <a
                      href={site.youtube}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-ink transition-colors hover:text-accent"
                    >
                      YouTube
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Loaded lazily so the map iframe never blocks first paint. */}
            <div className="mt-6 overflow-hidden rounded-[20px] border border-line">
              <iframe
                title="Urbannest Interiors location on Google Maps"
                src="https://maps.google.com/maps?q=Mavila%2C%20Pathanamthitta%2C%20Kerala%20689645&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHead
          chip="FAQ"
          title="Answers before you ask"
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-[16px] border border-line bg-white px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium text-ink marker:hidden">
                {f.q}
                <span className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45">
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                    <path
                      d="M9 3v12M3 9h12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
