import Link from "next/link";
import { Property } from "@/types";
import { locations } from "@/data/locations";
import { developers } from "@/data/developers";

export default function PropertyCard({ property }: { property: Property }) {
  const location = locations.find((l) => l.slug === property.locationSlug);
  const developer = developers.find((d) => d.slug === property.developerSlug);
  const primaryConfig = property.configurations.map((c) => c.type).join(" / ");

  return (
    <Link
      href={`/projects/${property.slug}`}
      className="group block rounded-[6px] border border-border-card bg-pure-white overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] bg-silver/20 flex items-center justify-center text-xs text-slate-grey">
        {property.images[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover" />
        ) : (
          "Image coming soon"
        )}
      </div>
      <div className="p-5">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-rich-gold border border-champagne-gold/40 rounded-[4px] px-2 py-0.5 mb-3">
          {property.status}
        </span>
        <h3 className="text-lg font-medium text-charcoal group-hover:text-rich-gold transition-colors">
          {property.name}
        </h3>
        <p className="text-sm text-slate-grey mt-1">
          {location?.name ?? property.locationSlug}, {property.city}
        </p>
        <p className="text-sm text-slate-grey mt-1">{primaryConfig}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-charcoal">{property.priceFrom}</p>
          {developer && <p className="text-xs text-slate-grey">{developer.name}</p>}
        </div>
        <span className="mt-4 inline-block text-sm font-medium text-rich-gold group-hover:underline">
          View Property →
        </span>
      </div>
    </Link>
  );
}
