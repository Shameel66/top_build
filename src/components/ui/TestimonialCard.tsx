import Image from "next/image";
import { Star } from "lucide-react";
import type { TestimonialItem } from "@/types/content";
import { cn } from "@/lib/cn";

type TestimonialCardProps = TestimonialItem & {
  className?: string;
  imagePosition?: "left" | "right";
};

export function TestimonialCard({
  quote,
  name,
  role,
  rating,
  image,
  className,
  imagePosition = "right",
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "grid h-full min-h-[19.1875rem] overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] sm:grid-cols-[minmax(0,1.32fr)_minmax(0,1fr)]",
        imagePosition === "left" && "sm:grid-cols-[minmax(0,1fr)_minmax(0,1.32fr)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col px-5 py-7 sm:px-6 sm:py-8",
          imagePosition === "left" && "sm:order-2",
        )}
      >
        <div
          className="mb-4 flex shrink-0 items-center gap-1"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              className="size-3.5 fill-brand text-brand"
              aria-hidden="true"
            />
          ))}
        </div>

        <p className="flex-1 font-sans text-[0.95rem] leading-relaxed text-muted sm:leading-[1.75]">
          &ldquo;{quote.replace(/^"|"$/g, "")}&rdquo;
        </p>

        <div className="mt-6 shrink-0">
          <p className="font-serif text-lg font-semibold text-ink">{name}</p>
          <p className="mt-1 font-sans text-sm text-muted">{role}</p>
        </div>
      </div>

      <div
        className={cn(
          "relative min-h-[14rem] overflow-hidden sm:min-h-full",
          imagePosition === "left" && "sm:order-1",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 280px"
          className="object-cover object-top"
        />
      </div>
    </article>
  );
}
