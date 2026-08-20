import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div>
      <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">{service.title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">{service.description}</p>
      </div>
      <CTASection
        heading="Ready to get started?"
        body="Tell us what you're looking for and our advisory team will help you take the next step."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />
    </div>
  );
}
