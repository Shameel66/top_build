import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

type GalleryItem = {
  src: string;
  alt: string;
  span?: "hero" | "wide" | "square";
};

type ProjectGallerySectionProps = {
  items: GalleryItem[];
};

function GalleryCell({
  item,
  className,
  sizes,
  variant = "up",
  delay = 0,
}: {
  item: GalleryItem;
  className?: string;
  sizes: string;
  variant?: "up" | "left" | "right";
  delay?: number;
}) {
  return (
    <Reveal
      variant={variant}
      delay={delay}
      className={cn("relative overflow-hidden", className)}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
      />
    </Reveal>
  );
}

export function ProjectGallerySection({ items }: ProjectGallerySectionProps) {
  const [hero, wideTop, wideBottom, bottomLeft, bottomCenter, bottomRight] =
    items;

  return (
    <Section
      id="gallery"
      ariaLabelledBy="gallery-heading"
      className="bg-surface !pt-[clamp(3rem,6vw,5rem)] !pb-[clamp(4rem,7vw,6.5rem)]"
    >
      <Container>
        <Reveal variant="up">
          <h2
            id="gallery-heading"
            className="text-center font-serif text-[clamp(2.25rem,3.7vw,3.5rem)] leading-none font-semibold"
          >
            <span className="text-brand">Project</span>{" "}
            <span className="text-navy">Gallery</span>
          </h2>
        </Reveal>

        <div
          className={cn(
            "mt-12 grid gap-4 sm:gap-5 lg:mt-14",
            /* Mobile: stack */
            "grid-cols-1",
            /* Desktop staggered:
               [ hero ] [ wide ]
               [ hero ] [ wide ]
               [  a   ] [  b  ] [ c ]  */
            "lg:grid-cols-3 lg:grid-rows-[minmax(12.5rem,1fr)_minmax(12.5rem,1fr)_minmax(12.5rem,auto)]",
          )}
        >
          {hero ? (
            <GalleryCell
              item={hero}
              variant="left"
              className="aspect-[4/5] lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:h-full"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          ) : null}

          {wideTop ? (
            <GalleryCell
              item={wideTop}
              variant="right"
              delay={80}
              className="aspect-[16/9] lg:col-span-2 lg:aspect-auto lg:h-full"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          ) : null}

          {wideBottom ? (
            <GalleryCell
              item={wideBottom}
              variant="right"
              delay={120}
              className="aspect-[16/9] lg:col-span-2 lg:aspect-auto lg:h-full"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          ) : null}

          {bottomLeft ? (
            <GalleryCell
              item={bottomLeft}
              variant="up"
              delay={160}
              className="aspect-[424/290] lg:aspect-auto lg:h-full lg:min-h-[12.5rem]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          ) : null}

          {bottomCenter ? (
            <GalleryCell
              item={bottomCenter}
              variant="up"
              delay={220}
              className="aspect-[424/290] lg:aspect-auto lg:h-full lg:min-h-[12.5rem]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          ) : null}

          {bottomRight ? (
            <GalleryCell
              item={bottomRight}
              variant="up"
              delay={280}
              className="aspect-[424/290] lg:aspect-auto lg:h-full lg:min-h-[12.5rem]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
