import Image from "next/image";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPageContent } from "@/data/about";

export function AboutLegacySection() {
  const { eyebrow, title, paragraphs, image, checks } = aboutPageContent.legacy;

  return (
    <Section
      id="who-we-are"
      ariaLabelledBy="about-legacy-heading"
      className="bg-surface-soft !pt-0"
    >
      <Container className="!max-w-none !px-[clamp(0.75rem,1vw,0.9375rem)]">
        <div className="bg-white px-[clamp(1.5rem,5.6vw,5.3125rem)] py-[clamp(3rem,5vw,4.9375rem)]">
          <Reveal variant="up">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              titleId="about-legacy-heading"
              titleClassName="max-w-[15ch]"
            />
          </Reveal>

          <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,36.5rem)_minmax(0,1fr)] lg:gap-14">
            <Reveal
              variant="left"
              className="relative aspect-[584/531] w-full overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
              />
            </Reveal>

            <div>
              <Reveal variant="right" delay={80}>
                <div className="space-y-5">
                  {paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="font-sans text-[1.375rem] leading-[1.8125rem] text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal variant="up" delay={180}>
                <CheckList items={checks} className="mt-10" />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
