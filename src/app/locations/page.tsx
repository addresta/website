import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationCard from "@/components/LocationCard";
import { locationsByRegion } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations in Pune",
  description:
    "Discover residential and investment opportunities across Pune's established neighbourhoods and emerging growth corridors.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">
        Explore Pune&apos;s Property Hotspots
      </h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">
        Discover residential and investment opportunities across Pune&apos;s established neighbourhoods and
        emerging growth corridors.
      </p>

      {Object.entries(locationsByRegion).map(([region, areas]) => (
        <div key={region} className="mt-14">
          <h2 className="text-2xl font-semibold text-charcoal mb-6">{region}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <LocationCard key={area.slug} location={area} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
