import type { ProcessStep, ServiceDetailContent } from "@/types/serviceDetail";

const sharedProcess = {
  title: "Our Process",
  subtitle:
    "Why clients choose Topbuild for their commercial construction needs.",
  steps: [
    {
      number: "01",
      title: "Planning",
      description: "Strategic project roadmap",
      image: {
        src: "/images/process/planning.jpg",
        alt: "Project planning documents and blueprints",
      },
    },
    {
      number: "02",
      title: "Design",
      description: "Architectural excellence",
      image: {
        src: "/images/process/design.jpg",
        alt: "Architectural design models and drawings",
      },
    },
    {
      number: "03",
      title: "Construction",
      description: "Precision execution",
      image: {
        src: "/images/process/construction.jpg",
        alt: "Construction team working on site",
      },
    },
    {
      number: "04",
      title: "Delivery",
      description: "Seamless handover",
      image: {
        src: "/images/process/delivery.jpg",
        alt: "Completed project ready for handover",
      },
    },
  ] satisfies ProcessStep[],
};

export const serviceDetails: ServiceDetailContent[] = [
  {
    slug: "commercial",
    hero: {
      titleBefore: "Commercial",
      titleAccent: "Construction",
      description:
        "State-of-the-art office buildings, retail centers, and industrial facilities built for modern business needs.",
      image: {
        src: "/images/services/detail/hero.jpg",
        alt: "Multi-story commercial building under construction",
      },
    },
    intro: {
      eyebrow: "Business-Focused",
      title: "Built for Performance",
      paragraphs: [
        "We deliver commercial projects designed for performance, efficiency, and long-term business growth. Our team understands that commercial spaces must support operations, impress clients, and adapt to evolving business needs.",
        "From corporate headquarters to retail complexes, every project is engineered with precision to maximize functionality while maintaining a commanding architectural presence.",
      ],
      image: {
        src: "/images/services/detail/intro.jpg",
        alt: "Modern office hallway with glass partitions",
      },
      highlights: [
        { label: "End-to-end project management" },
        { label: "Expert team with proven experience" },
        { label: "High-quality standards & materials" },
        { label: "Timely and efficient delivery" },
      ],
    },
    categories: [
      {
        number: "01",
        title: "Office Buildings",
        description:
          "Modern workspaces designed for productivity and scalability.",
        bullets: ["Flexible office layouts", "Efficient space planning"],
        image: {
          src: "/images/services/detail/office.jpg",
          alt: "Modern glass office building exterior",
        },
      },
      {
        number: "02",
        title: "Retail Spaces",
        description:
          "Engaging retail environments built to enhance customer experience.",
        bullets: ["High customer flow design", "Efficient space planning"],
        image: {
          src: "/images/services/detail/retail.jpg",
          alt: "Luxury retail store interior",
        },
      },
      {
        number: "03",
        title: "Mixed-Use Developments",
        description:
          "Integrated spaces combining residential, commercial, and lifestyle needs.",
        bullets: ["Multi-purpose planning", "Smart space utilization"],
        image: {
          src: "/images/services/detail/mixed-use.jpg",
          alt: "Mixed-use building exterior at dusk",
        },
      },
      {
        number: "04",
        title: "Restaurants",
        description:
          "Functional and visually appealing dining spaces tailored for efficiency.",
        bullets: ["Optimized kitchen layouts", "Customer-friendly ambiance"],
        image: {
          src: "/images/services/detail/restaurant.jpg",
          alt: "Restaurant patio dining area",
        },
      },
      {
        number: "05",
        title: "Medical Facilities",
        description:
          "Clean, compliant, and highly efficient healthcare environments.",
        bullets: ["Regulatory compliance", "Hygiene-focused design"],
        image: {
          src: "/images/services/detail/medical.jpg",
          alt: "Modern medical facility exterior",
        },
      },
      {
        number: "06",
        title: "Industrial / Warehouse",
        description:
          "Durable and optimized spaces for storage, logistics, and operations.",
        bullets: ["Heavy-duty construction", "Efficient logistics flow"],
        image: {
          src: "/images/services/detail/industrial.jpg",
          alt: "Modern residence exterior illuminated at night",
        },
      },
      {
        number: "07",
        title: "Multifamily Housing",
        description:
          "High-quality residential units designed for modern community living.",
        bullets: ["Scalable housing solutions", "Community-focused layouts"],
        image: {
          src: "/images/services/detail/multifamily.jpg",
          alt: "Large industrial warehouse complex from above",
        },
      },
      {
        number: "08",
        title: "Government Projects",
        description:
          "Reliable construction solutions meeting public sector standards.",
        bullets: ["Code-compliant execution", "Large-scale project handling"],
        image: {
          src: "/images/services/detail/government.jpg",
          alt: "Classical government building with dome",
        },
      },
    ],
    process: sharedProcess,
  },
  {
    slug: "residential",
    hero: {
      titleBefore: "Residential",
      titleAccent: "Construction",
      description:
        "Luxury condominiums, multi-family housing, and premium custom homes designed for exceptional living.",
      image: {
        src: "/images/services/residential.jpg",
        alt: "Modern luxury residential home",
      },
    },
    intro: {
      eyebrow: "Lifestyle-Focused",
      title: "Built for Living",
      paragraphs: [
        "We create homes and communities that feel intentional — thoughtfully planned spaces with lasting craftsmanship and everyday comfort.",
        "Whether custom residences or multi-family developments, our process protects quality, schedule, and the lifestyle your buyers expect.",
      ],
      image: {
        src: "/images/services/residential.jpg",
        alt: "Residential interior living space",
      },
      highlights: [
        { label: "Custom home expertise" },
        { label: "Premium material finishes" },
        { label: "Energy-conscious detailing" },
        { label: "Buyer-ready delivery" },
      ],
    },
    categories: [
      {
        number: "01",
        title: "Custom Homes",
        description:
          "One-of-a-kind residences built around your lifestyle, lot conditions, and design vision.",
        bullets: ["Personalized architectural detailing", "High-end finish packages"],
        image: {
          src: "/images/services/residential.jpg",
          alt: "Custom luxury home exterior",
        },
      },
      {
        number: "02",
        title: "Condominiums",
        description:
          "Vertical living communities designed for density, amenity value, and long-term performance.",
        bullets: ["Efficient unit planning", "Shared amenity integration"],
        image: {
          src: "/images/services/detail/multifamily.jpg",
          alt: "Condominium residential building",
        },
      },
      {
        number: "03",
        title: "Townhomes",
        description:
          "Connected homes that balance privacy, community, and efficient land use.",
        bullets: ["Smart footprint planning", "Durable exterior systems"],
        image: {
          src: "/images/services/detail/mixed-use.jpg",
          alt: "Townhome residential development",
        },
      },
      {
        number: "04",
        title: "Luxury Estates",
        description:
          "Premium residences delivered with meticulous detailing and elevated craftsmanship.",
        bullets: ["Bespoke material selection", "Refined interior finishes"],
        image: {
          src: "/images/services/detail/office.jpg",
          alt: "Luxury estate residence",
        },
      },
    ],
    process: {
      ...sharedProcess,
      subtitle:
        "Why clients choose Topbuild for their residential construction needs.",
    },
  },
  {
    slug: "hospitality",
    hero: {
      titleBefore: "Hospitality",
      titleAccent: "Construction",
      description:
        "World-class hotels, resorts, and entertainment venues that deliver unforgettable guest experiences.",
      image: {
        src: "/images/services/hospitality.jpg",
        alt: "Hospitality venue with pool",
      },
    },
    intro: {
      eyebrow: "Guest-Focused",
      title: "Built for Experience",
      paragraphs: [
        "Guest experience starts with construction quality. We deliver hospitality environments that feel refined, operate efficiently, and stand up to continuous use.",
        "From lobby atmospheres to back-of-house systems, every detail is coordinated for comfort, brand standards, and operational excellence.",
      ],
      image: {
        src: "/images/services/hospitality.jpg",
        alt: "Luxury hospitality property",
      },
      highlights: [
        { label: "Guest-first environments" },
        { label: "Brand standard delivery" },
        { label: "Operational efficiency" },
        { label: "Durable public spaces" },
      ],
    },
    categories: [
      {
        number: "01",
        title: "Hotels & Resorts",
        description:
          "Full-service hospitality builds designed around comfort, circulation, and brand identity.",
        bullets: ["Guest-journey planning", "High-traffic finish systems"],
        image: {
          src: "/images/services/hospitality.jpg",
          alt: "Hotel and resort property",
        },
      },
      {
        number: "02",
        title: "Entertainment Venues",
        description:
          "Event and leisure spaces engineered for atmosphere, acoustics, and crowd flow.",
        bullets: ["Large-span gathering spaces", "Performance-ready systems"],
        image: {
          src: "/images/services/detail/restaurant.jpg",
          alt: "Entertainment venue exterior",
        },
      },
      {
        number: "03",
        title: "Restaurants & Dining",
        description:
          "Hospitality-ready dining spaces that balance atmosphere with operational flow.",
        bullets: ["Guest-focused interiors", "Efficient back-of-house planning"],
        image: {
          src: "/images/services/detail/retail.jpg",
          alt: "Restaurant dining environment",
        },
      },
      {
        number: "04",
        title: "Wellness Facilities",
        description:
          "Spa and amenity environments designed for comfort, privacy, and lasting finishes.",
        bullets: ["Calm spatial planning", "Durable luxury materials"],
        image: {
          src: "/images/services/detail/medical.jpg",
          alt: "Wellness and spa facility",
        },
      },
    ],
    process: {
      ...sharedProcess,
      subtitle:
        "Why clients choose Topbuild for their hospitality construction needs.",
    },
  },
  {
    slug: "development",
    hero: {
      titleBefore: "Development",
      titleAccent: "Services",
      description:
        "Comprehensive land development, zoning navigation, and master planning for large-scale projects.",
      image: {
        src: "/images/services/development.jpg",
        alt: "Urban development skyline",
      },
    },
    intro: {
      eyebrow: "Strategy-Focused",
      title: "Built for Opportunity",
      paragraphs: [
        "We help clients evaluate, plan, and deliver developments with clarity — aligning market goals, site realities, and construction strategy.",
        "From early feasibility through execution, TOPBUILD keeps projects moving with disciplined coordination and accountable leadership.",
      ],
      image: {
        src: "/images/services/development.jpg",
        alt: "City development project",
      },
      highlights: [
        { label: "Site feasibility insight" },
        { label: "Entitlement coordination" },
        { label: "Budget clarity" },
        { label: "Delivery strategy" },
      ],
    },
    categories: [
      {
        number: "01",
        title: "Site Strategy",
        description:
          "Early analysis that informs land use, massing, and development potential.",
        bullets: ["Opportunity assessment", "Risk-aware planning"],
        image: {
          src: "/images/services/development.jpg",
          alt: "Urban development planning",
        },
      },
      {
        number: "02",
        title: "Master Planning",
        description:
          "Cohesive planning frameworks that align density, access, and long-term value.",
        bullets: ["Phased growth planning", "Infrastructure coordination"],
        image: {
          src: "/images/services/detail/mixed-use.jpg",
          alt: "Master planned development",
        },
      },
      {
        number: "03",
        title: "Zoning Support",
        description:
          "Practical guidance through zoning requirements and entitlement pathways.",
        bullets: ["Code navigation", "Stakeholder alignment"],
        image: {
          src: "/images/services/detail/office.jpg",
          alt: "Zoning and entitlement planning",
        },
      },
      {
        number: "04",
        title: "Project Delivery",
        description:
          "Coordinated execution from concept through construction with clear ownership.",
        bullets: ["Integrated team leadership", "Schedule accountability"],
        image: {
          src: "/images/services/detail/industrial.jpg",
          alt: "Development project under delivery",
        },
      },
    ],
    process: {
      ...sharedProcess,
      subtitle: "Why clients choose Topbuild for development services.",
    },
  },
  {
    slug: "specialty",
    hero: {
      titleBefore: "Specialty",
      titleAccent: "Services",
      description:
        "Historic renovations, sustainable building retrofits, and specialized facility construction.",
      image: {
        src: "/images/services/specialty.jpg",
        alt: "Specialty construction site",
      },
    },
    intro: {
      eyebrow: "Precision-Focused",
      title: "Built for Complexity",
      paragraphs: [
        "Specialty work demands deeper technical control. We deliver renovations and upgrades with careful sequencing, safety, and craftsmanship.",
        "Our teams protect existing operations while executing precise improvements that elevate performance and longevity.",
      ],
      image: {
        src: "/images/services/specialty.jpg",
        alt: "Specialty construction detailing",
      },
      highlights: [
        { label: "Complex renovations" },
        { label: "Structural upgrades" },
        { label: "Phased execution" },
        { label: "Technical precision" },
      ],
    },
    categories: [
      {
        number: "01",
        title: "Historic Renovations",
        description:
          "Sensitive upgrades that preserve character while modernizing performance.",
        bullets: ["Heritage-conscious detailing", "Structural reinforcement"],
        image: {
          src: "/images/services/specialty.jpg",
          alt: "Historic building renovation",
        },
      },
      {
        number: "02",
        title: "Sustainable Retrofits",
        description:
          "Efficiency upgrades that improve energy performance and long-term operations.",
        bullets: ["System modernization", "Performance-focused detailing"],
        image: {
          src: "/images/services/detail/office.jpg",
          alt: "Sustainable building retrofit",
        },
      },
      {
        number: "03",
        title: "Specialized Facilities",
        description:
          "Technical environments built for unique operational and compliance needs.",
        bullets: ["Custom system integration", "Precision craftsmanship"],
        image: {
          src: "/images/services/detail/industrial.jpg",
          alt: "Specialized facility construction",
        },
      },
      {
        number: "04",
        title: "Structural Upgrades",
        description:
          "Reinforcement and system improvements engineered for safety and longevity.",
        bullets: ["Code-aligned upgrades", "Careful structural coordination"],
        image: {
          src: "/images/services/detail/medical.jpg",
          alt: "Structural upgrade construction",
        },
      },
    ],
    process: {
      ...sharedProcess,
      subtitle:
        "Why clients choose Topbuild for specialty construction needs.",
    },
  },
  {
    slug: "consulting",
    hero: {
      titleBefore: "Consulting",
      titleAccent: "& Support",
      description:
        "Expert project management, feasibility studies, and strategic consulting to ensure project success.",
      image: {
        src: "/images/services/consulting.jpg",
        alt: "Consulting and project planning",
      },
    },
    intro: {
      eyebrow: "Clarity-Focused",
      title: "Built for Clarity",
      paragraphs: [
        "Strong projects start with clear decisions. Our consulting support helps clients de-risk budgets, schedules, and delivery strategy early.",
        "We bring construction reality into planning conversations so your team moves forward with confidence.",
      ],
      image: {
        src: "/images/services/consulting.jpg",
        alt: "Project consulting workshop",
      },
      highlights: [
        { label: "Budget advising" },
        { label: "Schedule strategy" },
        { label: "Permit guidance" },
        { label: "Delivery planning" },
      ],
    },
    categories: [
      {
        number: "01",
        title: "Preconstruction Advising",
        description:
          "Early insights that shape scope, cost, and constructability before work begins.",
        bullets: ["Cost clarity", "Constructability reviews"],
        image: {
          src: "/images/process/planning.jpg",
          alt: "Preconstruction planning session",
        },
      },
      {
        number: "02",
        title: "Feasibility Studies",
        description:
          "Data-backed evaluations that test viability before major capital decisions.",
        bullets: ["Market and cost analysis", "Risk identification"],
        image: {
          src: "/images/services/consulting.jpg",
          alt: "Feasibility study workshop",
        },
      },
      {
        number: "03",
        title: "Project Management",
        description:
          "Hands-on leadership that keeps teams aligned through every delivery milestone.",
        bullets: ["Schedule ownership", "Stakeholder coordination"],
        image: {
          src: "/images/services/detail/office.jpg",
          alt: "Project management meeting",
        },
      },
      {
        number: "04",
        title: "Project Support",
        description:
          "Ongoing guidance that keeps stakeholders aligned through delivery milestones.",
        bullets: ["Decision support", "Risk tracking"],
        image: {
          src: "/images/services/detail/mixed-use.jpg",
          alt: "Project support session",
        },
      },
    ],
    process: {
      ...sharedProcess,
      subtitle: "Why clients choose Topbuild for consulting and support.",
    },
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return serviceDetails.map((service) => service.slug);
}
