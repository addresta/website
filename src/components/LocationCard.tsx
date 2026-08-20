import Link from "next/link";
import { LocationArea } from "@/types";

export default function LocationCard({ location }: { location: LocationArea }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[6px] border border-border-card bg-pure-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-champagne-gold/50 hover:shadow-xl hover:shadow-charcoal/5"
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-champagne-gold/10 transition-all duration-300 group-hover:w-full" />
      <div className="relative flex h-full flex-col">
        <p className="text-xs font-semibold uppercase tracking-wider text-champagne-gold mb-2">
          {location.region}
        </p>
        <h3 className="text-lg font-medium text-charcoal group-hover:text-rich-gold transition-colors">
          {location.name}
        </h3>
        <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm text-rich-gold">
          Explore Properties
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
