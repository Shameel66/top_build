import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/data/blogs";
import { getAllProjectSlugs } from "@/data/projects";
import { getAllServiceSlugs } from "@/data/serviceDetails";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/blog",
    "/testimonials",
    "/faq",
    "/contact",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...getAllServiceSlugs().map((slug) => ({
      url: `${siteConfig.url}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllProjectSlugs().map((slug) => ({
      url: `${siteConfig.url}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllBlogSlugs().map((slug) => ({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
