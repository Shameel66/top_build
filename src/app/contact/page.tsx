import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactInfoCard } from "@/components/ui/ContactInfoCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { contactPageContent } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact TOPBUILD for project inquiries, quotes, and construction support.",
};

export default function ContactPage() {
  const { hero, infoCards, form, assistance, map } = contactPageContent;

  return (
    <>
      <PageHero {...hero} titleId="contact-hero-heading" stackedTitle />

      <Section className="bg-surface-soft !pt-[clamp(3rem,6vw,5rem)] !pb-[clamp(2rem,4vw,3rem)]">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {infoCards.map((card, index) => (
              <Reveal
                key={card.title}
                as="li"
                variant="up"
                delay={index * 70}
                className="h-full"
              >
                <ContactInfoCard {...card} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-surface !pt-[clamp(2rem,4vw,3rem)] !pb-[clamp(3rem,6vw,5rem)]">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,35.125rem)] lg:gap-14">
            <Reveal variant="left">
              <ContactForm
                title={form.title}
                eyebrow={form.eyebrow}
                categories={form.categories}
              />
            </Reveal>

            <Reveal variant="right" delay={100} className="flex flex-col gap-5">
              <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[33.625rem]">
                <Image
                  src={assistance.image.src}
                  alt={assistance.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 562px"
                  className="object-cover"
                />
              </div>

              <div className="bg-[#12151a] px-6 py-7 text-center text-white sm:px-8 sm:py-8">
                <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                  {assistance.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-white/70">
                  {assistance.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={assistance.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2 bg-brand px-5 font-sans text-sm font-medium text-white transition-colors hover:bg-brand-hover"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call Now
                  </a>
                  <a
                    href={assistance.emailHref}
                    className="inline-flex h-12 items-center justify-center gap-2 bg-white/10 px-5 font-sans text-sm font-medium text-white transition-colors hover:bg-white/15"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Email Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section
        flush
        className="relative"
        ariaLabelledBy="map-heading"
      >
        <div className="relative h-[18rem] w-full sm:h-[22rem] md:h-[28.4375rem]">
          <iframe
            title="TOPBUILD office location map"
            src={map.embedUrl}
            className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.15)_0%,rgba(8,12,20,0.45)_100%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <Reveal variant="up">
              <div className="max-w-[26.875rem] bg-white px-8 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:px-10 sm:py-10">
                <span className="mx-auto inline-flex size-16 items-center justify-center bg-[color-mix(in_srgb,var(--color-brand)_16%,white)] text-brand">
                  <MapPin className="size-7 stroke-[1.6]" aria-hidden="true" />
                </span>
                <h2
                  id="map-heading"
                  className="mt-5 font-serif text-2xl font-semibold text-ink"
                >
                  {map.title}
                </h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base">
                  {map.address}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
