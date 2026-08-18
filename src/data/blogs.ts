import type { BlogDetail, BlogListItem } from "@/types/portfolio";

export const blogsPageContent = {
  hero: {
    titleBefore: "Insights &",
    titleAccent: "Articles",
    description:
      "Explore expert insights, tips, and updates from our construction and development team.",
    image: {
      src: "/images/blog/hero.jpg",
      alt: "Architect reviewing plans on a tablet",
    },
  },
};

export const blogs: BlogDetail[] = [
  {
    slug: "future-of-sustainable-commercial-construction",
    title: "The Future of Sustainable Commercial Construction",
    excerpt:
      "Discover how eco-friendly materials and green building practices are reshaping the commercial real estate landscape for a better tomorrow.",
    date: "Feb 12, 2026",
    category: "Commercial",
    author: "Nathan Brown",
    readTime: "5 min read",
    updated: "Feb 12, 2026",
    intro:
      "Discover how eco-friendly materials and green building practices are reshaping the commercial real estate landscape for a better tomorrow. This comprehensive guide explores the latest developments, best practices, and expert recommendations that every stakeholder in the construction industry should be aware of.",
    image: {
      src: "/images/blog/featured.jpg",
      alt: "Sustainable commercial construction site",
    },
    heroImage: {
      src: "/images/blog/featured.jpg",
      alt: "Sustainable commercial construction overview",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "The construction industry is undergoing a significant transformation. With advances in technology, changing regulatory requirements, and evolving client expectations, staying ahead requires both knowledge and adaptability. At Topbuild, we've observed these shifts firsthand across hundreds of projects. Whether you're a property developer, business owner, or homeowner planning a construction project, understanding these dynamics can help you make more informed decisions and achieve better outcomes.",
        ],
      },
      {
        heading: "Key Considerations",
        paragraphs: [
          "When approaching any construction project, several critical factors determine the outcome. Here are the most important elements to consider:",
        ],
        bullets: [
          "Budget Planning: Establish a realistic budget with contingency allowances for unexpected challenges.",
          "Timeline Management: Set clear milestones and maintain regular communication with your construction team.",
          "Quality Standards: Never compromise on materials or workmanship — it always costs more to fix later.",
          "Regulatory Compliance: Ensure all permits and approvals are secured before breaking ground.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "The future of construction is exciting. From sustainable building practices to smart technology integration, the industry continues to evolve in ways that benefit both builders and end users. Staying informed and working with experienced partners is the best way to navigate these changes successfully. At Topbuild, we're committed to staying at the forefront of these developments, ensuring our clients always receive the most innovative and effective solutions for their projects.",
        ],
      },
    ],
    tags: ["Construction", "Design", "Planning", "Industry"],
  },
  {
    slug: "smart-home-integration-in-luxury-developments",
    title: "Smart Home Integration in Luxury Developments",
    excerpt:
      "How modern residential projects are incorporating advanced technology for enhanced living experiences.",
    date: "Feb 12, 2026",
    category: "Residential",
    author: "Nathan Brown",
    readTime: "5 min read",
    updated: "Feb 12, 2026",
    intro:
      "How modern residential projects are incorporating advanced technology for enhanced living experiences. This comprehensive guide explores the latest developments, best practices, and expert recommendations that every stakeholder in the construction industry should be aware of.",
    image: {
      src: "/images/blog/detail-hero.jpg",
      alt: "Luxury development construction with cranes",
    },
    heroImage: {
      src: "/images/blog/detail-hero.jpg",
      alt: "High-rise luxury construction site",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "The construction industry is undergoing a significant transformation. With advances in technology, changing regulatory requirements, and evolving client expectations, staying ahead requires both knowledge and adaptability. At Topbuild, we've observed these shifts firsthand across hundreds of projects. Whether you're a property developer, business owner, or homeowner planning a construction project, understanding these dynamics can help you make more informed decisions and achieve better outcomes.",
        ],
      },
      {
        heading: "Key Considerations",
        paragraphs: [
          "When approaching any construction project, several critical factors determine the outcome. Here are the most important elements to consider:",
        ],
        bullets: [
          "Budget Planning: Establish a realistic budget with contingency allowances for unexpected challenges.",
          "Timeline Management: Set clear milestones and maintain regular communication with your construction team.",
          "Quality Standards: Never compromise on materials or workmanship — it always costs more to fix later.",
          "Regulatory Compliance: Ensure all permits and approvals are secured before breaking ground.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "The future of construction is exciting. From sustainable building practices to smart technology integration, the industry continues to evolve in ways that benefit both builders and end users. Staying informed and working with experienced partners is the best way to navigate these changes successfully. At Topbuild, we're committed to staying at the forefront of these developments, ensuring our clients always receive the most innovative and effective solutions for their projects.",
        ],
      },
    ],
    tags: ["Construction", "Design", "Planning", "Industry"],
  },
  {
    slug: "navigating-supply-chain-challenges-in-2024",
    title: "Navigating Supply Chain Challenges in 2024",
    excerpt:
      "Strategies for keeping construction projects on schedule and within budget despite global disruptions.",
    date: "Oct 12, 2025",
    category: "Planning",
    author: "Elena Marks",
    readTime: "5 min read",
    updated: "Oct 12, 2025",
    image: {
      src: "/images/blog/post-1.jpg",
      alt: "Construction materials and planning",
    },
    heroImage: {
      src: "/images/blog/post-1.jpg",
      alt: "Construction planning and materials",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "Supply volatility continues to affect procurement and sequencing. Teams that plan alternatives early protect both budget and delivery across complex commercial and residential programs.",
        ],
      },
      {
        heading: "Key Considerations",
        paragraphs: [
          "Build flexibility into specifications and keep decision windows tight on long-lead items.",
        ],
        bullets: [
          "Identify long-lead packages at preconstruction",
          "Approve alternates before delays compound",
          "Communicate procurement risks to stakeholders early",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "Resilient procurement habits are becoming a competitive advantage for high-performing construction teams.",
        ],
      },
    ],
    tags: ["Planning", "Construction", "Industry"],
  },
  {
    slug: "designing-workplaces-for-hybrid-teams",
    title: "Designing Workplaces for Hybrid Teams",
    excerpt:
      "How commercial interiors are evolving to support collaboration days, focus work, and flexible occupancy patterns.",
    date: "Oct 12, 2025",
    category: "Commercial",
    author: "James Carter",
    readTime: "5 min read",
    updated: "Oct 12, 2025",
    image: {
      src: "/images/blog/post-2.jpg",
      alt: "Modern commercial workplace exterior",
    },
    heroImage: {
      src: "/images/blog/post-2.jpg",
      alt: "Commercial workplace building",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "Hybrid work has changed how offices earn their keep. Spaces must now justify commute days with better collaboration and better focus environments.",
        ],
      },
      {
        heading: "Key Considerations",
        paragraphs: [
          "Successful workplaces balance density with choice — offering zones that support different modes of work throughout the week.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "The strongest commercial interiors will remain adaptable as team rhythms continue to evolve.",
        ],
      },
    ],
    tags: ["Design", "Commercial", "Planning"],
  },
  {
    slug: "quality-control-on-complex-jobsites",
    title: "Quality Control on Complex Jobsites",
    excerpt:
      "A field-tested approach to inspections, documentation, and accountability when multiple trades share one schedule.",
    date: "Oct 12, 2025",
    category: "Construction",
    author: "Robert Sterling",
    readTime: "5 min read",
    updated: "Oct 12, 2025",
    image: {
      src: "/images/blog/post-3.jpg",
      alt: "Active construction site quality work",
    },
    heroImage: {
      src: "/images/blog/post-3.jpg",
      alt: "Complex jobsite operations",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "Complex jobsites demand clear quality ownership. Without it, rework compounds and finishes suffer under schedule pressure.",
        ],
      },
      {
        heading: "Key Considerations",
        paragraphs: [
          "Quality improves when checkpoints are visible, documented, and tied to trade handoffs.",
        ],
        bullets: [
          "Define hold points before critical covers",
          "Photograph and log issues immediately",
          "Close punch lists before demobilization",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "Digital documentation is making quality culture easier to enforce — and easier to prove for owners.",
        ],
      },
    ],
    tags: ["Construction", "Quality", "Industry"],
  },
  {
    slug: "material-choices-that-age-well",
    title: "Material Choices That Age Well",
    excerpt:
      "Selecting finishes and assemblies that stay beautiful and serviceable long after handover day.",
    date: "Oct 12, 2025",
    category: "Design",
    author: "Elena Marks",
    readTime: "5 min read",
    updated: "Oct 12, 2025",
    image: {
      src: "/images/blog/post-4.jpg",
      alt: "Architectural materials on a residence",
    },
    heroImage: {
      src: "/images/blog/post-4.jpg",
      alt: "Material detailing on luxury home",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "Materials that look perfect on opening day are not always the ones that look strong five years later. Longevity should shape specification choices.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "Owners increasingly value assemblies that reduce maintenance while preserving design intent.",
        ],
      },
    ],
    tags: ["Design", "Materials", "Construction"],
  },
  {
    slug: "building-safer-jobsites-with-better-coordination",
    title: "Building Safer Jobsites with Better Coordination",
    excerpt:
      "How clear communication between trades, supervisors, and owners reduces risk without slowing production.",
    date: "Oct 12, 2025",
    category: "Construction",
    author: "James Carter",
    readTime: "5 min read",
    updated: "Oct 12, 2025",
    image: {
      src: "/images/blog/post-5.jpg",
      alt: "Coordinated construction crew on site",
    },
    heroImage: {
      src: "/images/blog/post-5.jpg",
      alt: "Jobsite coordination meeting",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "Safety and productivity improve together when coordination is treated as a daily discipline rather than a weekly meeting.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "Teams that invest in clearer handoffs build faster — and with fewer incidents.",
        ],
      },
    ],
    tags: ["Construction", "Planning", "Industry"],
  },
  {
    slug: "what-owners-should-ask-before-breaking-ground",
    title: "What Owners Should Ask Before Breaking Ground",
    excerpt:
      "A practical checklist for clarifying scope, risk, and decision rights before construction begins.",
    date: "Oct 12, 2025",
    category: "Planning",
    author: "Nathan Brown",
    readTime: "5 min read",
    updated: "Oct 12, 2025",
    image: {
      src: "/images/blog/post-6.jpg",
      alt: "Owner and builder reviewing site plans",
    },
    heroImage: {
      src: "/images/blog/post-6.jpg",
      alt: "Preconstruction planning session",
    },
    sections: [
      {
        heading: "Understanding the Landscape",
        paragraphs: [
          "The strongest projects start with better questions. Clarifying assumptions early prevents expensive surprises later.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "Owners who stay engaged through preconstruction set their teams up for cleaner delivery.",
        ],
      },
    ],
    tags: ["Planning", "Construction", "Design"],
  },
];

export const blogList: BlogListItem[] = blogs.map(
  ({ slug, title, excerpt, date, readTime, category, image }) => ({
    slug,
    title,
    excerpt,
    date,
    readTime,
    category,
    image,
  }),
);

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogs.map((post) => post.slug);
}

export const featuredBlog = blogs[0];
