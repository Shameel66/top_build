import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { ctaContent } from "@/data/cta";

export function CtaBannerSection() {
  const { titleSerif, titleSans, description, primaryCta, secondaryCta } =
    ctaContent;

  return (
    <Section
      id="cta"
      ariaLabelledBy="cta-heading"
      className="bg-surface !pt-[clamp(2.5rem,5vw,4rem)] !pb-16 md:!pb-20 lg:!pb-24"
    >
      <Container className="!max-w-none !px-[var(--page-gutter)]">
        <Reveal variant="scale">
          <div className="relative overflow-hidden px-6 py-[4.5rem] text-center sm:px-10 md:px-16 md:py-[7.25rem]">
            <Image
              src="/images/home/cta-banner.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,152,41,0.88)_0%,rgba(243,199,138,0.82)_45%,rgba(247,228,207,0.9)_100%)]"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2
                id="cta-heading"
                className="mx-auto max-w-[45.75rem] font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.2] font-semibold tracking-[0.04em] text-navy"
              >
                <span>{titleSerif} </span>
                <span className="whitespace-nowrap">{titleSans}</span>
              </h2>

              <p className="mx-auto mt-6 max-w-[60.25rem] font-sans text-[1.125rem] leading-8 text-ink/70 sm:text-[1.25rem]">
                {description}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-[0.875rem]">
                <Button
                  href={primaryCta.href}
                  size="lg"
                  showArrow={false}
                  className="!min-w-[13.9375rem]"
                >
                  {primaryCta.label}
                </Button>
                <Button
                  href={secondaryCta.href}
                  size="lg"
                  variant="dark"
                  showArrow={false}
                  className="!min-w-[13.9375rem]"
                >
                  {secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
