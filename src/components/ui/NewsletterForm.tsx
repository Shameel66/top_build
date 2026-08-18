"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type NewsletterFormProps = {
  placeholder?: string;
  className?: string;
};

export function NewsletterForm({
  placeholder = "Your Email",
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md items-stretch gap-2.5"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => {
            setSubmitted(false);
            setEmail(event.target.value);
          }}
          placeholder={placeholder}
          className="h-12 min-w-0 flex-1 rounded-[2px] border border-white/35 bg-white/10 px-4 font-sans text-sm text-white placeholder:text-white/70 outline-none transition-colors focus:border-white/70 focus:bg-white/15"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="inline-flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-[2px] border border-white/35 bg-transparent text-white transition-colors duration-200 hover:border-white/70 hover:bg-white/10"
        >
          <ArrowUpRight className="size-5 stroke-[2]" aria-hidden="true" />
        </button>
      </form>
      {submitted ? (
        <p className="mt-2 font-sans text-xs text-white/80" role="status">
          Thanks for subscribing.
        </p>
      ) : null}
    </div>
  );
}
