import type { FaqCategory, FaqItem } from "@/types/content";

export type { FaqCategory };

export const faqPageContent = {
  badge: "FAQ",
  title: "Frequently Asked Questions",
  categories: [
    {
      title: "General Questions",
      items: [
        {
          question: "What services do you offer?",
          answer:
            "We provide commercial, residential, and hospitality construction, along with development support, specialty builds, and consulting from concept through completion.",
        },
        {
          question: "What areas do you currently serve?",
          answer:
            "We primarily serve Los Angeles and surrounding regions, and we evaluate select projects across Southern California based on scope and schedule.",
        },
        {
          question: "Do you handle permits and approvals?",
          answer:
            "Yes. We manage permitting, inspections, and required approvals as part of our delivery process so your project stays compliant and on track.",
        },
      ],
    },
    {
      title: "Pricing & Project Process",
      items: [
        {
          question: "How long does a typical project take?",
          answer:
            "Timelines vary by scope and complexity. A standard commercial build may take 8–12 months, while a custom luxury home can take 12–18 months. We provide a project-specific schedule during consultation.",
        },
        {
          question: "How can I get a quote for my project?",
          answer:
            "Share your project details through our contact form or request a free consultation. Our team reviews the scope and provides a clear, itemized quote with timeline guidance.",
        },
        {
          question: "How do payments and milestones work?",
          answer:
            "Projects are structured around clear milestones. We outline payment schedules, deliverables, and progress checkpoints before work begins so expectations stay aligned.",
        },
      ],
    },
  ] satisfies FaqCategory[],
};

/** Compact FAQ list used on the home page */
export const faqContent = {
  eyebrow: "Got Questions?",
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about our construction process, services, and how we work with our clients.",
  items: [
    ...faqPageContent.categories[0].items.slice(0, 2),
    ...faqPageContent.categories[1].items.slice(0, 3),
  ] satisfies FaqItem[],
};
