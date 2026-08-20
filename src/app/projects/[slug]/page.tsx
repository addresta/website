import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectInquiryCard from "@/components/ProjectInquiryCard";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { properties, getPropertyBySlug } from "@/data/properties";
import { locations } from "@/data/locations";
import { developers } from "@/data/developers";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: property.name,
    description: property.description,
    alternates: { canonical: `/projects/${property.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const location = locations.find((l) => l.slug === property.locationSlug);
  const developer = developers.find((d) => d.slug === property.developerSlug);

  return (
    <div>
      <div className="max-w-(--container-page) mx-auto px-6 pt-8 md:pt-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Properties", href: "/properties" },
            { label: property.name },
          ]}
        />
        <div className="mt-4 flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-charcoal">{property.name}</h1>
            <p className="mt-2 text-sm md:text-base text-slate-grey">
              {location?.name ?? property.locationSlug}, {property.city} &middot;{" "}
              {property.configurations.map((c) => c.type).join(" / ")}
            </p>
          </div>
          <span className="mt-1 inline-block text-[11px] font-semibold uppercase tracking-wider text-rich-gold border border-champagne-gold/40 rounded-[4px] px-2.5 py-1">
            {property.status}
          </span>
        </div>
      </div>

      <div className="max-w-(--container-page) mx-auto px-6 mt-6">
        <ProjectGallery images={property.images} alt={property.name} />
      </div>

      <div className="max-w-(--container-page) mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2 space-y-14">
          <ProjectOverview property={property} />

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">Amenities</h2>
            <AmenitiesGrid amenities={property.amenities} />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">Location</h2>
            <p className="text-sm text-slate-grey leading-relaxed">
              Located in {location?.name ?? property.locationSlug}, {property.city}, with access to schools,
              hospitals, IT hubs, shopping and transport nearby. Detailed nearby-landmark information to be
              added once verified.
            </p>
          </div>

          {developer && (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">Developer</h2>
              <Link
                href={`/developers/${developer.slug}`}
                className="inline-block rounded-[6px] border border-border-card bg-pure-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-champagne-gold/50 hover:shadow-xl hover:shadow-charcoal/5"
              >
                <p className="font-medium text-charcoal">{developer.name}</p>
                <p className="mt-2 text-sm text-slate-grey max-w-xl">{developer.description}</p>
              </Link>
            </div>
          )}

          {property.faqs && property.faqs.length > 0 && <FAQ items={property.faqs} />}
        </div>

        <div className="lg:col-span-1">
          <ProjectInquiryCard property={property} />
        </div>
      </div>

      <CTASection
        heading="Interested in this property?"
        body="Talk to our property advisors for pricing, availability and site visit assistance."
        primaryCta={{ label: "Request Details", href: "/contact" }}
        secondaryCta={{ label: "Schedule Site Visit", href: "/contact" }}
      />
    </div>
  );
}
