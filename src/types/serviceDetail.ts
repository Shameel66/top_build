export type ServiceDetailHighlight = {
  label: string;
};

export type ServiceDetailCategory = {
  number: string;
  title: string;
  description: string;
  bullets: [string, string];
  image: {
    src: string;
    alt: string;
  };
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type ServiceDetailContent = {
  slug: string;
  hero: {
    eyebrow?: string;
    titleBefore: string;
    titleAccent: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: {
      src: string;
      alt: string;
    };
    highlights: ServiceDetailHighlight[];
  };
  categories: ServiceDetailCategory[];
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
};
