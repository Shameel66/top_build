import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/cn";

const icons = {
  map: MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock3,
} as const;

type ContactInfoCardProps = {
  icon: keyof typeof icons;
  title: string;
  detail: string;
  href?: string;
  className?: string;
};

export function ContactInfoCard({
  icon,
  title,
  detail,
  href,
  className,
}: ContactInfoCardProps) {
  const Icon = icons[icon];
  const content = (
    <>
      <span className="mx-auto inline-flex size-14 items-center justify-center bg-[color-mix(in_srgb,var(--color-brand)_16%,white)] text-brand">
        <Icon className="size-6 stroke-[1.6]" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-sans text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 whitespace-pre-line font-sans text-sm leading-relaxed text-muted">
        {detail}
      </p>
    </>
  );

  return (
    <article
      className={cn(
        "flex h-full flex-col items-center bg-white px-5 py-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] sm:px-6 sm:py-7",
        className,
      )}
    >
      {href ? (
        <a href={href} className="block transition-colors hover:text-brand">
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}
