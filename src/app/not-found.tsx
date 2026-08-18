import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { notFoundContent } from "@/data/contact";

export default function NotFound() {
  const { title, description, image, primaryCta, secondaryCta } =
    notFoundContent;

  return (
    <div className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center bg-surface pt-28 pb-20 md:pt-32 md:pb-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_50%_0%,rgba(247,152,41,0.14),transparent_60%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <div className="relative h-[14rem] w-full max-w-[26.125rem] sm:h-[18rem] md:h-[22.4375rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 640px) 90vw, 418px"
              className="object-contain object-center"
            />
          </div>

          <h1 className="mt-8 font-serif text-[clamp(2rem,3.5vw,2.875rem)] leading-none font-bold text-ink">
            {title}
          </h1>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-muted">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-3.5">
            <Button href={primaryCta.href} size="lg" showArrow={false}>
              {primaryCta.label}
            </Button>
            <Button
              href={secondaryCta.href}
              size="lg"
              variant="dark"
              showArrow={false}
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
