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
    street: "Mavila",
    city: "Pathanamthitta",
    region: "Kerala",
    postalCode: "689645",
    country: "IN",
    full: "Mavila, Pathanamthitta, Kerala 689645, India",
  },
  geo: { lat: 9.2648, lng: 76.787 },
  mapsUrl:
    "https://maps.google.com/?q=7Q7P%2BWR3+Mavila+Pathanamthitta+Kerala+689645",
  instagram: "https://www.instagram.com/urbannest44/",
  youtube: "https://youtube.com/@urbannestinteriors-q3k",
  hours: "Open 24 hours",
  serviceAreas: ["Pathanamthitta", "Trivandrum", "Varkala", "Alappuzha"],
  founded: "2019",
} as const;

/** Digits only — for tel: and wa.me links. */
export const primaryPhoneHref = "tel:+919526851964";
export const whatsappHref = "https://wa.me/919526851964";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;
