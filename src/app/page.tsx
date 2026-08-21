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
import Reveal from "@/components/Reveal";

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

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-medium text-rich-gold">
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

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
        backgroundImage="/images/villa-exterior-twilight.jpg"
      />

      {/* Property Search — overlaps the hero */}
      <section className="relative -mt-24 lg:-mt-20 z-10">
        <div className="max-w-(--container-page) mx-auto px-6">
          <p className="sr-only">Find a Property That Fits Your Future</p>
          <Reveal>
            <PropertySearch />
          </Reveal>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-space">
        <div className="max-w-(--container-page) mx-auto px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Featured"
              heading="Curated Properties"
              subheading="A handpicked selection of properties chosen for location, quality, lifestyle and long-term value."
            />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <PropertyGrid properties={featuredProperties} />
          </Reveal>
        </div>
      </section>

      {/* Why Addresta */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Why Addresta"
              heading="More Than Property. A Better Decision."
              subheading="Buying a property is one of the most important financial and personal decisions you will make. At Addresta, we go beyond simply showing properties. We understand your requirements, evaluate opportunities and help you make decisions with greater confidence."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ADDRESTA.map((item, i) => (
              <Reveal key={item.number} delay={i * 60}>
                <IconFeature {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-space">
        <div className="max-w-(--container-page) mx-auto px-6">
          <Reveal>
            <SectionHeader eyebrow="Expertise" heading="Real Estate, With Perspective." />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="group border-t-2 border-champagne-gold pt-4 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-medium text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-grey leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Locations"
              heading="Explore Pune"
              subheading="From established neighbourhoods to Pune's fastest-growing corridors, explore opportunities across the city's most sought-after locations."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {homeLocations.map((location, i) => (
              <Reveal key={location.slug} delay={i * 40}>
                <LocationCard location={location} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ArrowLink href="/locations">Explore All Locations</ArrowLink>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="section-space">
        <div className="max-w-(--container-page) mx-auto px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Developers"
              heading="Trusted Developer Network"
              subheading="We work with established developers and carefully selected real estate opportunities across Pune."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer, i) => (
              <Reveal key={developer.slug} delay={i * 60}>
                <DeveloperCard developer={developer} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ArrowLink href="/developers">Explore Developers</ArrowLink>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <Reveal>
            <SectionHeader eyebrow="How It Works" heading="A Simpler Way to Find Your Property" />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <ProcessSteps steps={PROCESS_STEPS} />
          </Reveal>
        </div>
      </section>

      {/* Testimonials — hidden automatically until real testimonials are added */}
      {testimonials.length > 0 && (
        <section className="section-space">
          <div className="max-w-(--container-page) mx-auto px-6">
            <Reveal>
              <SectionHeader eyebrow="Testimonials" heading="What Our Clients Say" align="center" />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={t.clientName} delay={i * 80}>
                  <TestimonialCard testimonial={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Insights */}
      <section className="section-space bg-warm-white">
        <div className="max-w-(--container-page) mx-auto px-6">
          <Reveal>
            <SectionHeader eyebrow="Insights" heading="Ideas, Insights & Pune Real Estate" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((article, i) => (
              <Reveal key={article.slug} delay={i * 60}>
                <BlogCard article={article} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ArrowLink href="/insights">View All Insights</ArrowLink>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Your Next Address Starts Here."
        body="Tell us what you're looking for and our team will help you explore the right opportunities."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/917775963754" }}
      />
    </>
  );
}
