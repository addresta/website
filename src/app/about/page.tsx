import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import IconFeature from "@/components/IconFeature";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Addresta is a Pune-based real estate consultancy focused on helping individuals, families, investors and businesses discover the right property opportunities.",
  alternates: { canonical: "/about" },
};

const WHY_ADDRESTA = [
  { number: "01", title: "Curated Opportunities", description: "Only relevant properties based on your requirements." },
  { number: "02", title: "Local Market Expertise", description: "Pune-focused knowledge to help you understand locations and opportunities." },
  { number: "03", title: "Personalized Advisory", description: "Guidance based on your goals, budget and lifestyle." },
  { number: "04", title: "Developer Access", description: "Access to reputed developers and selected projects." },
  { number: "05", title: "Transparent Guidance", description: "Clear information without unnecessary pressure." },
  { number: "06", title: "End-to-End Support", description: "From property discovery to site visits and the next steps." },
];

const PHILOSOPHY = [
  { title: "Listen", description: "Understand what matters to you." },
  { title: "Curate", description: "Filter the market around your requirements." },
  { title: "Guide", description: "Help you move forward with clarity." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-charcoal text-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6 py-16 lg:py-24">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold max-w-2xl">
            Real Estate Advice, Built Around You.
          </h1>
          <p className="mt-6 text-silver max-w-xl leading-relaxed">
            Addresta is a Pune-based real estate consultancy focused on helping individuals, families,
            investors and businesses discover the right property opportunities.
          </p>
        </div>
      </section>

      <div className="max-w-(--container-page) mx-auto px-6 py-16 space-y-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Who We Are</h2>
          <p className="text-base text-slate-grey leading-relaxed">
            Real estate is not simply about square feet, amenities or price. It is about location, timing,
            lifestyle, opportunity and long-term value.
          </p>
          <p className="mt-4 text-base text-slate-grey leading-relaxed">
            Addresta brings these factors together to make the property discovery process more informed,
            transparent and personal.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-8">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((item) => (
              <div key={item.title} className="border-t-2 border-champagne-gold pt-4">
                <h3 className="text-lg font-medium text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-grey leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-8">Why Addresta</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ADDRESTA.map((item) => (
              <IconFeature key={item.number} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Our Team</h2>
          <p className="text-sm text-slate-grey leading-relaxed max-w-2xl">
            Team profiles to be added — photo, name, role and short bio for each team member.
          </p>
        </div>
      </div>

      <CTASection
        heading="Speak With Our Team"
        body="Tell us what you're looking for and our team will help you explore the right opportunities."
        primaryCta={{ label: "Speak With Our Team", href: "/contact" }}
      />
    </div>
  );
}
