import { Container } from "@/components/layout/Container";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { HighlightItem } from "@/components/ui/HighlightItem";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { featuredProjectsContent } from "@/data/projects";

export function FeaturedProjectsSection() {
  const { eyebrow, title, seeAll, description, highlights, project } =
    featuredProjectsContent;

  return (
    <Section
      id="projects"
      ariaLabelledBy="featured-projects-heading"
      className="overflow-hidden bg-[#12151a]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal variant="up">
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionEyebrow tone="light" className="mb-4">
                {eyebrow}
              </SectionEyebrow>
              <h2
                id="featured-projects-heading"
                className="font-serif text-[clamp(2.25rem,3.7037vw,3.5rem)] leading-[3.375rem] font-semibold tracking-[0.04em] text-[#f7f6f3]"
              >
                {title}
              </h2>
            </div>

            <TextLink href={seeAll.href} className="sm:pb-1">
              {seeAll.label}
            </TextLink>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={120}>
          <FeaturedProjectCard {...project} />
        </Reveal>

        <div className="mt-10 grid items-start gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-14">
          <Reveal variant="left" delay={80}>
            <p className="max-w-xl font-sans text-base leading-7 text-[#f7f6f3]/70 sm:text-[1.125rem] sm:leading-8">
              {description}
            </p>
          </Reveal>

          <ul className="flex w-full flex-col gap-3">
            {highlights.map((item, index) => (
              <Reveal key={item} as="li" variant="right" delay={140 + index * 100}>
                <HighlightItem>{item}</HighlightItem>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
