import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { BlogMetaBar } from "@/components/ui/BlogMetaBar";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { getAllBlogSlugs, getBlogBySlug } from "@/data/blogs";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Section
        flush
        className="bg-surface pt-28 pb-8 md:pt-32 md:pb-10"
        ariaLabelledBy="blog-detail-heading"
      >
        <Container>
          <Reveal variant="up">
            <h1
              id="blog-detail-heading"
              className="mx-auto max-w-[56rem] text-center font-serif text-[clamp(2rem,3.7vw,3.5rem)] leading-[1.15] font-semibold tracking-[-0.01em] text-ink"
            >
              {post.title}
            </h1>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm text-muted sm:text-base">
              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  className="size-4 shrink-0 text-brand"
                  aria-hidden="true"
                />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3
                  className="size-4 shrink-0 text-brand"
                  aria-hidden="true"
                />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section
        flush
        className="bg-surface pb-6 md:pb-8"
        ariaLabelledBy="blog-detail-heading"
      >
        <Container>
          <Reveal variant="scale">
            <div className="relative aspect-[1312/592] w-full overflow-hidden">
              <Image
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1312px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <BlogMetaBar
        author={post.author}
        updated={post.updated ?? post.date}
        readTime={post.readTime}
        category={post.category}
      />

      <Section
        className="bg-surface !pt-[clamp(2rem,4vw,3rem)] !pb-[clamp(3rem,6vw,5rem)]"
        ariaLabelledBy="blog-article-heading"
      >
        <Container>
          <article className="mx-auto max-w-[52rem]">
            <h2 id="blog-article-heading" className="sr-only">
              Article
            </h2>

            {post.intro ? (
              <Reveal variant="up">
                <p className="font-sans text-[1.0625rem] leading-[1.85] text-muted sm:text-[1.125rem] sm:leading-8">
                  {post.intro}
                </p>
              </Reveal>
            ) : null}

            {post.sections.map((section, index) => (
              <Reveal
                key={section.heading}
                variant="up"
                delay={index * 60}
                className="mt-12 first:mt-10"
              >
                <section>
                  <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-tight font-semibold text-ink">
                    {section.heading}
                  </h3>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="font-sans text-[1.0625rem] leading-[1.85] text-muted sm:text-[1.125rem] sm:leading-8"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 font-sans text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]"
                        >
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}

            <Reveal variant="up" delay={120}>
              <div className="mt-14 flex flex-wrap gap-3 border-t border-border pt-10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-[#f3f3f3] px-5 py-2.5 font-sans text-sm text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </article>
        </Container>
      </Section>

      <CtaBannerSection />
    </>
  );
}
