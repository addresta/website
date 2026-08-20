import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import PlaceholderArt from "@/components/PlaceholderArt";
import { insights, getArticleBySlug } from "@/data/insights";

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = insights.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div>
      <div className="max-w-3xl mx-auto px-6 py-10 lg:py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: article.title },
          ]}
        />
        <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-wider text-rich-gold">
          {article.category}
        </span>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-charcoal">{article.title}</h1>
        <p className="mt-3 text-sm text-slate-grey">
          {article.author} &middot; {new Date(article.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <PlaceholderArt label="Hero image coming soon" className="mt-8 aspect-video rounded-[6px] border border-border-card" />

        <div className="mt-10 prose-content text-base text-charcoal leading-relaxed space-y-4">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {article.keyTakeaways.length > 0 && (
          <div className="mt-10 rounded-[6px] border border-champagne-gold/30 bg-warm-white p-6">
            <h2 className="text-lg font-medium text-charcoal mb-3">Key Takeaways</h2>
            <ul className="space-y-2">
              {article.keyTakeaways.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-slate-grey">
                  <span className="text-champagne-gold" aria-hidden>✦</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {related.length > 0 && (
        <div className="max-w-(--container-page) mx-auto px-6 pb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((a) => (
              <BlogCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}

      <CTASection
        heading="Have questions about this topic?"
        body="Talk to our advisory team for guidance tailored to your requirements."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />
    </div>
  );
}
