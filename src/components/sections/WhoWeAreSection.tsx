import Image from "next/image";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whoWeAreContent } from "@/data/home";

function ProjectsBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10">
      <div className="relative flex size-[min(72%,20.5rem)] items-center justify-center">
        <div
          className="absolute inset-0 rounded-full border border-dashed border-white/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[8%] rounded-full border border-dashed border-white/80"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[16%] rounded-full border border-dashed border-white/70"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[8.5rem] text-center text-white">
          <p className="font-serif text-[clamp(2.5rem,3.7037vw,3.5rem)] leading-[3.375rem] font-semibold tracking-[0.04em]">
            {value}
          </p>
          <p className="mt-3 font-sans text-[1.375rem] leading-[1.875rem] font-normal tracking-[0.06em]">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WhoWeAreSection() {
  const { eyebrow, title, description, image, badge, features } = whoWeAreContent;

  return (
    <Section
      id="about"
      ariaLabelledBy="who-we-are-heading"
      className="bg-surface !pt-[clamp(4rem,7.7vw,7.3125rem)] !pb-0"
    >
      <div className="grid lg:grid-cols-[minmax(0,41.625rem)_minmax(0,1fr)]">
        <Reveal variant="left" className="relative min-h-[28rem] w-full overflow-hidden lg:min-h-[41.25rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-[center_30%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          <ProjectsBadge value={badge.value} label={badge.label} />
        </Reveal>

        <div className="flex w-full flex-col justify-center px-[var(--page-gutter)] py-16 lg:pl-[4.3125rem] lg:pr-[var(--page-gutter)] lg:py-[5.5rem]">
          <Reveal variant="right" delay={80}>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              titleId="who-we-are-heading"
              description={description}
              descriptionClassName="max-w-[42.1875rem]"
              titleClassName="max-w-[15ch]"
            />
          </Reveal>

          <ul className="mt-10 flex w-full max-w-[42.1875rem] flex-col gap-3">
            {features.map((feature, index) => (
              <Reveal
                key={`${feature.title}-${feature.subtitle}`}
                as="li"
                variant="up"
                delay={160 + index * 110}
              >
                <FeatureRow {...feature} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
