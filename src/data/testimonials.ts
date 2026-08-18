import type { TestimonialItem } from "@/types/content";

export const testimonialsContent = {
  eyebrow: "Client Success",
  title: "What Our Clients Say",
  items: [
    {
      quote:
        "Topbuild transformed our vision into a stunning reality. Their attention to detail, professionalism, and commitment to quality were evident in every phase of our commercial project.",
      name: "David Mike",
      role: "Independent Consultant",
      rating: 5,
      image: {
        src: "/images/testimonials/david.jpg",
        alt: "Portrait of David Mike",
      },
    },
    {
      quote:
        "From planning to final handover, the team was exceptional. Communication was clear, timelines were met, and the finished build surpassed what we imagined.",
      name: "James Carter",
      role: "Property Developer",
      rating: 5,
      image: {
        src: "/images/testimonials/consultant.jpg",
        alt: "Portrait of James Carter",
      },
    },
    {
      quote:
        "Working with Topbuild felt seamless. They handled complex requirements with confidence and delivered a space our clients love every day.",
      name: "Elena Marks",
      role: "Project Director",
      rating: 5,
      image: {
        src: "/images/testimonials/david.jpg",
        alt: "Portrait of Elena Marks",
      },
    },
    {
      quote:
        "Reliable, skilled, and genuinely invested in the outcome. Topbuild is the partner we recommend for high-end construction work.",
      name: "Michael Reed",
      role: "Operations Manager",
      rating: 5,
      image: {
        src: "/images/testimonials/consultant.jpg",
        alt: "Portrait of Michael Reed",
      },
    },
    {
      quote:
        "Every milestone was delivered with clarity and craftsmanship. Topbuild made a complex renovation feel organized and achievable.",
      name: "Sarah Collins",
      role: "Hospitality Director",
      rating: 5,
      image: {
        src: "/images/testimonials/david.jpg",
        alt: "Portrait of Sarah Collins",
      },
    },
    {
      quote:
        "Their field team and project managers stayed aligned from day one. The finished space exceeded our quality expectations.",
      name: "Daniel Brooks",
      role: "Commercial Owner",
      rating: 5,
      image: {
        src: "/images/testimonials/consultant.jpg",
        alt: "Portrait of Daniel Brooks",
      },
    },
    {
      quote:
        "We valued their honesty around schedule and budget. Topbuild protected the design intent without compromising delivery.",
      name: "Olivia Grant",
      role: "Interior Architect",
      rating: 5,
      image: {
        src: "/images/testimonials/david.jpg",
        alt: "Portrait of Olivia Grant",
      },
    },
    {
      quote:
        "A true partner throughout construction. Communication was proactive, and the final result feels premium in every detail.",
      name: "Ryan Patel",
      role: "Development Lead",
      rating: 5,
      image: {
        src: "/images/testimonials/consultant.jpg",
        alt: "Portrait of Ryan Patel",
      },
    },
  ] satisfies TestimonialItem[],
};

export const testimonialsPageContent = {
  badge: "Testimonials",
  title: "What Our Clients Say",
};

/** Alternating image sides match the Figma 2-column masonry rhythm. */
export const testimonialsPageItems = testimonialsContent.items.map(
  (item, index) => ({
    ...item,
    imagePosition: (Math.floor(index / 2) % 2 === 0 ? "right" : "left") as
      | "left"
      | "right",
  }),
);
