import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BUSINESS_ID, JsonLd, WEBSITE_ID } from "./components/JsonLd";
import { services } from "./content";
import { SITE_URL, site } from "./site";

// Geometric sans matching the reference's typography.
const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "interior designers Pathanamthitta",
    "interior design Kerala",
    "modular kitchen Kerala",
    "false ceiling Pathanamthitta",
    "turnkey interiors Trivandrum",
    "home interiors Varkala",
    "interior designers Alappuzha",
    "wardrobe carpentry Kerala",
  ],
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    // SVG first — Chrome picks it over the ICO and it stays crisp at any DPR.
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/img/living-open-plan-1600.webp",
        width: 1536,
        height: 1024,
        alt: "Open-plan living room interior designed by Urbannest Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/img/living-open-plan-1600.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Interior Design",
};

export const viewport: Viewport = {
  // Tints the browser chrome on mobile. Matches the manifest's theme_color so
  // the installed PWA and the browser tab agree.
  themeColor: "#656042",
  width: "device-width",
  initialScale: 1,
  // The layout is responsive down to 320px; leaving zoom uncapped is both an
  // accessibility requirement and a Lighthouse audit.
  maximumScale: 5,
};

/**
 * Site-wide structured data, emitted as a single @graph so the business,
 * website and organization nodes can cross-reference each other by @id.
 * Page-level schema (breadcrumbs, services, projects, FAQ) is added per route
 * and points back at BUSINESS_ID.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["InteriorDesigner", "LocalBusiness"],
      "@id": BUSINESS_ID,
      name: site.name,
      alternateName: site.shortName,
      slogan: site.tagline,
      description: site.description,
      url: SITE_URL,
      telephone: site.phones[0],
      email: site.email,
      image: `${SITE_URL}/img/living-open-plan-1600.webp`,
      logo: `${SITE_URL}/icon-512.png`,
      foundingDate: site.founded,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      hasMap: site.mapsUrl,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: site.serviceAreas.map((a) => ({
        "@type": "City",
        name: a,
        containedInPlace: { "@type": "State", name: "Kerala" },
      })),
      // Surfaces the full service list against the business rather than
      // leaving it implicit in page copy.
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Interior Design & Turnkey Execution",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.short,
            url: `${SITE_URL}/services#${s.slug}`,
          },
        })),
      },
      sameAs: [site.instagram, site.youtube],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: site.name,
      description: site.description,
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-page">
        <JsonLd data={jsonLd} />
        {/* Keyboard users land here first and can jump past the nav. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
