import type { ProjectStat } from "@/types/portfolio";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type ProjectStatsBarProps = {
  stats: ProjectStat[];
  className?: string;
};

export function ProjectStatsBar({ stats, className }: ProjectStatsBarProps) {
  return (
    <div className={cn("bg-surface", className)}>
      <Container>
        <Reveal variant="up">
          <ul className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[13rem] lg:py-12">
            {stats.map((stat) => (
              <li key={stat.label} className="text-center">
                <div className="mx-auto mb-5 h-px w-full max-w-[15.25rem] bg-border" />
                <p className="font-sans text-[1.25rem] leading-normal text-muted/80">
                  {stat.label}
                </p>
                <p className="mt-2 font-serif text-[1.75rem] leading-normal font-semibold text-ink/80">
                  {stat.value}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </div>
  );
}
