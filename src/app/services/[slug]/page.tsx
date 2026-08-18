import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceDetailIntro } from "@/components/sections/ServiceDetailIntro";
import { ServiceDetailCategories } from "@/components/sections/ServiceDetailCategories";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import {
  getAllServiceSlugs,
  getServiceDetail,
} from "@/data/serviceDetails";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: `${service.hero.titleBefore} ${service.hero.titleAccent}`,
    description: service.hero.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        {...service.hero}
        titleId="service-detail-hero"
        stackedTitle
        backLink={{ href: "/services", label: "Back to Services" }}
      />
      <ServiceDetailIntro content={service.intro} />
      <ServiceDetailCategories categories={service.categories} />
      <ProcessSection {...service.process} />
      <CtaBannerSection />
    </>
  );
}
