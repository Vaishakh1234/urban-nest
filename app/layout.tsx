import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

/** LocalBusiness structured data — drives the rich result for local search. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "@id": `${SITE_URL}/#business`,
  name: site.name,
  description: site.description,
  url: SITE_URL,
  telephone: site.phones[0],
  email: site.email,
  image: `${SITE_URL}/img/living-open-plan-1600.webp`,
  priceRange: "₹₹",
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
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  sameAs: [site.instagram, site.youtube],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-page">
        <script
          type="application/ld+json"
          // Static, developer-authored object — no user input is interpolated.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
