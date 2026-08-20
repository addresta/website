import Link from "next/link";
import { Property } from "@/types";

export default function ProjectInquiryCard({ property }: { property: Property }) {
  return (
    <div className="sticky top-24 rounded-[8px] border border-border-card bg-pure-white p-6 shadow-xl shadow-charcoal/5">
      <p className="text-xs font-semibold uppercase tracking-wider text-rich-gold">{property.status}</p>
      <p className="mt-1 text-2xl font-semibold text-charcoal">{property.priceFrom}</p>

      <div className="mt-4 divide-y divide-border border-y border-border">
        {property.configurations.map((config) => (
          <div key={config.type} className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-charcoal font-medium">{config.type}</span>
            <span className="text-slate-grey">{config.area}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-[6px] bg-champagne-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-rich-gold hover:scale-[1.02] active:scale-[0.98]"
        >
          Request Price
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-[6px] border border-charcoal px-6 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-champagne-gold hover:text-rich-gold hover:scale-[1.02] active:scale-[0.98]"
        >
          Schedule Site Visit
        </Link>
      </div>

      <p className="mt-4 text-xs text-slate-grey leading-relaxed">
        Our advisory team will reach out with current pricing, availability and next steps.
      </p>
    </div>
  );
}
