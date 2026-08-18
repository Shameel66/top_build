import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { ServiceDetailRow } from "@/components/ui/ServiceDetailRow";
import type { ServiceDetailCategory } from "@/types/serviceDetail";

type ServiceDetailCategoriesProps = {
  categories: ServiceDetailCategory[];
};

export function ServiceDetailCategories({
  categories,
}: ServiceDetailCategoriesProps) {
  return (
    <Section
      id="categories"
      ariaLabelledBy="service-categories-heading"
      flush
      className="bg-surface pb-[clamp(3rem,6vw,5rem)]"
    >
      <h2 id="service-categories-heading" className="sr-only">
        Service categories
      </h2>
      <div className="flex flex-col gap-0 max-lg:gap-10 max-lg:px-[var(--page-gutter)] max-lg:pb-4">
        {categories.map((category, index) => (
          <Reveal key={category.number} variant="fade" delay={index * 40}>
            <ServiceDetailRow
              {...category}
              reverse={index % 2 === 1}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
