import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PropertiesListing from "@/components/PropertiesListing";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Explore Properties",
  description: "Discover curated residential, commercial and luxury real estate opportunities across Pune.",
  alternates: { canonical: "/properties" },
};

export default function PropertiesPage() {
  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Properties" }]} />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">Explore Properties</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">
        Discover curated residential, commercial and luxury real estate opportunities across Pune.
      </p>

      <div className="mt-10">
        <PropertiesListing properties={properties} />
      </div>
    </div>
  );
}
