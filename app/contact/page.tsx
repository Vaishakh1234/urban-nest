import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { Section, SectionHead } from "../components/ui";
import { BUSINESS_ID, JsonLd, breadcrumbLd, faqLd } from "../components/JsonLd";
import { SITE_URL, site, whatsappHref } from "../site";

export const metadata: Metadata = {
  title: "Contact Urbannest Interiors, Pathanamthitta | WhatsApp & Call",
  description: `Get in touch with Urbannest Interiors via WhatsApp (${site.phones[0]}) or call us. Residential interior design & build studio in Vallicode, Pathanamthitta, Kerala.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Urbannest Interiors | Direct WhatsApp & Consultation",
    description:
      "Connect directly via WhatsApp or call for floor plan reviews, 3D design, and turnkey interior estimates. Serving Pathanamthitta, Trivandrum, Varkala and Alappuzha.",
  },
};

const whatsappTopics = [
  {
    title: "Full Home Interior",
    desc: "Complete 3D visualization, custom carpentry, false ceiling, lighting & turnkey execution.",
    msg: "Hello Urbannest Interiors! I visited your website and would like to enquire about a full home interior project.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Modular Kitchen & Dining",
    desc: "Acrylic / laminate cabinetry, quartz counters, breakfast bars & soft-close fittings.",
    msg: "Hello Urbannest Interiors! I visited your website and I'm interested in modular kitchen and dining area design.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Master Bedroom & Wardrobes",
    desc: "Floor-to-ceiling wardrobes, padded headboards, vanity mirrors & ambient bedroom lighting.",
    msg: "Hello Urbannest Interiors! I visited your website and I'd like to consult on master bedroom and wardrobe design.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16M22 4v16M2 8h20M2 17h20" />
      </svg>
    ),
  },
  {
    title: "False Ceiling & Profile LEDs",
    desc: "Cove lighting design, wooden louvers, chandelier placement & gypsum ceiling execution.",
    msg: "Hello Urbannest Interiors! I visited your website and I want to consult regarding false ceiling and profile lighting.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8M12 18v4M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66" />
      </svg>
    ),
  },
  {
    title: "Floor Plan & Quick Estimate",
    desc: "Send us your CAD drawing or building plan to get an initial layout & ballpark quote.",
    msg: "Hello Urbannest Interiors! I visited your website, have my floor plan ready, and would like a preliminary estimate.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Villa Exterior & Façade",
    desc: "Exterior wall cladding, brick accents, balcony glass railings & outdoor landscaping lights.",
    msg: "Hello Urbannest Interiors! I visited your website and I'd like to discuss exterior elevation & façade redesign.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const consultationSteps = [
  {
    step: "01",
    title: "Instant WhatsApp Chat",
    copy: "Select your project requirement below or tap our direct link to chat with our senior designer right away.",
  },
  {
    step: "02",
    title: "Floor Plan & Space Review",
    copy: "Share your floor plan, site dimensions, or room photos. We will analyze room circulation & lighting requirements.",
  },
  {
    step: "03",
    title: "Free 3D Walkthrough",
    copy: "We present photorealistic 3D drawings of your exact rooms along with an itemized material quote before starting work.",
  },
  {
    step: "04",
    title: "In-House Execution",
    copy: "Our direct supervisors and in-house carpentry team execute your home with strict quality control and dated schedule.",
  },
];

const faqs = [
  {
    q: "Do you charge for the first consultation?",
    a: "No. The first conversation, floor plan review, and site visit are completely free. 3D design work is complimentary when you execute the project with us.",
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
  {
    q: "What is included in a full home interior package?",
    a: "Everything — modular kitchen, wardrobes, false ceiling with lighting, TV unit, wall paneling, shoe rack, pooja unit, study table, and soft furnishing coordination under one team.",
  },
  {
    q: "Do you provide 3D designs before starting work?",
    a: "Yes. Every project begins with detailed 3D visualizations so you see exactly what your finished space will look like before a single nail is driven. Revisions are included until satisfied.",
  },
  {
    q: "What materials do you use for carpentry and kitchens?",
    a: "We use BWP-grade marine plywood, HDHMR boards, and premium laminates and acrylic finishes. Hardware is typically Hettich or Hafele, clearly specified in your quotation.",
  },
  {
    q: "How does payment work?",
    a: "We follow a milestone-based payment schedule — typically 40% advance, 40% at carpentry installation, and 20% on completion and handover. Everything is transparent.",
  },
  {
    q: "Do you offer a warranty on your work?",
    a: "Yes. All carpentry work comes with a 5-year warranty on manufacturing defects. Hardware warranties follow the manufacturer's terms (typically 8–10 years for Hettich).",
  },
  {
    q: "Can I visit your factory or see previous projects?",
    a: "Absolutely. Our studio and manufacturing unit are in Vallicode, Pathanamthitta. We can also arrange visits to completed project sites near your location with prior client permission.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <JsonLd data={breadcrumbLd([{ name: "Contact", path: "/contact" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${SITE_URL}/contact#page`,
          name: `Contact ${site.name}`,
          url: `${SITE_URL}/contact`,
          mainEntity: { "@id": BUSINESS_ID },
        }}
      />

      <PageHero
        title="Contact Us"
        crumb="Contact"
        image="hero-dining-warm"
        imageAlt="Urbannest Interiors - Elegant dining area with wooden table, cane-back chairs and warm brass chandelier lighting"
        subtitle="Connect with our design team instantly via WhatsApp, call us directly, or visit our studio in Vallicode, Pathanamthitta."
      />

      {/* PRIMARY DIRECT WHATSAPP ACTION HERO BANNER */}
      <Section pad="pt-12 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
        <div className="relative overflow-hidden rounded-[28px] bg-stone-900 p-8 sm:p-12 lg:p-14 text-white shadow-2xl reveal">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Direct Instant Response
              </span>
              <h2 className="h-display mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.75rem]">
                Start Your Project Conversation via WhatsApp
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
                Skip long forms. Tap below to chat directly with our lead interior team. Share your floor plan, ask for estimates, or schedule a free site consultation in seconds.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(101,96,66,0.28)] transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] active:scale-95"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.488-8.414" />
                  </svg>
                  <span>Chat on WhatsApp Now</span>
                </a>
                <span className="text-xs text-stone-400">
                  Phone: {site.phones[0]}
                </span>
              </div>
            </div>

            {/* Right Card: Studio Quick Facts */}
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">Studio Location</h3>
                  <p className="text-xs text-stone-300">Vallicode, Pathanamthitta</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-xs leading-relaxed text-stone-300">
                  {site.address.full}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-400">Open Today — Walk-ins Welcome</span>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs font-semibold text-accent underline hover:text-white"
                  >
                    Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHATSAPP TOPICS GRID — SELECT RELEVANT SCOPE */}
      <Section pad="pb-16 sm:pb-24 lg:pb-28">
        <SectionHead
          chip="Quick Enquiries"
          title="Select Your Interior Requirement"
          intro="Tap any project category below to launch a pre-formatted WhatsApp message directly to our studio."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatsappTopics.map((topic) => {
            const topicUrl = `https://wa.me/919526851964?text=${encodeURIComponent(topic.msg)}`;
            return (
              <a
                key={topic.title}
                href={topicUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl reveal"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      {topic.icon}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.488-8.414" />
                      </svg>
                      WhatsApp
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-accent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-body">
                    {topic.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-accent group-hover:underline">
                  <span>Enquire via WhatsApp</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>
      </Section>

      {/* HOW CONSULTATION WORKS — 4 STEPS */}
      <Section className="bg-cream" pad="py-16 sm:py-24 lg:py-28">
        <SectionHead
          chip="How It Works"
          title="Simple, Direct Consultation Workflow"
          intro="From your first message to our 3D walkthrough presentation, here is how we work together."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {consultationSteps.map((s) => (
            <div
              key={s.step}
              className="rounded-[24px] border border-line/80 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-xl reveal"
            >
              <span className="text-2xl font-black text-accent">{s.step}</span>
              <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-text-body">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* DIRECT PHONE CALL & STUDIO VISIT CARDS */}
      <Section pad="py-16 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 reveal">
          {/* Direct Phone Lines Card */}
          <div className="flex flex-col justify-between rounded-[28px] border border-line bg-white p-8 shadow-card sm:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-bold text-accent">
                Direct Phone Lines
              </span>
              <h3 className="h-display mt-4 text-2xl font-bold text-ink sm:text-3xl">
                Prefer to talk over a call?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Call our project managers directly to discuss site visits, floor plans, or project timelines.
              </p>

              <div className="mt-6 space-y-3">
                {site.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="group flex items-center justify-between rounded-2xl border border-line bg-cream px-5 py-4 transition-all duration-200 hover:border-accent hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <div>
                        <span className="block text-xs font-semibold text-text-dim">Project Hotline</span>
                        <span className="block text-base font-bold text-ink group-hover:text-accent">{phone}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-accent">Tap to Call →</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-line/60 pt-4 text-xs text-text-dim">
              Working Hours: {site.hours} · Studio & Production Unit
            </div>
          </div>

          {/* Location & Interactive Map Card */}
          <div className="flex flex-col justify-between rounded-[28px] border border-line bg-white p-8 shadow-card sm:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-bold text-accent">
                Visit Studio & Factory
              </span>
              <h3 className="h-display mt-4 text-2xl font-bold text-ink sm:text-3xl">
                Our Vallicode Studio
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Walk into our Pathanamthitta studio to explore material samples, acrylic wardrobe finishes, and teak louver options in person.
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">
                {site.address.full}
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Urbannest Interiors location on Google Maps"
                src="https://maps.google.com/maps?q=Urbannest%20Interiors%2C%20Vallicode%2C%20Pathanamthitta%2C%20Kerala%20689648&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-48 w-full border-0 sm:h-56"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ SECTION — EXPANDED MAX-WIDTH */}
      <Section className="bg-cream" pad="pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-32">
        <SectionHead
          chip="FAQ"
          title="Answers before you ask"
          intro="Common questions about our design process, materials, timelines and pricing."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-white px-5 py-4 sm:px-7 sm:py-5 transition-all duration-200 open:shadow-md open:border-accent/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.95rem] font-semibold text-ink marker:hidden sm:text-base">
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cream text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
                <span className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    aria-hidden
                  >
                    <path
                      d="M9 3v12M3 9h12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 pl-10 text-sm leading-relaxed text-text-body">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}