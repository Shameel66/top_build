import type { NavLink } from "@/types/content";

export const siteConfig = {
  name: "TOPBUILD",
  tagline: "Los Angeles Top Construction Company",
  description:
    "TOPBUILD builds high-quality commercial and residential spaces in Los Angeles with precision, craftsmanship, and care.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://topbuild.com",
  locale: "en_US",
  contact: {
    addressLine1: "450 S Spring Street, Suite 800",
    addressLine2: "Los Angeles, CA 90013",
    addressFull: "450 S Spring Street, Suite 800, Los Angeles, CA 90013",
    phone: "+1 (234) 567-890",
    phoneHref: "tel:+1234567890",
    email: "info@topbuild.com",
    emailHref: "mailto:info@topbuild.com",
    hoursWeekday: "Mon – Fri: 8AM – 6PM",
    hoursSaturday: "Sat: 9AM – 2PM",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Los%20Angeles%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
