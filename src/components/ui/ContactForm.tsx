"use client";

import { FormEvent, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";

type ContactFormProps = {
  title: string;
  eyebrow?: string;
  categories: string[];
  className?: string;
};

const fieldClass =
  "w-full border border-border bg-surface px-4 py-3.5 font-sans text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

const labelClass = "mb-2 block font-sans text-sm font-medium text-ink";

export function ContactForm({
  title,
  eyebrow = "Get in touch",
  categories,
  className,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className={cn("bg-white", className)}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="font-serif text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight font-semibold text-ink">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              placeholder="John Doe"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="category" className={labelClass}>
            Project Type
          </label>
          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className={cn(fieldClass, "bg-surface")}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
            className={cn(fieldClass, "resize-y")}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          showArrow={false}
          className="!h-[3.75rem] w-full !min-w-0"
        >
          Submit Request
        </Button>

        <p className="flex items-start gap-2 font-sans text-xs leading-relaxed text-muted">
          <ShieldCheck
            className="mt-0.5 size-3.5 shrink-0 text-brand"
            aria-hidden="true"
          />
          Your information is secure and will only be used to respond to your
          inquiry.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-brand" role="status">
            Thanks — your message has been received. We will get back to you
            soon.
          </p>
        ) : null}
      </form>
    </div>
  );
}
