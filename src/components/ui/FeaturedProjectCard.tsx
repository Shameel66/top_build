import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FeaturedProject } from "@/types/content";
import { cn } from "@/lib/cn";

type FeaturedProjectCardProps = FeaturedProject & {
  className?: string;
};

export function FeaturedProjectCard({
  category,
  title,
  location,
  href,
  image,
  className,
}: FeaturedProjectCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block aspect-[16/9] w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
        className,
      )}
      style={{
        clipPath:
          "polygon(0 11%, 7.5% 0, 100% 0, 100% 78%, 88% 100%, 0 100%)",
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 72rem"
        className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_35%,rgba(0,0,0,0.72)_100%)]"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8">
        <span className="inline-flex rounded-[3px] bg-brand px-3 py-1 font-sans text-[0.7rem] font-semibold tracking-wide text-white">
          {category}
        </span>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-white sm:text-[1.85rem] md:text-[2.1rem]">
          {title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 font-sans text-sm text-white/90">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          <span>{location}</span>
        </p>
      </div>
    </Link>
  );
}
