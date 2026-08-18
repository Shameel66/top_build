import Image from "next/image";
import type { FeatureItem } from "@/types/content";
import { cn } from "@/lib/cn";

const featureIcons = {
  calendar: "/images/shared/icons/feature-calendar.svg",
  smile: "/images/shared/icons/feature-smile.svg",
  award: "/images/shared/icons/feature-award.svg",
} as const;

type FeatureRowProps = FeatureItem & {
  className?: string;
};

export function FeatureRow({ icon, title, subtitle, className }: FeatureRowProps) {
  return (
    <div className={cn("flex items-stretch", className)}>
      <span className="inline-flex size-[4.5rem] shrink-0 items-center justify-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.03)]">
        <Image
          src={featureIcons[icon]}
          alt=""
          width={36}
          height={36}
          unoptimized
          className="size-9"
        />
      </span>
      <div className="flex min-h-[4.5rem] min-w-0 flex-1 items-center bg-gradient-to-r from-white to-white/0 pl-[1.8125rem]">
        <div className="flex flex-col gap-1 uppercase">
          <p className="font-sans text-[1.125rem] leading-5 font-medium tracking-[0.04em] text-ink">
            {title}
          </p>
          <p className="font-sans text-[0.75rem] leading-5 font-normal tracking-[0.04em] text-muted">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
