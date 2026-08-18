import Image from "next/image";
import { AdvantageCard } from "@/components/ui/AdvantageCard";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUsContent } from "@/data/whyChooseUs";

export function WhyChooseUsSection() {
  const { eyebrow, title, description, images, items } = whyChooseUsContent;

  return (
    <Section
      id="why-us"
      ariaLabelledBy="why-choose-us-heading"
      className="bg-surface-soft"
    >
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            titleId="why-choose-us-heading"
            description={description}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 items-stretch gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:gap-6">
          <Reveal
            variant="left"
            delay={80}
            className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5] lg:aspect-auto lg:min-h-full"
          >
            <Image
              src={images.left.src}
              alt={images.left.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
            />
          </Reveal>

          <Reveal
            variant="right"
            delay={120}
            className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5] lg:order-last lg:aspect-auto lg:min-h-full"
          >
            <Image
              src={images.right.src}
              alt={images.right.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
            />
          </Reveal>

          <ul className="col-span-2 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-1 lg:gap-5">
            {items.map((item, index) => (
              <Reveal
                key={item.title}
                as="li"
                variant="up"
                delay={160 + index * 100}
                className="h-full"
              >
                <AdvantageCard {...item} className="luxury-card" />
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
