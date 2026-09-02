import type { ImgName } from "./components/Img";

/**
 * Shared content for services, projects and process steps.
 *
 * Only six photographs exist, so each is reused across sections with a caption
 * that honestly describes what the render actually shows.
 */

export type Service = {
  slug: string;
  title: string;
  short: string;
  copy: string;
  includes: string[];
  image: ImgName;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    short: "Layouts, material boards and photoreal 3D walkthroughs.",
    copy: "We plan the room before a single board is cut — circulation, storage, light and material palette resolved on paper, then shown back to you as a photoreal 3D walkthrough. Complimentary when you execute the project with us.",
    includes: ["3D walkthroughs", "Material boards", "Layout options"],
    image: "living-open-plan",
    imageAlt:
      "Open-plan living and dining interior with marble TV panel and warm cove lighting",
  },
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    short: "Ergonomic layouts in moisture-resistant ply and acrylic.",
    copy: "Ergonomic work triangles, moisture-resistant carcasses and acrylic or laminate shutters with soft-close hardware — planned around how your kitchen is actually used, not how it photographs.",
    includes: ["Layout planning", "Acrylic & laminate", "Soft-close hardware"],
    image: "dining-kitchen",
    imageAlt:
      "Dining area opening to a modular kitchen with breakfast counter and pendant lights",
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling & Lighting",
    short: "Gypsum profiles with cove and profile lighting.",
    copy: "Gypsum and POP ceilings designed together with the lighting rather than after it, so cove and profile lights shape the mood of a room long after the sun goes down.",
    includes: ["Gypsum & POP", "Cove lighting", "Ceiling design"],
    image: "living-tv-unit",
    imageAlt:
      "Living room ceiling with recessed cove lighting above a marble TV backdrop",
  },
  {
    slug: "wardrobes-carpentry",
    title: "Wardrobes & Carpentry",
    short: "Full-height storage built to the millimetre.",
    copy: "Wardrobes, lofts, TV units, crockery units and study tables built in moisture-resistant ply with hardware rated for daily use — full-height carpentry that turns awkward corners into real storage.",
    includes: ["Wardrobes & lofts", "TV & crockery units", "Study and dressing"],
    image: "bedroom-classic",
    imageAlt:
      "Bedroom with floor-to-ceiling wardrobe, open display shelving and dressing counter",
  },
  {
    slug: "wall-paneling",
    title: "Wall Paneling & Décor",
    short: "Louver, veneer and laminate paneling.",
    copy: "Wall paneling in louvers, veneer and laminate that adds warmth and depth without eating floor area — plus the styling layer of art, planting and textiles that makes a room feel finished.",
    includes: ["Louver paneling", "Veneer & laminate", "Styling & décor"],
    image: "bedroom-warm",
    imageAlt:
      "Bedroom with fluted headboard paneling, warm backlighting and framed botanical art",
  },
  {
    slug: "turnkey-execution",
    title: "Turnkey Execution",
    short: "One team from first drawing to final handover.",
    copy: "Full site execution with our own supervisors: sequencing, trade coordination, production drawings, in-house manufacturing and finishing, all closed out against a snag list before we call it done.",
    includes: ["Site supervision", "In-house production", "Snag list closeout"],
    image: "living-green-accent",
    imageAlt:
      "Completed living room with sectional sofa, green accent chair and built-in shelving",
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  scope: string;
  image: ImgName;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "modern-living-space",
    title: "Modern Living Space",
    location: "Pathanamthitta",
    category: "Living",
    scope: "TV unit, marble panel, cove lighting",
    image: "living-open-plan",
    imageAlt:
      "Open-plan living room with marble TV panel, wood slat wall and sectional sofa",
  },
  {
    slug: "calm-bedroom-interior",
    title: "Calm Bedroom Interior",
    location: "Varkala",
    category: "Bedroom",
    scope: "Wardrobe, headboard paneling, dressing unit",
    image: "bedroom-warm",
    imageAlt:
      "Warmly lit bedroom with upholstered headboard, wardrobe and study counter",
  },
  {
    slug: "contemporary-kitchen",
    title: "Contemporary Kitchen",
    location: "Alappuzha",
    category: "Kitchen",
    scope: "Modular kitchen with breakfast counter",
    image: "dining-kitchen",
    imageAlt:
      "Contemporary kitchen with breakfast counter, bar stools and pendant lighting",
  },
  {
    slug: "dining-gathering-area",
    title: "Dining & Gathering Area",
    location: "Trivandrum",
    category: "Living",
    scope: "Dining, display units, feature lighting",
    image: "living-green-accent",
    imageAlt:
      "Living and gathering area with sectional sofa, accent chair and display shelving",
  },
  {
    slug: "classic-master-suite",
    title: "Classic Master Suite",
    location: "Pathanamthitta",
    category: "Bedroom",
    scope: "Full-height wardrobe, mirror, side units",
    image: "bedroom-classic",
    imageAlt:
      "Master bedroom with full-height wardrobe, round mirror and dressing counter",
  },
  {
    slug: "family-living-room",
    title: "Family Living Room",
    location: "Varkala",
    category: "Living",
    scope: "TV unit, storage, layered lighting",
    image: "living-tv-unit",
    imageAlt:
      "Family living room with fluted panel, marble TV backdrop and coffee table",
  },
];

export const process = [
  {
    title: "Initial Consultation",
    copy: "We listen, understand your needs and refine the project direction clearly from the start.",
  },
  {
    title: "Concept Development",
    copy: "We shape layouts and design ideas that suit your space, budget and the way you live.",
  },
  {
    title: "Design Execution",
    copy: "We coordinate details carefully to bring the approved design together as executed.",
  },
  {
    title: "Final Reveal",
    copy: "We complete the space with fine touches and finishing details that make it feel complete.",
  },
];
