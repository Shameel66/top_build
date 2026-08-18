import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import type { ProcessStep } from "@/types/serviceDetail";

type ProcessSectionProps = {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
};

export function ProcessSection({ title, subtitle, steps }: ProcessSectionProps) {
  return (
    <Section
      id="process"
      ariaLabelledBy="process-heading"
      className="relative overflow-hidden bg-[#1b1b1b] !py-[clamp(4.5rem,8vw,7.5rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/shared/footer-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal variant="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="process-heading"
              className="font-serif text-[clamp(2.25rem,3.7vw,3.5rem)] leading-[3.375rem] font-semibold tracking-[0.04em] text-brand"
            >
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-[1.125rem] leading-[1.8125rem] text-white sm:mt-6">
              {subtitle}
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.1875rem]">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              as="li"
              variant="up"
              delay={100 + index * 100}
            >
              <article className="flex h-full flex-col border border-white/40 bg-white/20 px-2 pb-7 pt-2 backdrop-blur-[1px]">
                <div className="relative aspect-[300/177] w-full overflow-hidden">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-5 px-2">
                  <p className="font-sans text-[clamp(2.5rem,4.5vw,4.25rem)] leading-[3.5rem] font-bold tracking-[0.04em] text-white/40">
                    {step.number}
                  </p>
                  <h3 className="mt-1.5 font-serif text-[1.875rem] leading-[1.875rem] font-semibold tracking-[0.04em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-[1.125rem] leading-5 tracking-[0.04em] text-white">
                    {step.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
