import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import type { BlogListItem } from "@/types/portfolio";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";

type BlogFeaturedProps = BlogListItem & {
  className?: string;
};

export function BlogFeatured({
  slug,
  title,
  excerpt,
  date,
  readTime,
  image,
  className,
}: BlogFeaturedProps) {
  return (
    <article
      className={cn(
        "grid overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] lg:grid-cols-[37.5rem_minmax(0,1fr)]",
        className,
      )}
    >
      <Link
        href={`/blog/${slug}`}
        className="relative min-h-[18rem] overflow-hidden lg:min-h-[37.75rem]"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
          priority
        />
      </Link>

      <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <SectionEyebrow>Featured articles</SectionEyebrow>

        <h2 className="mt-1 font-serif text-[clamp(1.75rem,2.6vw,2.5rem)] leading-tight font-semibold text-ink">
          <Link
            href={`/blog/${slug}`}
            className="transition-colors hover:text-brand"
          >
            {title}
          </Link>
        </h2>

        <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-8">
          {excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-brand" aria-hidden="true" />
            {date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="size-4 shrink-0 text-brand" aria-hidden="true" />
            {readTime}
          </span>
        </div>

        <div className="mt-8">
          <ReadMoreLink href={`/blog/${slug}`}>Read Article</ReadMoreLink>
        </div>
      </div>
    </article>
  );
}
