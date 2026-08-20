import Link from "next/link";
import { InsightArticle } from "@/types";

export default function BlogCard({ article }: { article: InsightArticle }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group block rounded-[6px] border border-border-card bg-pure-white overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/10] bg-silver/20 flex items-center justify-center text-xs text-slate-grey">
        Image coming soon
      </div>
      <div className="p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-rich-gold">
          {article.category}
        </span>
        <h3 className="mt-2 text-lg font-medium text-charcoal group-hover:text-rich-gold transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-slate-grey leading-relaxed line-clamp-2">{article.description}</p>
        <span className="mt-4 inline-block text-sm text-rich-gold group-hover:underline">Read Article →</span>
      </div>
    </Link>
  );
}
