import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PropertyGrid from "@/components/PropertyGrid";
import FAQ from "@/components/FAQ";
import { locations, locationDetails } from "@/data/locations";
import { getPropertiesByLocation } from "@/data/properties";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};
  return {
    title: `Property in ${location.name}`,
    description: `Discover residential and investment opportunities in ${location.name}, Pune.`,
    alternates: { canonical: `/locations/${slug}` },
  };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const detail = locationDetails[slug];
  const properties = getPropertiesByLocation(slug);

  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.name },
        ]}
      />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">
        {detail?.heading ?? `Property in ${location.name}`}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">
        {detail?.intro ??
          `Discover residential and investment opportunities in ${location.name}, one of Pune's notable neighbourhoods.`}
      </p>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-medium text-charcoal mb-3">Why {location.name}?</h2>
          <p className="text-sm text-slate-grey leading-relaxed">
            {detail?.whyThisLocation ?? "Detailed location overview to be added by the Addresta research team."}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium text-charcoal mb-3">Connectivity</h2>
          <p className="text-sm text-slate-grey leading-relaxed">
            {detail?.connectivity ?? "Connectivity details to be added by the Addresta research team."}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium text-charcoal mb-3">Lifestyle</h2>
          <p className="text-sm text-slate-grey leading-relaxed">
            {detail?.lifestyle ?? "Lifestyle details to be added by the Addresta research team."}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium text-charcoal mb-3">Property Market</h2>
          <p className="text-sm text-slate-grey leading-relaxed">
            {detail?.propertyMarket ?? "Verified market data to be added by the Addresta research team."}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-charcoal mb-6">Featured Properties</h2>
        <PropertyGrid
          properties={properties}
          emptyMessage={`No listings in ${location.name} yet. Contact our advisors for the latest opportunities.`}
        />
      </div>

      {detail?.popularConfigurations && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6">Popular Property Types</h2>
          <div className="flex flex-wrap gap-3">
            {detail.popularConfigurations.map((config) => (
              <span
                key={config}
                className="rounded-[4px] border border-border-card px-4 py-2 text-sm text-charcoal"
              >
                {config}
              </span>
            ))}
          </div>
        </div>
      )}

      {detail?.faqs && detail.faqs.length > 0 && (
        <div className="mt-16 max-w-2xl">
          <FAQ items={detail.faqs} />
        </div>
      )}

      <div className="mt-16">
        <Link
          href={`/properties?location=${encodeURIComponent(location.name)}`}
          className="inline-flex items-center rounded-[6px] bg-charcoal px-7 py-3.5 text-sm font-semibold text-pure-white hover:bg-rich-gold transition-colors"
        >
          Explore Properties in {location.name}
        </Link>
      </div>
    </div>
  );
}
