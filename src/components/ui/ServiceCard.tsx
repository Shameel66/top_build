import Image from "next/image";
import type { ServiceItem } from "@/types/content";
import { ReadMoreLink } from "@/components/ui/ReadMoreLink";
import { cn } from "@/lib/cn";

const serviceIcons = {
  building: "/images/shared/icons/service-commercial.svg",
  home: "/images/shared/icons/service-residential.svg",
  hotel: "/images/shared/icons/service-hospitality.svg",
  development: "/images/shared/icons/service-development.svg",
  specialty: "/images/shared/icons/service-specialty.svg",
  consulting: "/images/shared/icons/service-consulting.svg",
} as const;

type ServiceCardProps = ServiceItem & {
  className?: string;
  id?: string;
};

export function ServiceCard({
  title,
  description,
  image,
  href,
  icon,
  className,
  id,
}: ServiceCardProps) {
  return (
    <article
      id={id}
      className={cn(
        "group flex h-full flex-col bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <div className="relative mx-2.5 mt-2.5 aspect-[406/288] w-[calc(100%-1.25rem)] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      </div>

      <div className="relative flex flex-1 flex-col px-[2.1875rem] pt-7 pb-9">
        <span className="relative mb-3 inline-block size-16 overflow-hidden">
          <Image
            src={serviceIcons[icon]}
            alt=""
            fill
            unoptimized
            className="object-contain object-left"
          />
        </span>

        <h3 className="font-serif text-[1.625rem] leading-[2.375rem] font-semibold text-ink">
          {title}
        </h3>

        <p className="mt-3.5 flex-1 font-sans text-base leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-7">
          <ReadMoreLink href={href} />
        </div>
      </div>
    </article>
  );
}
