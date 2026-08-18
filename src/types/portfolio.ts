export type ProjectCategory =
  | "All Projects"
  | "Commercial"
  | "Residential"
  | "Hospitality"
  | "Development";

export type ProjectListItem = {
  slug: string;
  title: string;
  district: string;
  location: string;
  year: string;
  category: Exclude<ProjectCategory, "All Projects">;
  image: {
    src: string;
    alt: string;
  };
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectDetail = ProjectListItem & {
  heroImage: {
    src: string;
    alt: string;
  };
  titleBefore: string;
  titleAccent: string;
  stats: ProjectStat[];
  brief: string[];
  beforeAfter: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  };
  gallery: Array<{ src: string; alt: string; span?: "hero" | "wide" | "square" }>;
};

export type BlogListItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogDetail = BlogListItem & {
  author: string;
  updated?: string;
  heroImage: {
    src: string;
    alt: string;
  };
  intro?: string;
  sections: BlogSection[];
  tags: string[];
};
