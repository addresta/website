import Link from "next/link";
import { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-[6px] border border-border-card bg-pure-white p-6 hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-medium text-charcoal group-hover:text-rich-gold transition-colors">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-slate-grey leading-relaxed">{service.summary}</p>
      <span className="mt-4 inline-block text-sm text-rich-gold group-hover:underline">Learn More →</span>
    </Link>
  );
}
