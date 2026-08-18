import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Logo } from "@/components/shared/Logo";
import { footerContent } from "@/data/footer";

export function Footer() {
  const { newsletter, about, links, contact, copyright } = footerContent;

  return (
    <footer className="relative overflow-hidden text-white">
      <Image
        src="/images/shared/footer-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-16 pt-20 md:py-20 md:pt-24 lg:py-24 lg:pt-28">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pb-12">
          <h2 className="max-w-md font-serif text-[2.05rem] leading-[1.15] font-semibold tracking-[-0.015em] text-white sm:text-[2.35rem] md:text-[2.55rem]">
            {newsletter.title}
          </h2>
          <NewsletterForm
            placeholder={newsletter.placeholder}
            className="w-full lg:max-w-md lg:justify-self-end"
          />
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1.1fr] lg:gap-14 lg:py-14">
          <div>
            <Logo theme="light" className="text-[1.45rem]" />
            <p className="mt-5 max-w-sm font-sans text-[0.92rem] leading-relaxed text-white/80">
              {about}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.95rem] text-white/90 transition-colors duration-200 hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-white/90"
                aria-hidden="true"
              />
              <span className="font-sans text-[0.92rem] leading-relaxed text-white/90">
                {contact.address}
              </span>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-3 font-sans text-[0.92rem] text-white/90 transition-colors hover:text-brand"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.emailHref}
                className="inline-flex items-center gap-3 font-sans text-[0.92rem] text-white/90 transition-colors hover:text-brand"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t border-white/15 pt-6">
          <p className="font-sans text-sm text-white/75">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
