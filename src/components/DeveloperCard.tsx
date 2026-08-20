import Link from "next/link";
import { Developer } from "@/types";

export default function DeveloperCard({ developer }: { developer: Developer }) {
  return (
    <Link
      href={`/developers/${developer.slug}`}
      className="group block rounded-[6px] border border-border-card bg-pure-white p-6 hover:shadow-md transition-shadow"
    >
      <div className="h-12 flex items-center mb-4 text-sm font-semibold text-slate-grey">
        {developer.name}
      </div>
      <p className="text-sm text-slate-grey leading-relaxed line-clamp-3">{developer.description}</p>
      <p className="mt-4 text-xs text-slate-grey">{developer.projectCount} Projects</p>
      <span className="mt-3 inline-block text-sm text-rich-gold group-hover:underline">
        View Developer →
      </span>
    </Link>
  );
}
