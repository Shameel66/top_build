import { ProjectStatsBar } from "@/components/ui/ProjectStatsBar";
import type { ProjectStat } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type BlogMetaBarProps = {
  author: string;
  updated: string;
  readTime: string;
  category: string;
  className?: string;
};

export function BlogMetaBar({
  author,
  updated,
  readTime,
  category,
  className,
}: BlogMetaBarProps) {
  const stats: ProjectStat[] = [
    { label: "Author", value: author },
    { label: "Updated", value: updated },
    { label: "Read Time", value: readTime },
    { label: "Category", value: category },
  ];

  return <ProjectStatsBar stats={stats} className={cn(className)} />;
}
