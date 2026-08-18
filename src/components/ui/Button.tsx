import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost" | "dark";
type ButtonSize = "md" | "lg";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  arrowClassName?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
};

type ButtonProps = BaseProps &
  (
    | ({ href: string } & Omit<
        React.ComponentPropsWithoutRef<typeof Link>,
        "href" | "className" | "children"
      >)
    | ({ href?: undefined } & Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children"
      >)
  );

const sizeStyles: Record<ButtonSize, { main: string; arrow: string }> = {
  md: {
    main: "h-14 min-w-[11rem] px-[1.625rem] text-base font-medium",
    arrow: "size-14",
  },
  lg: {
    main: "h-14 min-w-[13.9375rem] px-[1.625rem] text-base font-medium",
    arrow: "size-14",
  },
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  ghost: "bg-transparent text-white hover:bg-white/10",
  dark: "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]",
};

export function Button({
  children,
  className,
  arrowClassName,
  variant = "primary",
  size = "md",
  showArrow = true,
  ...rest
}: ButtonProps) {
  const mainClass = cn(
    "inline-flex items-center justify-center font-sans tracking-normal transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    !showArrow && "rounded-[3px]",
    sizeStyles[size].main,
    variantStyles[variant],
    className,
  );

  const arrowClass = cn(
    "inline-flex shrink-0 items-center justify-center transition-colors duration-200",
    sizeStyles[size].arrow,
    variantStyles[variant],
    arrowClassName,
  );

  const content = (
    <>
      <span className={mainClass}>{children}</span>
      {showArrow ? (
        <span className={arrowClass} aria-hidden="true">
          <Image
            src="/images/shared/icons/arrow.svg"
            alt=""
            width={18}
            height={23}
            unoptimized
            className="h-[1.4375rem] w-[1.118rem] rotate-[30deg]"
          />
        </span>
      ) : null}
    </>
  );

  const wrapperClass = "group inline-flex items-stretch gap-1.5";

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={wrapperClass} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { type, ...buttonRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type ?? "button"} className={wrapperClass} {...buttonRest}>
      {content}
    </button>
  );
}
