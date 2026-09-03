import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaBand } from "../../components/CtaBand";
import { Img } from "../../components/Img";
import { JsonLd, breadcrumbLd, projectLd } from "../../components/JsonLd";
import { PageHero } from "../../components/PageHero";
import { Button, Chip, Section, SectionHead } from "../../components/ui";
import { projects } from "../../content";
import { SITE_URL } from "../../site";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  // Keep unknown slugs out of the index — this route also returns a 404.
  if (!project) return { title: "Project Not Found", robots: { index: false, follow: false } };

  const description = `${project.title} in ${project.location}, Kerala — ${project.scope}. Designed and executed end-to-end by Urbannest Interiors.`;
  const image = `${SITE_URL}/img/${project.image}-1600.webp`;

  return {
    title: `${project.title} — ${project.location} Interior Project`,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/projects/${project.slug}`,
      title: `${project.title} | Urbannest Interiors`,
      description,
      images: [
        {
          url: image,
          width: 1536,
          height: 1024,
          alt: project.imageAlt || project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Urbannest Interiors`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Prefer same-category projects, then backfill with others so the section is
  // always full — internal links from every project to three more spread crawl
  // depth evenly across the portfolio.
  const others = projects.filter((p) => p.slug !== project.slug);
  const relatedProjects = [
    ...others.filter((p) => p.category === project.category),
    ...others.filter((p) => p.category !== project.category),
  ].slice(0, 3);

  return (
    <>
      <JsonLd
        data={projectLd({
          name: project.title,
          description: project.scope,
          path: `/projects/${project.slug}`,
          image: `/img/${project.image}-1600.webp`,
          locality: project.location,
        })}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />

      <PageHero
        title={project.title}
        crumb={`Projects / ${project.category}`}
        image={project.image}
        imageAlt={project.imageAlt || project.title}
      />

      {/* OVERVIEW SECTION */}
      <Section pad="pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:gap-16">
          <div className="reveal">
            <Chip>{project.category} Design Case Study</Chip>
            {/* h2, not h1 — PageHero above already carries this page's single h1. */}
            <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl lg:text-[2.6rem]">
              {project.title}
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-text-body">
              This project in {project.location} demonstrates Urbannest Interiors&apos; end-to-end design and site execution capability. We transformed the room into a cohesive, high-functionality space incorporating custom modular carpentry, subtle LED cove lighting, and natural wood accents.
            </p>

            <div className="mt-8 rounded-[20px] border border-line bg-cream p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">Design & Execution Scope</h2>
              <p className="mt-3 text-base text-text-body font-medium leading-relaxed">
                {project.scope}
              </p>
            </div>
          </div>

          <aside className="reveal reveal-delay-1">
            <div className="rounded-[20px] border border-line bg-white p-7 shadow-card">
              <h2 className="text-sm font-semibold text-ink uppercase tracking-wider">Project Quick Facts</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex justify-between border-b border-line/60 pb-3">
                  <span className="text-text-dim">Location</span>
                  <span className="font-medium text-ink">{project.location}, Kerala</span>
                </li>
                <li className="flex justify-between border-b border-line/60 pb-3">
                  <span className="text-text-dim">Category</span>
                  <span className="font-medium text-accent">{project.category}</span>
                </li>
                <li className="flex justify-between border-b border-line/60 pb-3">
                  <span className="text-text-dim">Execution</span>
                  <span className="font-medium text-ink">Turnkey In-House Team</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span className="text-text-dim">Studio</span>
                  <span className="font-medium text-ink">Urbannest Pathanamthitta</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button href="/contact" variant="dark" className="w-full justify-center">
                  Request Similar Design
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* FULL FEATURED IMAGE */}
      <Section pad="pb-16 sm:pb-24 lg:pb-28">
        <div className="overflow-hidden rounded-[24px] border border-line shadow-card reveal">
          <Img
            name={project.image}
            alt={project.imageAlt || project.title}
            sizes="100vw"
            priority
            className="h-[380px] sm:h-[480px] lg:h-[600px] w-full object-cover"
          />
        </div>
      </Section>

      {/* DESIGN APPROACH & DETAILS */}
      <Section className="bg-cream" pad="py-16 sm:py-24 lg:py-28">
        <SectionHead
          chip="Design Strategy"
          title="Space Layout & Finishing Details"
          intro="How our team planned circulation, storage, lighting, and material surfaces for this project."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[20px] border border-line bg-white p-7 shadow-card reveal">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">01</span>
            <h3 className="mt-5 text-xl font-semibold text-ink">Ergonomic Planning</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-body">
              Optimized clearance, door swings, and natural daylight orientation so the space feels open and easy to navigate daily.
            </p>
          </div>

          <div className="rounded-[20px] border border-line bg-white p-7 shadow-card reveal reveal-delay-1">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">02</span>
            <h3 className="mt-5 text-xl font-semibold text-ink">Material Harmony</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-body">
              Combined warm teak louvers, acrylic shutter laminates, marble tiles, and matte metal details for a balanced minimalist mood.
            </p>
          </div>

          <div className="rounded-[20px] border border-line bg-white p-7 shadow-card reveal reveal-delay-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">03</span>
            <h3 className="mt-5 text-xl font-semibold text-ink">Concealed Illumination</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-body">
              Layered ambient ceiling cove lighting and focused LED profile strips to create warmth without visible light fixtures.
            </p>
          </div>
        </div>
      </Section>

      {/* MORE PROJECTS */}
      <Section pad="py-16 sm:py-24 lg:py-28">
        <SectionHead
          chip="Explore More"
          title="Related Interior Projects"
          intro="Discover more completed residences and room transformations executed by Urbannest Interiors."
        />

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-3">
          {relatedProjects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block reveal">
              <div className="overflow-hidden rounded-[20px]">
                <Img
                  name={p.image}
                  alt={p.title}
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-accent">{p.category}</span>
                <h3 className="mt-1 text-base font-semibold text-ink group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-text-dim">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to transform your home?"
        intro="Talk to Urbannest Interiors about your floor plan and vision today."
      />
    </>
  );
}
