import type { ServiceItem } from "@/types/content";
import type { PageHeroContent } from "@/types/content";

export const servicesPageContent = {
  hero: {
    titleBefore: "Our",
    titleAccent: "Services",
    description:
      "Delivering high-quality construction and development solutions tailored to your specific needs and vision.",
    image: {
      src: "/images/services/hero.jpg",
      alt: "Construction worker in safety gear using tools on site",
    },
  } satisfies PageHeroContent,

  items: [
    {
      title: "Commercial Construction",
      description:
        "State-of-the-art office buildings, retail centers, and industrial facilities built for modern business needs.",
      href: "/services/commercial",
      icon: "building",
      image: {
        src: "/images/services/commercial.jpg",
        alt: "Commercial building under construction with crane",
      },
    },
    {
      title: "Residential Construction",
      description:
        "Luxury condominiums, multi-family housing, and premium custom homes designed for exceptional living.",
      href: "/services/residential",
      icon: "home",
      image: {
        src: "/images/services/residential.jpg",
        alt: "Modern luxury residential home at dusk",
      },
    },
    {
      title: "Hospitality Construction",
      description:
        "World-class hotels, resorts, and entertainment venues that deliver unforgettable guest experiences.",
      href: "/services/hospitality",
      icon: "hotel",
      image: {
        src: "/images/services/hospitality.jpg",
        alt: "Modern hotel complex with swimming pool",
      },
    },
    {
      title: "Development Services",
      description:
        "Comprehensive land development, zoning navigation, and master planning for large-scale projects.",
      href: "/services/development",
      icon: "development",
      image: {
        src: "/images/services/development.jpg",
        alt: "Construction professional reviewing blueprints on site",
      },
    },
    {
      title: "Specialty Services",
      description:
        "Historic renovations, sustainable building retrofits, and specialized facility construction.",
      href: "/services/specialty",
      icon: "specialty",
      image: {
        src: "/images/services/specialty.jpg",
        alt: "Architect reviewing plans on multiple monitors",
      },
    },
    {
      title: "Consulting & Support",
      description:
        "Expert project management, feasibility studies, and strategic consulting to ensure project success.",
      href: "/services/consulting",
      icon: "consulting",
      image: {
        src: "/images/services/consulting.jpg",
        alt: "Project consulting meeting with hard hats on the table",
      },
    },
  ] satisfies ServiceItem[],
};

/** Home page keeps a focused 3-service preview */
export const servicesContent = {
  eyebrow: "Our Expertise",
  title: "Our Services",
  description:
    "Comprehensive construction and development solutions tailored to meet the unique demands of every sector we serve.",
  items: servicesPageContent.items.slice(0, 3),
};
