import { siteConfig } from "@/data/site";

const { contact } = siteConfig;

export const contactPageContent = {
  hero: {
    titleBefore: "Contact",
    titleAccent: "Us",
    description: "Let's discuss your project and bring your vision to life.",
    image: {
      src: "/images/contact/hero.jpg",
      alt: "Construction hard hat on an active jobsite",
    },
  },
  infoCards: [
    {
      icon: "map" as const,
      title: "Visit Our Office",
      detail: `${contact.addressLine1}\n${contact.addressLine2}`,
    },
    {
      icon: "phone" as const,
      title: "Call Us",
      detail: contact.phone,
      href: contact.phoneHref,
    },
    {
      icon: "mail" as const,
      title: "Email Us",
      detail: contact.email,
      href: contact.emailHref,
    },
    {
      icon: "clock" as const,
      title: "Working Hours",
      detail: `${contact.hoursWeekday}\n${contact.hoursSaturday}`,
    },
  ],
  form: {
    eyebrow: "Get in touch",
    title: "Send Us a Message",
    categories: [
      "Commercial Construction",
      "Residential Construction",
      "Hospitality",
      "Development",
      "Specialty / Consulting",
    ],
  },
  assistance: {
    title: "Need Immediate Assistance?",
    description: "Our team is ready to help you get started.",
    phone: contact.phone,
    phoneHref: contact.phoneHref,
    email: contact.email,
    emailHref: contact.emailHref,
    image: {
      src: "/images/contact/side.jpg",
      alt: "Construction team collaborating on site",
    },
  },
  map: {
    title: "Our Location",
    address: contact.addressFull,
    embedUrl: contact.mapEmbedUrl,
  },
};

export const notFoundContent = {
  title: "Page Not Found",
  description:
    "The page you are looking for may have been moved, renamed, or is temporarily unavailable.",
  image: {
    src: "/images/404.png",
    alt: "Construction crane forming the number 404",
  },
  primaryCta: { label: "Back to Home", href: "/" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};
