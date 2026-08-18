import type { InfoBlock } from "@/types/content";
import { cn } from "@/lib/cn";

type InfoCardProps = InfoBlock & {
  className?: string;
};

export function InfoCard({ title, description, className }: InfoCardProps) {
  return (
    <article
      className={cn(
        "h-full bg-gradient-to-r from-white to-[#fafafa] px-8 py-12 sm:px-11 sm:py-14",
        className,
      )}
    >
      <h3 className="font-serif text-[clamp(1.75rem,2.6455vw,2.5rem)] leading-[3.375rem] font-semibold tracking-[0.04em] text-navy">
        {title}
      </h3>
      <p className="mt-5 max-w-[33.875rem] font-sans text-[1.375rem] leading-[1.8125rem] text-muted">
        {description}
      </p>
    </article>
  );
}
