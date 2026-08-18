import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectStatsBar } from "@/components/ui/ProjectStatsBar";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.brief[0],
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <PageHero
        titleId="project-detail-hero"
        titleBefore={project.titleBefore}
        titleAccent={project.titleAccent}
        description={`${project.category} project in ${project.location}.`}
        image={project.heroImage}
        stackedTitle
        backLink={{ href: "/projects", label: "Back to Projects" }}
      />

      <ProjectStatsBar stats={project.stats} />

      <Section
        id="brief"
        ariaLabelledBy="project-brief-heading"
        className="bg-surface !pt-[clamp(2rem,4vw,3rem)] !pb-[clamp(3rem,6vw,5rem)]"
      >
        <Container>
          <Reveal variant="up">
            <h2
              id="project-brief-heading"
              className="text-center font-serif text-[clamp(2.25rem,3.7vw,3.5rem)] leading-none font-semibold text-navy"
            >
              Project Brief
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <ul className="mx-auto mt-10 max-w-[81.625rem] space-y-3 border-t border-border pt-10 sm:mt-12 sm:pt-12">
              {project.brief.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="flex gap-4 font-sans text-[clamp(1.05rem,1.65vw,1.5625rem)] leading-normal text-muted/80"
                >
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section
        id="transformation"
        ariaLabelledBy="before-after-heading"
        className="bg-surface !pt-0 !pb-[clamp(3rem,6vw,5rem)]"
      >
        <Container>
          <Reveal variant="up">
            <h2
              id="before-after-heading"
              className="text-center font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-none font-semibold text-navy"
            >
              Before and After Transformation
            </h2>
          </Reveal>

          <Reveal variant="scale" delay={120} className="mt-10 sm:mt-12">
            <BeforeAfterSlider
              before={project.beforeAfter.before}
              after={project.beforeAfter.after}
            />
          </Reveal>
        </Container>
      </Section>

      <ProjectGallerySection items={project.gallery} />
      <CtaBannerSection />
    </>
  );
}
