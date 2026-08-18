import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  line?: "before" | "after" | "both";
  tone?: "brand" | "light";
};

export function SectionEyebrow({
  children,
  className,
  align = "left",
  line,
  tone = "brand",
}: SectionEyebrowProps) {
  const resolvedLine = line ?? (align === "center" ? "both" : "before");
  const accent = (
    <span
      className={cn(
        "h-px w-[2.5625rem] shrink-0",
        tone === "brand" ? "bg-brand" : "bg-white/55",
      )}
      aria-hidden="true"
    />
  );

  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-[0.8125rem]",
        align === "center" && "justify-center",
        className,
      )}
    >
      {resolvedLine === "before" || resolvedLine === "both" ? accent : null}
      <span
        className={cn(
          "font-sans text-[0.875rem] leading-[2.3125rem] font-medium tracking-[0.04em] uppercase",
          tone === "brand" ? "text-brand" : "text-white/90",
        )}
      >
        {children}
      </span>
      {resolvedLine === "after" || resolvedLine === "both" ? accent : null}
    </div>
  );
}
