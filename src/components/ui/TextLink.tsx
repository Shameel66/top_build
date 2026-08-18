import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  showArrow = true,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-sans text-sm font-medium text-white transition-colors duration-200 hover:text-brand",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight
          className="size-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  );
}
