import Link from "next/link";
import { LocationArea } from "@/types";

export default function LocationCard({ location }: { location: LocationArea }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group block rounded-[6px] border border-border-card bg-pure-white p-6 hover:shadow-md transition-shadow"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-champagne-gold mb-2">
        {location.region}
      </p>
      <h3 className="text-lg font-medium text-charcoal group-hover:text-rich-gold transition-colors">
        {location.name}
      </h3>
      <span className="mt-3 inline-block text-sm text-rich-gold group-hover:underline">
        Explore Properties →
      </span>
    </Link>
  );
}
