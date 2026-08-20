import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectOverview from "@/components/ProjectOverview";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import Gallery from "@/components/Gallery";
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
      <section className="bg-charcoal text-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6 py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Properties", href: "/properties" },
              { label: property.name },
            ]}
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold">{property.name}</h1>
          <p className="mt-3 text-silver">
            {location?.name ?? property.locationSlug}, {property.city}
          </p>
          <p className="mt-1 text-champagne-gold font-medium">
            {property.configurations.map((c) => c.type).join(" / ")} &middot; {property.priceFrom}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[6px] bg-champagne-gold px-7 py-3.5 text-sm font-semibold text-charcoal hover:bg-rich-gold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Request Price
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[6px] border border-warm-white/40 px-7 py-3.5 text-sm font-semibold text-warm-white hover:border-champagne-gold hover:text-champagne-gold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-(--container-page) mx-auto px-6 py-14 space-y-16">
        <ProjectOverview property={property} />

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">Amenities</h2>
          <AmenitiesGrid amenities={property.amenities} />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">Location</h2>
          <p className="text-sm text-slate-grey leading-relaxed max-w-2xl">
            Located in {location?.name ?? property.locationSlug}, {property.city}, with access to schools,
            hospitals, IT hubs, shopping and transport nearby. Detailed nearby-landmark information to be
            added once verified.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">Gallery</h2>
          <Gallery images={property.images} alt={property.name} />
        </div>

        {developer && (
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">Developer</h2>
            <Link
              href={`/developers/${developer.slug}`}
              className="inline-block rounded-[6px] border border-border-card bg-pure-white p-6 hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-charcoal">{developer.name}</p>
              <p className="mt-2 text-sm text-slate-grey max-w-xl">{developer.description}</p>
            </Link>
          </div>
        )}

        {property.faqs && property.faqs.length > 0 && <FAQ items={property.faqs} />}
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
