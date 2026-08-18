import type { AdvantageItem } from "@/types/content";

export const whyChooseUsContent = {
  eyebrow: "The Topbuild Advantage",
  title: "Why Choose Us",
  description:
    "We don't just build structures; we build relationships based on trust, reliability, and exceptional results.",
  images: {
    left: {
      src: "/images/why-us/left.png",
      alt: "Modern skyscrapers under construction at sunset",
    },
    right: {
      src: "/images/why-us/right.png",
      alt: "Construction crane against a bright sky",
    },
  },
  items: [
    {
      icon: "shield",
      title: "Quality Craftsmanship",
      description:
        "Every detail is executed with precision, using premium materials and proven construction methods.",
    },
    {
      icon: "clock",
      title: "On-Time Delivery",
      description:
        "We plan thoroughly and execute efficiently to deliver projects on schedule without compromising quality.",
    },
    {
      icon: "users",
      title: "Experienced Team",
      description:
        "Our skilled professionals bring years of industry expertise to every phase of your project.",
    },
    {
      icon: "thumb",
      title: "Client Satisfaction",
      description:
        "Your vision guides our process — we communicate clearly and deliver results that exceed expectations.",
    },
  ] satisfies AdvantageItem[],
};
