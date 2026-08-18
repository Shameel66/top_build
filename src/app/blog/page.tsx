import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BlogFeatured } from "@/components/ui/BlogFeatured";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { blogList, blogsPageContent, featuredBlog } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Insights & Articles",
  description:
    "Explore expert insights, tips, and updates from our construction and development team.",
};

export default function BlogPage() {
  const remaining = blogList
    .filter((post) => post.slug !== featuredBlog.slug)
    .slice(0, 6);

  return (
    <>
      <PageHero
        {...blogsPageContent.hero}
        titleId="blog-hero-heading"
        stackedTitle
      />

      <Section
        id="featured"
        ariaLabelledBy="featured-heading"
        className="bg-surface !pt-[clamp(3rem,6vw,5rem)] !pb-[clamp(2rem,4vw,3rem)]"
      >
        <Container>
          <h2 id="featured-heading" className="sr-only">
            Featured article
          </h2>
          <Reveal variant="up">
            <BlogFeatured {...featuredBlog} />
          </Reveal>
        </Container>
      </Section>

      <Section
        id="articles"
        ariaLabelledBy="articles-heading"
        className="bg-surface !pt-[clamp(2rem,4vw,3rem)] !pb-[clamp(3.5rem,7vw,6rem)]"
      >
        <Container>
          <h2 id="articles-heading" className="sr-only">
            Latest articles
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {remaining.map((post, index) => (
              <Reveal
                key={post.slug}
                as="li"
                variant="up"
                delay={index * 80}
                className="h-full"
              >
                <BlogCard {...post} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBannerSection />
    </>
  );
}
