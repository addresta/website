import Link from "next/link";
import { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-[6px] border border-border-card bg-pure-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-champagne-gold/50 hover:shadow-xl hover:shadow-charcoal/5"
    >
      <h3 className="text-lg font-medium text-charcoal group-hover:text-rich-gold transition-colors">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-slate-grey leading-relaxed">{service.summary}</p>
      <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-rich-gold">
        Learn More
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
