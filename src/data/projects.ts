import type { ProjectCategory, ProjectDetail, ProjectListItem } from "@/types/portfolio";

export const projectsPageContent = {
  hero: {
    titleBefore: "Our",
    titleAccent: "Projects",
    description:
      "A showcase of quality, precision, and excellence in every build.",
    image: {
      src: "/images/projects/hero.jpg",
      alt: "Modern residential project exterior at dusk",
    },
  },
  filterTitle: "Build With Purpose",
  filters: [
    "All Projects",
    "Commercial",
    "Residential",
    "Hospitality",
    "Development",
  ] as ProjectCategory[],
};

const sharedBrief = [
  "State-of-the-art technology campus",
  "Designed for collaboration & innovation",
  "Meticulous planning from concept to completion",
  "Premium materials for lasting quality",
  "Expert execution at every stage",
  "Built to deliver exceptional results",
];

const sharedGallery = [
  {
    src: "/images/projects/gallery/1.jpg",
    alt: "Open collaborative workspace",
    span: "hero" as const,
  },
  {
    src: "/images/projects/gallery/2.jpg",
    alt: "Architectural exterior detail",
    span: "wide" as const,
  },
  {
    src: "/images/projects/gallery/3.jpg",
    alt: "Bright office interior with plants",
    span: "wide" as const,
  },
  {
    src: "/images/projects/gallery/4.jpg",
    alt: "Conference room with city view",
    span: "square" as const,
  },
  {
    src: "/images/projects/gallery/5.jpg",
    alt: "Modern meeting room",
    span: "square" as const,
  },
  {
    src: "/images/projects/gallery/6.jpg",
    alt: "Building glass facade exterior",
    span: "square" as const,
  },
];

const sharedBeforeAfter = {
  before: {
    src: "/images/projects/before.jpg",
    alt: "Interior space before renovation",
  },
  after: {
    src: "/images/projects/after.jpg",
    alt: "Finished modern interior after renovation",
  },
};

export const projects: ProjectDetail[] = [
  {
    slug: "the-apex-tower",
    title: "The Apex Tower",
    titleBefore: "The Apex",
    titleAccent: "Tower",
    district: "Downtown Metro",
    location: "Los Angeles",
    year: "2026",
    category: "Commercial",
    image: {
      src: "/images/projects/apex.jpg",
      alt: "The Apex Tower exterior at dusk",
    },
    heroImage: {
      src: "/images/projects/apex.jpg",
      alt: "The Apex Tower modern facade",
    },
    stats: [
      { label: "Project Type", value: "Commercial" },
      { label: "Duration", value: "18 Months" },
      { label: "Area", value: "42,000 sq ft" },
      { label: "Client", value: "Metro Develop" },
    ],
    brief: sharedBrief,
    beforeAfter: sharedBeforeAfter,
    gallery: sharedGallery,
  },
  {
    slug: "lumina-residence",
    title: "Lumina Residence",
    titleBefore: "Lumina",
    titleAccent: "Residence",
    district: "Westside District",
    location: "San Diego, CA",
    year: "2026",
    category: "Residential",
    image: {
      src: "/images/projects/lumina.jpg",
      alt: "Lumina Residence modern home",
    },
    heroImage: {
      src: "/images/projects/lumina.jpg",
      alt: "Lumina Residence exterior",
    },
    stats: [
      { label: "Project Type", value: "Residential" },
      { label: "Duration", value: "14 Months" },
      { label: "Area", value: "6,200 sq ft" },
      { label: "Client", value: "Private Client" },
    ],
    brief: [
      "A light-filled residence designed for comfort and indoor-outdoor living",
      "Premium materials selected for coastal climate durability",
      "Meticulous planning from concept to completion",
      "Refined architectural detailing throughout",
      "Expert execution at every stage",
      "Built to deliver exceptional living experiences",
    ],
    beforeAfter: sharedBeforeAfter,
    gallery: sharedGallery,
  },
  {
    slug: "grand-horizon-hotel",
    title: "Grand Horizon Hotel",
    titleBefore: "Grand Horizon",
    titleAccent: "Hotel",
    district: "Coastal Bay",
    location: "Los Angeles",
    year: "2026",
    category: "Hospitality",
    image: {
      src: "/images/projects/grand-horizon.jpg",
      alt: "Grand Horizon Hotel construction site",
    },
    heroImage: {
      src: "/images/projects/grand-horizon.jpg",
      alt: "Grand Horizon Hotel aerial view",
    },
    stats: [
      { label: "Project Type", value: "Hospitality" },
      { label: "Duration", value: "24 Months" },
      { label: "Area", value: "85,000 sq ft" },
      { label: "Client", value: "Horizon Group" },
    ],
    brief: [
      "A landmark hospitality destination designed for guest experience",
      "Coordinated public spaces, rooms, and operational back-of-house",
      "Meticulous planning from concept to completion",
      "Premium materials for lasting quality",
      "Expert execution at every stage",
      "Built to deliver exceptional results",
    ],
    beforeAfter: sharedBeforeAfter,
    gallery: sharedGallery,
  },
  {
    slug: "techhub-innovation-center",
    title: "TechHub Innovation Center",
    titleBefore: "TechHub",
    titleAccent: "Innovation Center",
    district: "Silicon Valley",
    location: "Glendale, CA",
    year: "2026",
    category: "Commercial",
    image: {
      src: "/images/projects/techhub.jpg",
      alt: "TechHub Innovation Center exterior",
    },
    heroImage: {
      src: "/images/projects/detail/hero.jpg",
      alt: "TechHub Innovation Center modern facade",
    },
    stats: [
      { label: "Project Type", value: "Commercial" },
      { label: "Duration", value: "12 Months" },
      { label: "Area", value: "25,000 sq ft" },
      { label: "Client", value: "Private Client" },
    ],
    brief: sharedBrief,
    beforeAfter: sharedBeforeAfter,
    gallery: sharedGallery,
  },
  {
    slug: "parkview-luxury-villa",
    title: "Parkview Luxury Villa",
    titleBefore: "Parkview",
    titleAccent: "Luxury Villa",
    district: "Green Hills",
    location: "Orange County, CA",
    year: "2025",
    category: "Residential",
    image: {
      src: "/images/projects/parkview.jpg",
      alt: "Parkview Luxury Villa exterior",
    },
    heroImage: {
      src: "/images/projects/parkview.jpg",
      alt: "Parkview Luxury Villa",
    },
    stats: [
      { label: "Project Type", value: "Residential" },
      { label: "Duration", value: "16 Months" },
      { label: "Area", value: "7,800 sq ft" },
      { label: "Client", value: "Private Owner" },
    ],
    brief: [
      "A luxury villa designed for elevated living and privacy",
      "Landscape and architecture integrated as one composition",
      "Meticulous planning from concept to completion",
      "Premium materials for lasting quality",
      "Expert execution at every stage",
      "Built to deliver exceptional results",
    ],
    beforeAfter: sharedBeforeAfter,
    gallery: sharedGallery,
  },
  {
    slug: "metro-commercial-plaza",
    title: "Metro Commercial Plaza",
    titleBefore: "Metro Commercial",
    titleAccent: "Plaza",
    district: "Business District",
    location: "San Diego, CA",
    year: "2024",
    category: "Commercial",
    image: {
      src: "/images/projects/metro.jpg",
      alt: "Metro Commercial Plaza exterior",
    },
    heroImage: {
      src: "/images/projects/metro.jpg",
      alt: "Metro Commercial Plaza",
    },
    stats: [
      { label: "Project Type", value: "Commercial" },
      { label: "Duration", value: "20 Months" },
      { label: "Area", value: "58,000 sq ft" },
      { label: "Client", value: "Metro Partners" },
    ],
    brief: [
      "A commercial plaza built for modern business operations",
      "Flexible floor plates and premium shared amenities",
      "Meticulous planning from concept to completion",
      "Premium materials for lasting quality",
      "Expert execution at every stage",
      "Built to deliver exceptional results",
    ],
    beforeAfter: sharedBeforeAfter,
    gallery: sharedGallery,
  },
];

export const projectList: ProjectListItem[] = projects.map(
  ({ slug, title, district, location, year, category, image }) => ({
    slug,
    title,
    district,
    location,
    year,
    category,
    image,
  }),
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}

/** Keep homepage featured project in sync */
export const featuredProjectsContent = {
  eyebrow: "Portfolio",
  title: "Featured Projects",
  seeAll: { label: "See All Projects", href: "/projects" },
  description:
    "Our projects reflect our commitment to quality, precision, and excellence. Each build is crafted with attention to detail and long-term value. Explore our work and see the standards we deliver.",
  highlights: [
    "High-quality construction with attention to detail",
    "Modern designs built for long-term value",
    "Proven results across diverse projects",
  ],
  project: {
    category: "Commercial",
    title: "Grand Horizon Hotel",
    location: "Coastal Bay",
    href: "/projects/grand-horizon-hotel",
    image: {
      src: "/images/home/featured-project.png",
      alt: "Aerial view of Grand Horizon Hotel construction site with workers",
    },
  },
};
