import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { servicesPageContent } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TOPBUILD services including commercial, residential, hospitality, development, specialty, and consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        {...servicesPageContent.hero}
        titleId="services-hero-heading"
        stackedTitle
      />
      <ServicesGridSection />
      <CtaBannerSection />
    </>
  );
}
