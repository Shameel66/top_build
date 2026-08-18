import { Container } from "@/components/layout/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { aboutPageContent } from "@/data/about";

export function AboutMissionSection() {
  return (
    <Section
      id="mission"
      ariaLabelledBy="mission-heading"
      className="bg-surface-soft"
    >
      <Container>
        <h2 id="mission-heading" className="sr-only">
          Mission and values
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {aboutPageContent.infoBlocks.map((block, index) => (
            <Reveal
              key={block.title}
              as="li"
              variant={index === 0 ? "left" : "right"}
              delay={80 + index * 100}
              className="h-full"
            >
              <InfoCard {...block} className="luxury-card h-full" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
