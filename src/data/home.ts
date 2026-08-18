import type { FeatureItem } from "@/types/content";

export const heroContent = {
  titleBefore: "Los Angeles",
  titleAccent: "Top",
  titleAccentLine2: "Construction",
  titleAfter: "Company",
  subtitle: "We build high-quality spaces with precision and care.",
  cta: { label: "View Projects", href: "/projects" },
  image: {
    src: "/images/home/hero.png",
    alt: "Modern commercial building exterior in Los Angeles",
  },
  stats: [
    { label: "100+ Projects" },
    { label: "10+ Years" },
    { label: "95% Satisfaction" },
  ],
};

export const whoWeAreContent = {
  eyebrow: "Who We Are",
  title: "Building the Future with Precision",
  description:
    "Topbuild is a premier construction and development firm dedicated to delivering high-end projects that stand the test of time. With a relentless focus on quality craftsmanship, innovative solutions, and unwavering integrity, we turn complex visions into stunning realities. Our team of experts manages every detail to ensure your project exceeds expectations.",
  image: {
    src: "/images/home/who-we-are.png",
    alt: "Construction site with tower cranes and buildings under development",
  },
  badge: {
    value: "100+",
    label: "Projects Completed",
  },
  features: [
    {
      icon: "calendar",
      title: "10+ Years",
      subtitle: "Of Industry Experience",
    },
    {
      icon: "smile",
      title: "95%",
      subtitle: "Client Satisfaction",
    },
    {
      icon: "award",
      title: "Top Tier",
      subtitle: "Industry Expertise",
    },
  ] satisfies FeatureItem[],
};
