import { cn } from "@/lib/cn";

type HighlightItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function HighlightItem({ children, className }: HighlightItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border border-white/15 bg-[#1c2128] px-4 py-3.5 sm:px-5 sm:py-4",
        className,
      )}
    >
      <span
        className="size-1.5 shrink-0 rounded-full bg-[#f7f6f3]"
        aria-hidden="true"
      />
      <p className="font-sans text-[0.9rem] leading-snug text-[#f7f6f3]/90 sm:text-[0.95rem]">
        {children}
      </p>
    </div>
  );
}
