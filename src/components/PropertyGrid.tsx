import { Property } from "@/types";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties, emptyMessage }: { properties: Property[]; emptyMessage?: string }) {
  if (!properties.length) {
    return (
      <p className="text-sm text-slate-grey py-12 text-center">
        {emptyMessage ?? "No properties match your criteria yet. Please check back soon or contact our advisors."}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.slug} property={property} />
      ))}
    </div>
  );
}
