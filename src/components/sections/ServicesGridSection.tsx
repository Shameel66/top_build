import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesPageContent } from "@/data/services";

export function ServicesGridSection() {
  return (
    <Section
      id="service-list"
      ariaLabelledBy="service-list-heading"
      className="bg-surface !pt-[clamp(4rem,8vw,7.875rem)] !pb-[clamp(4.5rem,8vw,7.5rem)]"
    >
      <Container>
        <h2 id="service-list-heading" className="sr-only">
          All services
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-[1.875rem]">
          {servicesPageContent.items.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              variant="up"
              delay={80 + index * 90}
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
