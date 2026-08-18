import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaBannerSection />
      <FaqSection />
    </>
  );
}
