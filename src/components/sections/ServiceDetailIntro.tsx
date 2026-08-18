import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ServiceDetailContent } from "@/types/serviceDetail";

type ServiceDetailIntroProps = {
  content: ServiceDetailContent["intro"];
};

export function ServiceDetailIntro({ content }: ServiceDetailIntroProps) {
  const { eyebrow, title, paragraphs, image, highlights } = content;

  return (
    <Section
      id="overview"
      ariaLabelledBy="service-intro-heading"
      className="bg-surface !pb-[clamp(4rem,7vw,7.5rem)]"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,40.875rem)] lg:gap-14 xl:gap-16">
          <div>
            <Reveal variant="up">
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                titleId="service-intro-heading"
                titleClassName="max-w-[18ch] tracking-[0.04em]"
              />
            </Reveal>
            <Reveal variant="up" delay={100}>
              <div className="mt-6 space-y-6 md:mt-7">
                {paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="max-w-[39rem] font-sans text-[1.25rem] leading-[1.9375rem] text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal
            variant="right"
            delay={120}
            className="relative aspect-[654/524] w-full overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
            />
            <div className="absolute inset-x-4 bottom-6 flex flex-col gap-4 sm:inset-x-6 sm:bottom-8 sm:gap-[1.0625rem] lg:left-0 lg:right-auto lg:bottom-[4.5rem]">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="flex h-[3.25rem] w-fit min-w-[18.5rem] items-center justify-center border border-white/20 bg-white/30 px-5 backdrop-blur-[2px]"
                  style={{ animationDelay: `${180 + index * 70}ms` }}
                >
                  <span className="font-sans text-base font-medium leading-[1.8125rem] text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
