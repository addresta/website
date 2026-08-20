import Link from "next/link";
import { InsightArticle } from "@/types";
import PlaceholderArt from "./PlaceholderArt";

export default function BlogCard({ article }: { article: InsightArticle }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex h-full flex-col rounded-[6px] border border-border-card bg-pure-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-champagne-gold/50 hover:shadow-xl hover:shadow-charcoal/5"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <PlaceholderArt className="w-full h-full [&>svg]:group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-rich-gold">
          {article.category}
        </span>
        <h3 className="mt-2 text-lg font-medium text-charcoal group-hover:text-rich-gold transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-slate-grey leading-relaxed line-clamp-2">{article.description}</p>
        <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-rich-gold">
          Read Article
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
