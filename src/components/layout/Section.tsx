import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
  /** Skip default vertical padding (hero, etc.) */
  flush?: boolean;
};

export function Section({
  children,
  className,
  id,
  ariaLabelledBy,
  flush = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full",
        !flush && "py-[clamp(4rem,6.5vw,6.5rem)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
