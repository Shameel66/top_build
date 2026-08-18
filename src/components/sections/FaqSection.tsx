import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqContent } from "@/data/faq";

export function FaqSection() {
  const { eyebrow, title, description, items } = faqContent;

  return (
    <Section id="faq" ariaLabelledBy="faq-heading" className="bg-surface">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-14 xl:gap-16">
          <Reveal variant="left">
            <SectionHeading
              eyebrow={eyebrow}
              eyebrowLine="after"
              title={title}
              titleId="faq-heading"
              description={description}
              titleClassName="max-w-[14ch] !text-[clamp(2.25rem,3.7037vw,3.5rem)] !leading-[3.375rem]"
              descriptionClassName="max-w-[28.3125rem]"
            />
          </Reveal>

          <Reveal variant="right" delay={120}>
            <FaqAccordion items={items} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
