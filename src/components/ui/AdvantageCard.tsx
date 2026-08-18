import { Clock3, ShieldCheck, ThumbsUp, Users } from "lucide-react";
import type { AdvantageItem } from "@/types/content";
import { cn } from "@/lib/cn";

const advantageIcons = {
  shield: ShieldCheck,
  clock: Clock3,
  users: Users,
  thumb: ThumbsUp,
} as const;

type AdvantageCardProps = AdvantageItem & {
  className?: string;
};

export function AdvantageCard({
  icon,
  title,
  description,
  className,
}: AdvantageCardProps) {
  const Icon = advantageIcons[icon];

  return (
    <article
      className={cn(
        "flex h-full flex-col bg-white px-7 py-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <span className="mb-5 inline-flex size-14 items-center justify-center text-brand">
        <Icon className="size-10 stroke-[1.5]" aria-hidden="true" />
      </span>
      <h3 className="font-sans text-[1.375rem] leading-[1.8125rem] font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-3 font-sans text-[0.875rem] leading-5 text-muted">
        {description}
      </p>
    </article>
  );
}
