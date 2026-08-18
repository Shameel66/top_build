import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FaqCategoryList } from "@/components/ui/FaqCategoryList";
import { InnerPageBanner } from "@/components/ui/InnerPageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { faqPageContent } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about TOPBUILD services, process, pricing, and project delivery.",
};

export default function FaqPage() {
  const { badge, title, categories } = faqPageContent;

  return (
    <>
      <InnerPageBanner badge={badge} title={title} titleId="faq-page-heading" />

      <Section className="bg-surface !pt-[clamp(3rem,6vw,5rem)] !pb-[clamp(3rem,6vw,5rem)]">
        <Container>
          <Reveal variant="up">
            <div className="mx-auto max-w-[81.4375rem]">
              <FaqCategoryList categories={categories} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBannerSection />
    </>
  );
}
