import { footerLinks, siteConfig } from "@/data/site";

export const footerContent = {
  newsletter: {
    title: "Subscribe to our Newsletter",
    placeholder: "Your Email",
  },
  about:
    "Building excellence and delivering trust through premium construction and development services tailored to your needs.",
  links: footerLinks,
  contact: {
    address: siteConfig.contact.addressFull,
    phone: siteConfig.contact.phone,
    phoneHref: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
  },
  socials: [
    { label: "Facebook", href: "https://facebook.com", network: "facebook" },
    { label: "Instagram", href: "https://instagram.com", network: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", network: "linkedin" },
    { label: "X", href: "https://x.com", network: "x" },
  ] as const,
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
};
