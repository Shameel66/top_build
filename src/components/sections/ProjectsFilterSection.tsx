"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { projectsPageContent, projectList } from "@/data/projects";
import type { ProjectCategory } from "@/types/portfolio";
import { cn } from "@/lib/cn";

export function ProjectsFilterSection() {
  const [active, setActive] = useState<ProjectCategory>("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return projectList;
    return projectList.filter((project) => project.category === active);
  }, [active]);

  return (
    <Section
      id="project-list"
      ariaLabelledBy="projects-filter-heading"
      className="bg-surface !pt-[clamp(3.5rem,5.5vw,5rem)] !pb-[clamp(4.5rem,8vw,7.5rem)]"
    >
      <Container>
        <Reveal variant="up">
          <h2
            id="projects-filter-heading"
            className="font-serif text-[clamp(2rem,2.6455vw,2.5rem)] leading-[3.375rem] font-semibold tracking-[0.04em] text-navy"
          >
            {projectsPageContent.filterTitle}
          </h2>
        </Reveal>

        <div
          className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-5"
          role="tablist"
          aria-label="Filter projects"
        >
          {projectsPageContent.filters.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(filter)}
                className={cn(
                  "cursor-pointer px-[2.125rem] py-0.5 font-sans text-[1.25rem] leading-[3.375rem] tracking-[0.04em] transition-colors duration-200",
                  isActive
                    ? "bg-ink font-semibold text-white"
                    : "bg-black/[0.04] font-normal text-muted hover:bg-black/[0.08]",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-5">
          {filtered.map((project, index) => (
            <Reveal
              key={project.slug}
              as="li"
              variant="up"
              delay={80 + index * 80}
            >
              <ProjectCard {...project} className="luxury-card" />
            </Reveal>
          ))}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center font-sans text-muted">
            No projects found in this category yet.
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
