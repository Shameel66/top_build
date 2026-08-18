import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesContent } from "@/data/services";

export function ServicesSection() {
  const { eyebrow, title, description, items } = servicesContent;

  return (
    <Section
      id="services"
      ariaLabelledBy="services-heading"
      className="bg-surface-soft"
    >
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            titleId="services-heading"
            description={description}
            align="center"
          />
        </Reveal>

        <ul className="mt-[3.125rem] grid gap-[1.0625rem] sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              variant="up"
              delay={100 + index * 120}
              className="h-full"
            >
              <ServiceCard {...item} className="luxury-card" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
