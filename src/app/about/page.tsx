import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutLegacySection } from "@/components/sections/AboutLegacySection";
import { AboutMissionSection } from "@/components/sections/AboutMissionSection";
import { AboutTeamSection } from "@/components/sections/AboutTeamSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { aboutPageContent } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TOPBUILD — our legacy of excellence, mission, values, and the team behind every project.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        {...aboutPageContent.hero}
        titleId="about-hero-heading"
        stackedTitle
      />
      <AboutLegacySection />
      <AboutMissionSection />
      <AboutTeamSection />
      <CtaBannerSection />
    </>
  );
}
