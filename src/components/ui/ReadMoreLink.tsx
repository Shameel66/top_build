import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ReadMoreLinkProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export function ReadMoreLink({
  href,
  className,
  children = "Read More",
}: ReadMoreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-stretch gap-1",
        className,
      )}
    >
      <span className="inline-flex size-[2.375rem] shrink-0 items-center justify-center bg-[#e4e4e4] transition-colors duration-200 group-hover:bg-[#d8d8d8]">
        <Image
          src="/images/shared/icons/read-more-arrow.svg"
          alt=""
          width={12}
          height={16}
          unoptimized
          className="h-4 w-3 rotate-[30deg]"
        />
      </span>
      <span className="inline-flex h-[2.375rem] items-center bg-gradient-to-r from-[#e4e4e4] to-[#e4e4e4]/0 px-4 font-sans text-[0.875rem] leading-[1.125rem] font-normal text-ink transition-colors duration-200">
        {children}
      </span>
    </Link>
  );
}
