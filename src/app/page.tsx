import Link from "next/link";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import SectionHeader from "@/components/SectionHeader";
import PropertyGrid from "@/components/PropertyGrid";
import IconFeature from "@/components/IconFeature";
import LocationCard from "@/components/LocationCard";
import DeveloperCard from "@/components/DeveloperCard";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";

import { getFeaturedProperties } from "@/data/properties";
import { locations } from "@/data/locations";
import { developers } from "@/data/developers";
import { insights } from "@/data/insights";
import { testimonials } from "@/data/testimonials";

const WHY_ADDRESTA = [
  { number: "01", title: "Curated Opportunities", description: "Only relevant properties based on your requirements." },
  { number: "02", title: "Local Market Expertise", description: "Pune-focused knowledge to help you understand locations and opportunities." },
  { number: "03", title: "Personalized Advisory", description: "Guidance based on your goals, budget and lifestyle." },
  { number: "04", title: "Developer Access", description: "Access to reputed developers and selected projects." },
  { number: "05", title: "Transparent Guidance", description: "Clear information without unnecessary pressure." },
  { number: "06", title: "End-to-End Support", description: "From property discovery to site visits and the next steps." },
];

const EXPERTISE = [
  { title: "Residential", description: "Spaces designed around how you want to live." },
  { title: "Investment", description: "Opportunities evaluated for potential and purpose." },
  { title: "Commercial", description: "Real estate solutions for business and growth." },
  { title: "Luxury", description: "Exceptional properties for exceptional requirements." },
];

const HOME_LOCATIONS = [
  "Baner", "Balewadi", "Wakad", "Tathawade", "Hinjewadi", "Ravet", "Kharadi", "Viman Nagar", "Koregaon Park",
];

const PROCESS_STEPS = [
  { number: "01", title: "Tell Us What You Need", description: "Share your location, budget and priorities." },
  { number: "02", title: "We Curate", description: "We shortlist relevant properties based on your requirements." },
  { number: "03", title: "Explore", description: "Compare properties, visit projects and ask the right questions." },
  { number: "04", title: "Decide With Confidence", description: "Move forward with informed guidance and support." },
];

export default function HomePage() {
  const featuredProperties = getFeaturedProperties().slice(0, 6);
  const homeLocations = locations.filter((l) => HOME_LOCATIONS.includes(l.name));

  return (
    <>
      <Hero
        eyebrow="Real Estate Consultants"
        heading={
          <>
            The Right Address.
            <br />
            Every Time.
          </>
        }
        body="Discover thoughtfully curated residential, luxury and commercial properties across Pune with expert guidance at every step."
        primaryCta={{ label: "Explore Properties", href: "/properties" }}
        secondaryCta={{ label: "Talk to an Advisor", href: "/contact" }}
        supportingLine="Curated properties. Clear advice. Confident decisions."
      />

      {/* Property Search */}
      <section className="relative -mt-10 lg:-mt-14 z-10">
        <div className="max-w-(--container-page) mx-auto px-6">
          <p className="sr-only">Find a Property That Fits Your Future</p>
          <PropertySearch />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-space">
        <div className="max-w-(--container-page) mx-auto px-6">
          <SectionHeader
            eyebrow="Featured"
            heading="Curated Properties"
            subheading="A handpicked selection of properties chosen for location, quality, lifestyle and long-term value."
          />
          <div className="mt-10">
            <PropertyGrid properties={featuredProperties} />
          </div>
        </div>
      </section>

      {/* Why Addresta */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <SectionHeader
            eyebrow="Why Addresta"
            heading="More Than Property. A Better Decision."
            subheading="Buying a property is one of the most important financial and personal decisions you will make. At Addresta, we go beyond simply showing properties. We understand your requirements, evaluate opportunities and help you make decisions with greater confidence."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ADDRESTA.map((item) => (
              <IconFeature key={item.number} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-space">
        <div className="max-w-(--container-page) mx-auto px-6">
          <SectionHeader eyebrow="Expertise" heading="Real Estate, With Perspective." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE.map((item) => (
              <div key={item.title} className="border-t-2 border-champagne-gold pt-4">
                <h3 className="text-lg font-medium text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-grey leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <SectionHeader
            eyebrow="Locations"
            heading="Explore Pune"
            subheading="From established neighbourhoods to Pune's fastest-growing corridors, explore opportunities across the city's most sought-after locations."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {homeLocations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/locations" className="text-sm font-medium text-rich-gold hover:underline">
              Explore All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="section-space">
        <div className="max-w-(--container-page) mx-auto px-6">
          <SectionHeader
            eyebrow="Developers"
            heading="Trusted Developer Network"
            subheading="We work with established developers and carefully selected real estate opportunities across Pune."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer) => (
              <DeveloperCard key={developer.slug} developer={developer} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/developers" className="text-sm font-medium text-rich-gold hover:underline">
              Explore Developers →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <SectionHeader eyebrow="How It Works" heading="A Simpler Way to Find Your Property" />
          <div className="mt-10">
            <ProcessSteps steps={PROCESS_STEPS} />
          </div>
        </div>
      </section>

      {/* Testimonials — hidden automatically until real testimonials are added */}
      {testimonials.length > 0 && (
        <section className="section-space">
          <div className="max-w-(--container-page) mx-auto px-6">
            <SectionHeader eyebrow="Testimonials" heading="What Our Clients Say" align="center" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.clientName} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Insights */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <SectionHeader eyebrow="Insights" heading="Ideas, Insights & Pune Real Estate" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/insights" className="text-sm font-medium text-rich-gold hover:underline">
              View All Insights →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Your Next Address Starts Here."
        body="Tell us what you're looking for and our team will help you explore the right opportunities."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/911234567890" }}
      />
    </>
  );
}
