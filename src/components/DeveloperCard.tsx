import Link from "next/link";
import { Developer } from "@/types";

export default function DeveloperCard({ developer }: { developer: Developer }) {
  return (
    <Link
      href={`/developers/${developer.slug}`}
      className="group block rounded-[6px] border border-border-card bg-pure-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-champagne-gold/50 hover:shadow-xl hover:shadow-charcoal/5"
    >
      <div className="h-12 flex items-center mb-4 text-sm font-semibold text-slate-grey">
        {developer.name}
      </div>
      <p className="text-sm text-slate-grey leading-relaxed line-clamp-3">{developer.description}</p>
      <p className="mt-4 text-xs text-slate-grey">{developer.projectCount} Projects</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-rich-gold">
        View Developer
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
