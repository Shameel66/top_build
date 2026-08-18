import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowLine?: "before" | "after" | "both";
  title: string;
  titleId: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  eyebrowLine,
  title,
  titleId,
  description,
  align = "left",
  tone = "light",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        isCenter && "mx-auto max-w-[50.0625rem] text-center",
        className,
      )}
    >
      {eyebrow ? (
        <SectionEyebrow
          align={isCenter ? "center" : "left"}
          line={eyebrowLine}
          className="mb-[0.8125rem]"
        >
          {eyebrow}
        </SectionEyebrow>
      ) : null}

      <h2
        id={titleId}
        className={cn(
          "font-serif font-semibold tracking-[0.04em]",
          isCenter
            ? "text-[clamp(2.25rem,3.7037vw,3.5rem)] leading-[3.375rem]"
            : "text-[clamp(1.75rem,2.6455vw,2.5rem)] leading-[3.375rem]",
          tone === "light" ? "text-navy" : "text-white",
          !isCenter && "max-w-[16ch]",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-[1.125rem] font-sans text-[1.125rem] leading-[1.8125rem] font-normal",
            tone === "light" ? "text-muted/70" : "text-white/70",
            isCenter ? "mx-auto max-w-[50.0625rem]" : "max-w-[42.1875rem]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
