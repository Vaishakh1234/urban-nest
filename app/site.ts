/**
 * Single source of truth for business details and SEO constants.
 * Business facts came from the client's Instagram bio and Google Business profile.
 */
export const SITE_URL = "https://urbannestinteriors.in";

export const site = {
  name: "Urbannest Interiors",
  shortName: "Urbannest",
  tagline: "Creating Space, Inspiring Lives",
  description:
    "Interior design studio in Pathanamthitta, Kerala. From concept to creation — design, carpentry, false ceiling and complete turnkey site execution.",
  phones: ["+91 95268 51964", "+91 80751 08105"],
  email: "urbannestinteriors5@gmail.com",
  address: {
    street: "Vallicode",
    city: "Pathanamthitta",
    region: "Kerala",
    postalCode: "689648",
    country: "IN",
    full: "Urbannest Interiors, Vallicode, Pathanamthitta, Kerala 689648",
  },
  geo: { lat: 9.2272, lng: 76.7972 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Urbannest+Interiors%2C+Vallicode%2C+Pathanamthitta%2C+Kerala+689648",
  instagram: "https://www.instagram.com/urbannest44/",
  youtube: "https://youtube.com/@urbannestinteriors-q3k",
  hours: "Open 24 hours",
  serviceAreas: ["Pathanamthitta", "Trivandrum", "Varkala", "Alappuzha"],
  founded: "2019",
} as const;

/** Digits only — for tel: and wa.me links. */
export const primaryPhoneHref = "tel:+919526851964";

export const defaultWhatsappMessage = "Hello Urbannest Interiors! I visited your website and would like to enquire about an interior design project for my home.";

export function getWhatsappHref(topic?: string) {
  const text = topic
    ? `Hello Urbannest Interiors! I visited your website regarding: ${topic}. Please connect with me.`
    : defaultWhatsappMessage;
  return `https://wa.me/919526851964?text=${encodeURIComponent(text)}`;
}

export const whatsappHref = getWhatsappHref();

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;
