import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsFilterSection } from "@/components/sections/ProjectsFilterSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { projectsPageContent } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore TOPBUILD projects across commercial, residential, hospitality, and development work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        {...projectsPageContent.hero}
        titleId="projects-hero-heading"
        stackedTitle
      />
      <ProjectsFilterSection />
      <CtaBannerSection />
    </>
  );
}
