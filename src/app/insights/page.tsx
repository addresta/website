import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Explore Pune real estate trends, property guides, investment perspectives and practical advice.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">
        Insights That Help You Decide Better
      </h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">
        Explore Pune real estate trends, property guides, investment perspectives and practical advice.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
