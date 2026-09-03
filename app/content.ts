import type { ImgName } from "./components/Img";

/**
 * Shared content for services, projects, and process steps.
 * Structured around Urbannest Interiors' 6 major service categories
 * and 5-step design-to-execution model.
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
    slug: "residential-interiors",
    title: "Residential Interiors",
    short: "Complete home interiors, apartment interiors, and villa interiors.",
    copy: "From initial layout planning to full space transformation, we craft cohesive residential environments tailored to your lifestyle — bringing architecture, custom cabinetry, lighting, and décor together as one.",
    includes: ["Complete Home Interiors", "Apartment Interiors", "Villa Interiors"],
    image: "living-open-plan",
    imageAlt:
      "Open-plan residential interior with white marble floor, teak louver wall and illuminated prayer alcove",
  },
  {
    slug: "living-spaces",
    title: "Living Spaces",
    short: "Living room, TV unit, entertainment wall, and false ceiling.",
    copy: "Designed for relaxation and social gathering, featuring custom TV console units, fluted wood louver accents, marble backdrop paneling, and layered ambient lighting.",
    includes: ["Living Room Layouts", "TV Console Units", "Entertainment Walls"],
    image: "living-tv-unit",
    imageAlt:
      "Modern living room TV console unit with vertical teak louver slats and floating grey drawers",
  },
  {
    slug: "bedrooms",
    title: "Bedrooms",
    short: "Master bedroom, kids bedroom, guest bedroom, and wardrobes.",
    copy: "Private sanctuaries combining custom tufted cognac leather headboards, integrated vanity desks, full-height storage wardrobes, and soft perimeter backlighting.",
    includes: ["Master Bedrooms", "Kids Bedrooms", "Guest Suites"],
    image: "bedroom-caramel",
    imageAlt:
      "Master bedroom with cognac caramel tufted headboard, light wood bed frame and teak louver wall",
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture",
    short: "Wardrobes, beds, TV units, study tables, and storage.",
    copy: "Precision in-house modular carpentry built to the millimeter in moisture-resistant ply with premium acrylic or laminate finishes and heavy-duty soft-close hardware.",
    includes: ["Full-Height Wardrobes", "Custom Bed Units", "Study & Work Desks"],
    image: "bedroom-wardrobe-vanity",
    imageAlt:
      "Full-height grey laminate wardrobe with warm backlit teak display shelf and floating vanity desk",
  },
  {
    slug: "lighting-ceiling",
    title: "Lighting & Ceiling",
    short: "False ceilings, cove lighting, ambient lighting, and decorative lighting.",
    copy: "Gypsum and POP false ceilings designed in harmony with light plans, utilizing recessed linear LED profiles and warm perimeter cove lighting to shape room mood after sunset.",
    includes: ["Gypsum Ceilings", "Cove Backlighting", "Linear LED Profiles"],
    image: "false-ceiling-lighting",
    imageAlt:
      "Gypsum false ceiling design with dual linear LED profile lights and perimeter cove backlighting",
  },
  {
    slug: "exterior-design",
    title: "Exterior Design",
    short: "Residential façade, elevation design, and exterior renovation.",
    copy: "Striking contemporary exterior elevations combining white render, warm terracotta brick wall accents, glass balcony railings, and integrated garden landscaping.",
    includes: ["Facade Elevation", "Terracotta & Louvers", "Exterior Lighting"],
    image: "exterior-modern-villa",
    imageAlt:
      "Modern 2-story luxury contemporary villa facade in Kerala with white rendered walls and garden",
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: "Residential" | "Living" | "Bedrooms" | "Custom Furniture" | "Exterior" | "Commercial";
  scope: string;
  image: ImgName;
  imageAlt?: string;
  isTransformation?: boolean;
};

export const projects: Project[] = [
  {
    slug: "trivandrum-residence",
    title: "The Trivandrum Residence",
    location: "Trivandrum",
    category: "Residential",
    scope: "Complete home execution: master suite, living room, false ceiling, lighting & custom furniture",
    image: "bedroom-master-suite",
    imageAlt: "Complete master bedroom suite design in Trivandrum with full-height wardrobe and vanity",
    isTransformation: true,
  },
  {
    slug: "modern-master-bedroom",
    title: "Modern Master Bedroom Suite",
    location: "Pathanamthitta",
    category: "Bedrooms",
    scope: "Cognac tufted leather headboard, teak louver wall, full-height wardrobe & vanity",
    image: "bedroom-caramel",
    isTransformation: true,
  },
  {
    slug: "varkala-kids-bedroom",
    title: "Varkala Bedroom & Study Suite",
    location: "Varkala",
    category: "Bedrooms",
    scope: "Light oak bed, vertical LED panel, custom study desk & wardrobe",
    image: "bedroom-warm-light",
  },
  {
    slug: "open-plan-living-room",
    title: "Open-Plan Living & TV Wall",
    location: "Pathanamthitta",
    category: "Living",
    scope: "Fluted teak TV console, marble backdrop, L-shaped lounge, backlit prayer alcove",
    image: "living-open-plan",
    isTransformation: true,
  },
  {
    slug: "contemporary-residential-exterior",
    title: "Contemporary Kerala Villa Facade",
    location: "Pathanamthitta",
    category: "Exterior",
    scope: "2-story villa elevation, terracotta brick wall, glass balcony, exterior lighting",
    image: "exterior-modern-villa",
    isTransformation: true,
  },
  {
    slug: "crunchys-commercial-restaurant",
    title: "Crunchys Commercial Restaurant",
    location: "Alappuzha",
    category: "Commercial",
    scope: "Commercial dining space, linear LED lighting, custom booths & acoustic ceiling",
    image: "kitchen-dining-combo",
  },
  {
    slug: "fluted-tv-unit-residence",
    title: "Fluted Teak TV Console Unit",
    location: "Varkala",
    category: "Living",
    scope: "Teak louver slats, floating grey drawers, marble backdrop panel",
    image: "living-tv-unit",
  },
  {
    slug: "custom-pooja-alcove-sanctum",
    title: "Backlit Prayer Alcove & Sanctum",
    location: "Trivandrum",
    category: "Living",
    scope: "Arched LED niche, deity shrine, base grey drawers, marble floor",
    image: "living-pooja-alcove",
  },
  {
    slug: "sunlit-sectional-lounge",
    title: "Sunlit L-Shaped Sectional Lounge",
    location: "Alappuzha",
    category: "Living",
    scope: "Light grey sectional sofa, nested black coffee tables, zebra window blinds",
    image: "living-l-shaped-sofa",
  },
  {
    slug: "custom-wardrobe-dressing-unit",
    title: "Full-Height Wardrobe & Vanity Unit",
    location: "Alappuzha",
    category: "Custom Furniture",
    scope: "Grey acrylic shutters, illuminated niche, floating vanity table & arch mirror",
    image: "bedroom-wardrobe-vanity",
  },
  {
    slug: "profile-false-ceiling-lighting",
    title: "Gypsum False Ceiling & Profile Lighting",
    location: "Trivandrum",
    category: "Living",
    scope: "Dual linear LED profile lights, perimeter cove backlighting, white ceiling fan",
    image: "false-ceiling-lighting",
  },
  {
    slug: "teak-louver-wall-paneling",
    title: "Vertical Teak Louver Wall Paneling",
    location: "Pathanamthitta",
    category: "Custom Furniture",
    scope: "Teak louvers, vertical LED lines, floating oak shelf detail",
    image: "wall-paneling-louver",
  },
];

export const process = [
  {
    number: "01",
    title: "Space & Requirement Discovery",
    copy: "In-depth analysis of site dimensions, architectural plans, natural lighting, and your family's daily lifestyle preferences.",
  },
  {
    number: "02",
    title: "3D Photorealistic Design Concept",
    copy: "Developing high-definition 3D walkthroughs and moodboards showing exact materials, color palettes, and lighting schemes.",
  },
  {
    number: "03",
    title: "Detailed Space & Modular Planning",
    copy: "Custom layout engineering for bedrooms, living rooms, TV consoles, modular kitchens, wardrobes, and false ceilings.",
  },
  {
    number: "04",
    title: "In-House Precision Manufacturing",
    copy: "Crafting custom modular cabinetry, wall louver panels, and bed units in our specialized workshop with moisture-resistant ply.",
  },
  {
    number: "05",
    title: "Turnkey On-Site Execution",
    copy: "Seamless coordination of carpentry, electrical profile lighting, false ceiling installation, and painting under one supervisor.",
  },
  {
    number: "06",
    title: "Quality Inspection & Handover",
    copy: "Rigorous multi-point snag inspection followed by clean handover of a complete, fully coordinated home ready to live in.",
  },
];
