import Image from "next/image";
import Link from "next/link";
import type { ProjectListItem } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type ProjectCardProps = ProjectListItem & {
  className?: string;
};

export function ProjectCard({
  slug,
  title,
  district,
  location,
  year,
  image,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        "group relative block aspect-[646/447] w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/40"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col justify-between px-8 py-[1.875rem] sm:px-10">
        <div className="flex flex-wrap gap-2.5">
          <span className="bg-white/30 px-2.5 font-sans text-sm font-medium leading-9 tracking-[0.04em] text-white backdrop-blur-[17px]">
            {year}
          </span>
          <span className="bg-white/30 px-2.5 font-sans text-sm font-medium leading-9 tracking-[0.04em] text-white backdrop-blur-[17px]">
            {location}
          </span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-[1.625rem] leading-9 font-semibold tracking-[0.04em] text-white">
              {title}
            </h3>
            <p className="mt-0.5 font-sans text-lg font-medium leading-9 tracking-[0.04em] text-[#fafafa]">
              {district}
            </p>
          </div>
          <span
            className="relative mb-2 size-7 shrink-0 overflow-hidden transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          >
            <Image
              src="/images/shared/icons/project-arrow.svg"
              alt=""
              fill
              unoptimized
              className="object-contain"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
