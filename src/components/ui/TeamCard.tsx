import Image from "next/image";
import type { TeamMember } from "@/types/content";
import { cn } from "@/lib/cn";

type TeamCardProps = TeamMember & {
  className?: string;
};

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.2h2.1V5H14.1C11.5 5 10 6.7 10 9.3V11H8v3.2h2V22h3.3v-7.8H16l.5-3.2h-3.2V9.5c0-.8.2-1.3 1.2-1.3z" />
    </svg>
  );
}

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 6.5A1.94 1.94 0 1 1 6.94 2.6a1.94 1.94 0 0 1 0 3.9zM4.75 22V8.75h4.38V22H4.75zM10.75 8.75h4.2v1.82h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.22 2.9 5.22 6.67V22h-4.38v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V22h-4.5V8.75z" />
    </svg>
  );
}

function XGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 3h4.3l5.05 7.16L18.35 3H21l-7.2 8.62L21.5 21h-4.3l-5.4-7.65L5.65 21H3l7.55-9.05L3 3z" />
    </svg>
  );
}

export function TeamCard({ name, role, image, socials, className }: TeamCardProps) {
  const links = [
    socials?.facebook
      ? { href: socials.facebook, label: "Facebook", Icon: FacebookGlyph }
      : null,
    socials?.linkedin
      ? { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInGlyph }
      : null,
    socials?.twitter
      ? { href: socials.twitter, label: "X", Icon: XGlyph }
      : null,
  ].filter(Boolean) as {
    href: string;
    label: string;
    Icon: (props: { className?: string }) => React.ReactNode;
  }[];

  return (
    <article className={cn("w-full", className)}>
      <div className="relative aspect-[318/330] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {links.length > 0 ? (
          <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-4">
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on ${label}`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/30 text-white backdrop-blur-[7px] transition-colors duration-300 hover:bg-brand hover:border-brand"
              >
                <Icon className="size-[1.125rem]" />
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center bg-white px-6 py-4 text-center">
        <h3 className="font-serif text-[1.375rem] leading-[1.875rem] font-semibold text-ink">
          {name}
        </h3>
        <p className="mt-1.5 font-sans text-xs leading-5 text-muted">{role}</p>
      </div>
    </article>
  );
}
