import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PropertiesListing from "@/components/PropertiesListing";
import { properties } from "@/data/properties";
import { Property } from "@/types";

const CATEGORIES: Record<
  string,
  { label: string; description: string; filter: (p: Property) => boolean }
> = {
  residential: {
    label: "Residential",
    description: "Curated residential properties across Pune's most sought-after neighbourhoods.",
    filter: (p) => p.propertyType === "Residential",
  },
  commercial: {
    label: "Commercial",
    description: "Commercial real estate opportunities for businesses, investors and occupiers.",
    filter: (p) => p.propertyType === "Commercial",
  },
  luxury: {
    label: "Luxury Properties",
    description: "Exceptional, carefully selected premium and luxury properties.",
    filter: (p) => p.propertyType === "Luxury",
  },
  "new-launches": {
    label: "New Launches",
    description: "The latest project launches across Pune, curated by Addresta.",
    filter: (p) => p.status === "New Launch",
  },
};

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = CATEGORIES[params.category];
  if (!category) return {};
  return {
    title: category.label,
    description: category.description,
    alternates: { canonical: `/properties/${params.category}` },
  };
}

export default async function PropertyCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = CATEGORIES[categorySlug];
  if (!category) notFound();

  const filtered = properties.filter(category.filter);

  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Properties", href: "/properties" },
          { label: category.label },
        ]}
      />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">{category.label}</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">{category.description}</p>

      <div className="mt-10">
        <PropertiesListing properties={filtered} />
      </div>
    </div>
  );
}
