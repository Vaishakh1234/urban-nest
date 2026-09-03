import { SITE_URL } from "../site";

/**
 * Renders a JSON-LD block. Every object passed here is developer-authored and
 * static — no user input is ever interpolated, so the innerHTML write is safe.
 *
 * `<` is escaped because a literal `</script>` inside a JSON string would close
 * the tag early; the sequence is invisible to JSON parsers.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Stable @id values so separate graph nodes can reference each other. */
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * BreadcrumbList — drives the breadcrumb trail Google shows in place of the raw
 * URL in results. `items` excludes Home; it is prepended here.
 */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** A completed project, modelled as a creative work with the studio as author. */
export function projectLd({
  name,
  description,
  path,
  image,
  locality,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  locality: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}${path}#project`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${image}`,
    genre: "Interior Design",
    creator: { "@id": BUSINESS_ID },
    locationCreated: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: locality,
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
  };
}

/**
 * FAQPage — the highest-leverage schema for a local service site. Answers are
 * plain text; Google strips markup from them anyway.
 */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
