import type { Metadata } from "next";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell us what you're looking for and our team will help you explore the right opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-(--container-page) mx-auto px-6 py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-charcoal">
        Let&apos;s Find Your Right Address.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-slate-grey leading-relaxed">
        Tell us what you&apos;re looking for and our team will help you explore the right opportunities.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-champagne-gold mb-3">
            Contact Information
          </h2>
          <p className="text-sm text-slate-grey">Pune, Maharashtra</p>
          <p className="mt-2 text-sm text-slate-grey">
            <a href="tel:+917775963754" className="hover:text-rich-gold">+91 77759 63754</a>
          </p>
          <p className="mt-2 text-sm text-slate-grey">
            <a href="mailto:info@addresta.com" className="hover:text-rich-gold">info@addresta.com</a>
          </p>
          <p className="mt-2 text-sm text-slate-grey">
            <a href="https://wa.me/917775963754" target="_blank" rel="noopener noreferrer" className="hover:text-rich-gold">
              WhatsApp Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
