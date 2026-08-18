export type NavLink = {
  label: string;
  href: string;
};

export type FeatureItem = {
  icon: "calendar" | "smile" | "award";
  title: string;
  subtitle: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: "building" | "home" | "hotel" | "development" | "specialty" | "consulting";
  image: {
    src: string;
    alt: string;
  };
};

export type FeaturedProject = {
  category: string;
  title: string;
  location: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export type AdvantageItem = {
  icon: "shield" | "clock" | "users" | "thumb";
  title: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  image: {
    src: string;
    alt: string;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export type PageHeroContent = {
  titleBefore: string;
  titleAccent: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type CheckItem = {
  text: string;
};

export type InfoBlock = {
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  socials?: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
};
