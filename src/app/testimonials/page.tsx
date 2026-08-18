import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InnerPageBanner } from "@/components/ui/InnerPageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import {
  testimonialsPageContent,
  testimonialsPageItems,
} from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear what TOPBUILD clients say about our construction quality, communication, and delivery.",
};

export default function TestimonialsPage() {
  const { badge, title } = testimonialsPageContent;

  return (
    <>
      <InnerPageBanner
        badge={badge}
        title={title}
        titleId="testimonials-page-heading"
      />

      <Section className="bg-surface-soft !pt-[clamp(3rem,6vw,5rem)] !pb-[clamp(3rem,6vw,5rem)]">
        <Container>
          <ul className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7">
            {testimonialsPageItems.map((item, index) => (
              <Reveal
                key={`${item.name}-${index}`}
                as="li"
                variant="up"
                delay={(index % 4) * 70}
                className="h-full"
              >
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBannerSection />
    </>
  );
}
