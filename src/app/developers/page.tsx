import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DeveloperCard from "@/components/DeveloperCard";
import { developers } from "@/data/developers";

export const metadata: Metadata = {
  title: "Trusted Developer Network",
  description: "Explore projects from established developers and brands shaping Pune's real estate landscape.",
  alternates: { canonical: "/developers" },
};

export default function DevelopersPage() {
  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Developers" }]} />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">Trusted Developer Network</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">
        Explore projects from established developers and brands shaping Pune&apos;s real estate landscape.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <DeveloperCard key={developer.slug} developer={developer} />
        ))}
      </div>
    </div>
  );
}
