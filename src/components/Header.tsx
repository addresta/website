"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import { locationsByRegion } from "@/data/locations";

const NAV_ITEMS: { label: string; href: string; menu?: "properties" | "locations" | "services" }[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties", menu: "properties" },
  { label: "Locations", href: "/locations", menu: "locations" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Developers", href: "/developers" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
];

const PROPERTIES_MENU = [
  {
    heading: "Properties",
    links: [
      { label: "All Properties", href: "/properties" },
      { label: "Residential", href: "/properties/residential" },
      { label: "Commercial", href: "/properties/commercial" },
      { label: "Luxury Properties", href: "/properties/luxury" },
      { label: "New Launches", href: "/properties/new-launches" },
    ],
  },
];

const SERVICES_MENU = [
  {
    heading: "Advisory Services",
    links: [
      { label: "Property Buying Advisory", href: "/services/property-buying-advisory" },
      { label: "Property Selling", href: "/services/property-selling" },
      { label: "Investment Advisory", href: "/services/investment-advisory" },
      { label: "Luxury Property Advisory", href: "/services/luxury-property-advisory" },
      { label: "Commercial Real Estate", href: "/services/commercial-real-estate" },
      { label: "NRI Property Assistance", href: "/services/nri-property-assistance" },
    ],
  },
];

function locationsMenu() {
  return [
    {
      heading: "West Pune",
      links: locationsByRegion["West Pune"].map((l) => ({ label: l.name, href: `/locations/${l.slug}` })),
    },
    {
      heading: "East Pune",
      links: locationsByRegion["East Pune"].map((l) => ({ label: l.name, href: `/locations/${l.slug}` })),
    },
    {
      heading: "Central Pune",
      links: locationsByRegion["Central Pune"].map((l) => ({ label: l.name, href: `/locations/${l.slug}` })),
    },
  ];
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-warm-white transition-[box-shadow,border-color] duration-300 ${
        scrolled ? "bg-pure-white shadow-sm border-b border-champagne-gold/30" : "border-b border-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        className={`max-w-(--container-page) mx-auto px-6 flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/addresta-logo.png"
            alt="Addresta — Real Estate Consultants"
            width={220}
            height={72}
            priority
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-10 lg:h-11" : "h-12 lg:h-14"}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} onMouseEnter={() => setOpenMenu(item.menu ?? null)}>
              <Link
                href={item.href}
                className="link-underline text-sm font-medium text-charcoal hover:text-rich-gold transition-colors py-2"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+911234567890" className="link-underline text-sm font-medium text-charcoal hover:text-rich-gold">
            Call Us
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[6px] bg-charcoal px-5 py-2.5 text-sm font-semibold text-pure-white transition-all duration-200 hover:bg-rich-gold hover:scale-[1.03] active:scale-[0.98]"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {openMenu === "properties" && (
        <div className="menu-in">
          <MegaMenu columns={PROPERTIES_MENU} footerLink={{ label: "View All Properties", href: "/properties" }} />
        </div>
      )}
      {openMenu === "locations" && (
        <div className="menu-in">
          <MegaMenu columns={locationsMenu()} footerLink={{ label: "View All Locations", href: "/locations" }} />
        </div>
      )}
      {openMenu === "services" && (
        <div className="menu-in">
          <MegaMenu columns={SERVICES_MENU} />
        </div>
      )}

      <div
        className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-border bg-pure-white">
          <nav className="px-6 py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>
              Home
            </MobileNavLink>
            <MobileGroup label="Properties">
              <MobileNavLink href="/properties" onClick={() => setMobileOpen(false)}>All Properties</MobileNavLink>
              <MobileNavLink href="/properties/residential" onClick={() => setMobileOpen(false)}>Residential</MobileNavLink>
              <MobileNavLink href="/properties/commercial" onClick={() => setMobileOpen(false)}>Commercial</MobileNavLink>
              <MobileNavLink href="/properties/luxury" onClick={() => setMobileOpen(false)}>Luxury</MobileNavLink>
              <MobileNavLink href="/properties/new-launches" onClick={() => setMobileOpen(false)}>New Launches</MobileNavLink>
            </MobileGroup>
            <MobileGroup label="Locations">
              <MobileNavLink href="/locations" onClick={() => setMobileOpen(false)}>Pune</MobileNavLink>
              <MobileNavLink href="/locations?region=West+Pune" onClick={() => setMobileOpen(false)}>West Pune</MobileNavLink>
              <MobileNavLink href="/locations?region=East+Pune" onClick={() => setMobileOpen(false)}>East Pune</MobileNavLink>
              <MobileNavLink href="/locations?region=Central+Pune" onClick={() => setMobileOpen(false)}>Central Pune</MobileNavLink>
            </MobileGroup>
            <MobileGroup label="Services">
              <MobileNavLink href="/services/property-buying-advisory" onClick={() => setMobileOpen(false)}>Buying Advisory</MobileNavLink>
              <MobileNavLink href="/services/property-selling" onClick={() => setMobileOpen(false)}>Selling</MobileNavLink>
              <MobileNavLink href="/services/investment-advisory" onClick={() => setMobileOpen(false)}>Investment</MobileNavLink>
              <MobileNavLink href="/services/commercial-real-estate" onClick={() => setMobileOpen(false)}>Commercial</MobileNavLink>
            </MobileGroup>
            <MobileNavLink href="/developers" onClick={() => setMobileOpen(false)}>Developers</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/insights" onClick={() => setMobileOpen(false)}>Insights</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileNavLink>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-[6px] bg-charcoal px-5 py-3 text-sm font-semibold text-pure-white"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} onClick={onClick} className="py-2 text-sm text-charcoal">
      {children}
    </Link>
  );
}

function MobileGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-2 mt-2 first:border-t-0 first:pt-0 first:mt-0">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-grey py-1">{label}</p>
      <div className="flex flex-col pl-2">{children}</div>
    </div>
  );
}
