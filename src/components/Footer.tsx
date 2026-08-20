import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-(--container-page) mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-heading text-2xl tracking-wide">ADDRESTA</p>
          <p className="mt-2 text-sm text-champagne-gold">The Right Address. Every Time.</p>
          <p className="mt-4 text-sm text-silver leading-relaxed">
            Pune-based real estate consultants helping clients discover better property
            opportunities through curated recommendations and personalized guidance.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href="tel:+917775963750" className="block text-silver hover:text-champagne-gold transition-colors">
              +91 77759 63750
            </a>
            <a href="mailto:info@addresta.com" className="block text-silver hover:text-champagne-gold transition-colors">
              info@addresta.com
            </a>
          </div>
        </div>

        <FooterColumn
          heading="Properties"
          links={[
            { label: "Residential", href: "/properties/residential" },
            { label: "Commercial", href: "/properties/commercial" },
            { label: "Luxury", href: "/properties/luxury" },
            { label: "New Launches", href: "/properties/new-launches" },
            { label: "All Properties", href: "/properties" },
          ]}
        />

        <FooterColumn
          heading="Locations"
          links={[
            { label: "Pune", href: "/locations" },
            { label: "Baner", href: "/locations/baner" },
            { label: "Wakad", href: "/locations/wakad" },
            { label: "Hinjewadi", href: "/locations/hinjewadi" },
            { label: "Kharadi", href: "/locations/kharadi" },
            { label: "Viman Nagar", href: "/locations/viman-nagar" },
          ]}
        />

        <FooterColumn
          heading="Company"
          links={[
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Developers", href: "/developers" },
            { label: "Insights", href: "/insights" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-(--container-page) mx-auto px-6 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs text-silver">
          <p>&copy; {new Date().getFullYear()} Addresta Real Estate Consultants</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-champagne-gold">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-champagne-gold">Terms &amp; Conditions</Link>
            <Link href="/disclaimer" className="hover:text-champagne-gold">Disclaimer</Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/addresta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-champagne-gold"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61593124002182"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-champagne-gold"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/917775963750"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-champagne-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-champagne-gold mb-4">{heading}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-silver hover:text-warm-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
