import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import type { BlogListItem } from "@/types/portfolio";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";
import { cn } from "@/lib/cn";

type BlogCardProps = BlogListItem & {
  className?: string;
};

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  image,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <Link
        href={`/blog/${slug}`}
        className="relative mx-2.5 mt-2.5 aspect-[406/288] w-[calc(100%-1.25rem)] overflow-hidden"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      </Link>

      <div className="relative flex flex-1 flex-col px-[2.1875rem] pt-7 pb-9">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-brand" aria-hidden="true" />
            {date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="size-4 shrink-0 text-brand" aria-hidden="true" />
            {readTime}
          </span>
        </div>

        <h3 className="mt-4 font-serif text-[1.625rem] leading-[2.375rem] font-semibold text-ink">
          <Link
            href={`/blog/${slug}`}
            className="transition-colors hover:text-brand"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-3.5 flex-1 font-sans text-base leading-relaxed text-muted">
          {excerpt}
        </p>

        <div className="mt-7">
          <ReadMoreLink href={`/blog/${slug}`} />
        </div>
      </div>
    </article>
  );
}
