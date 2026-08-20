import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PropertyGrid from "@/components/PropertyGrid";
import CTASection from "@/components/CTASection";
import { developers } from "@/data/developers";
import { getPropertiesByDeveloper } from "@/data/properties";

export function generateStaticParams() {
  return developers.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const developer = developers.find((d) => d.slug === slug);
  if (!developer) return {};
  return {
    title: developer.name,
    description: developer.description,
    alternates: { canonical: `/developers/${slug}` },
  };
}

export default async function DeveloperDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const developer = developers.find((d) => d.slug === slug);
  if (!developer) notFound();

  const projects = getPropertiesByDeveloper(slug);

  return (
    <div>
      <section className="bg-charcoal text-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6 py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Developers", href: "/developers" },
              { label: developer.name },
            ]}
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold">{developer.name}</h1>
          <p className="mt-3 text-silver max-w-2xl">{developer.description}</p>
        </div>
      </section>

      <div className="max-w-(--container-page) mx-auto px-6 py-14 space-y-14">
        <div>
          <h2 className="text-2xl font-semibold text-charcoal mb-4">About {developer.name}</h2>
          <p className="text-sm text-slate-grey leading-relaxed max-w-2xl">{developer.description}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-charcoal mb-6">Projects in Pune</h2>
          <PropertyGrid
            properties={projects}
            emptyMessage={`No listed projects for ${developer.name} yet. Contact our advisors for the latest availability.`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-charcoal mb-4">Key Strengths</h2>
          <div className="flex flex-wrap gap-3">
            {developer.keyStrengths.map((strength) => (
              <span key={strength} className="rounded-[4px] border border-border-card px-4 py-2 text-sm text-charcoal">
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-charcoal mb-4">Location Presence</h2>
          <div className="flex flex-wrap gap-3">
            {developer.locations.map((location) => (
              <span key={location} className="rounded-[4px] border border-border-card px-4 py-2 text-sm text-charcoal">
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        heading={`Interested in ${developer.name} projects?`}
        body="Talk to our advisors for pricing, availability and site visit assistance."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />
    </div>
  );
}
