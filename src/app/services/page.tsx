import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From finding the right home to evaluating an investment opportunity, our advisory services are designed around your goals.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">Guidance Beyond the Property</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">
        From finding the right home to evaluating an investment opportunity, our advisory services are
        designed around your goals.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
