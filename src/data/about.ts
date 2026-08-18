import type {
  CheckItem,
  InfoBlock,
  PageHeroContent,
  TeamMember,
} from "@/types/content";

export const aboutPageContent = {
  hero: {
    titleBefore: "About Our",
    titleAccent: "Company",
    description:
      "Building excellence through innovation, trust, and unparalleled expertise in every project we undertake.",
    image: {
      src: "/images/about/hero.jpg",
      alt: "Construction team working on site with rebar and safety gear",
    },
  } satisfies PageHeroContent,

  legacy: {
    eyebrow: "Who We Are",
    title: "A Legacy of Excellence in Construction",
    paragraphs: [
      "Founded on the principles of integrity, quality, and innovation, Topbuild has grown to become a premier construction and development firm. We don't just build structures; we create enduring spaces that inspire and serve their communities.",
      "Our comprehensive approach combines cutting-edge technology with traditional craftsmanship. From initial concept to final delivery, our dedicated team of experts ensures that every detail meets our rigorous standards of excellence.",
    ],
    image: {
      src: "/images/about/legacy.jpg",
      alt: "High-rise building under construction with tower cranes",
    },
    checks: [
      { text: "Over a decade of industry excellence" },
      { text: "Award-winning project management" },
      { text: "Commitment to sustainable building" },
      { text: "Uncompromising safety standards" },
    ] satisfies CheckItem[],
  },

  infoBlocks: [
    {
      title: "Our Mission",
      description:
        "To deliver exceptional construction and development services that exceed client expectations through unwavering commitment to quality, safety, and innovative solutions, while fostering lasting relationships built on trust and transparency.",
    },
    {
      title: "What Makes Us Different",
      description:
        "To deliver exceptional construction and development services that exceed client expectations through unwavering commitment to quality, safety, and innovative solutions, while fostering lasting relationships built on trust and transparency.",
    },
  ] satisfies InfoBlock[],

  team: {
    title: "Our Team",
    members: [
      {
        name: "Robert Sterling",
        role: "Chief Executive Officer",
        image: {
          src: "/images/about/team/member-1.jpg",
          alt: "Portrait of Robert Sterling",
        },
        socials: {
          facebook: "https://facebook.com",
          linkedin: "https://linkedin.com",
          twitter: "https://x.com",
        },
      },
      {
        name: "Elena Marks",
        role: "Project Director",
        image: {
          src: "/images/about/team/member-2.jpg",
          alt: "Portrait of Elena Marks",
        },
        socials: {
          facebook: "https://facebook.com",
          linkedin: "https://linkedin.com",
          twitter: "https://x.com",
        },
      },
      {
        name: "James Carter",
        role: "Lead Architect",
        image: {
          src: "/images/about/team/member-3.jpg",
          alt: "Portrait of James Carter",
        },
        socials: {
          facebook: "https://facebook.com",
          linkedin: "https://linkedin.com",
          twitter: "https://x.com",
        },
      },
      {
        name: "Michael Reed",
        role: "Operations Manager",
        image: {
          src: "/images/about/team/member-4.jpg",
          alt: "Portrait of Michael Reed",
        },
        socials: {
          facebook: "https://facebook.com",
          linkedin: "https://linkedin.com",
          twitter: "https://x.com",
        },
      },
    ] satisfies TeamMember[],
  },
};
