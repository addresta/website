import Link from "next/link";

interface MegaMenuColumn {
  heading?: string;
  links: { label: string; href: string }[];
}

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  footerLink?: { label: string; href: string };
}

export default function MegaMenu({ columns, footerLink }: MegaMenuProps) {
  return (
    <div className="absolute left-0 top-full w-full border-t border-border bg-pure-white shadow-lg">
      <div className="max-w-(--container-page) mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {columns.map((col) => (
          <div key={col.heading ?? col.links[0]?.label}>
            {col.heading && (
              <p className="text-xs font-semibold tracking-wider uppercase text-champagne-gold mb-3">
                {col.heading}
              </p>
            )}
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal hover:text-rich-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {footerLink && (
        <div className="border-t border-border">
          <div className="max-w-(--container-page) mx-auto px-6 py-4">
            <Link
              href={footerLink.href}
              className="text-sm font-medium text-rich-gold hover:text-champagne-gold"
            >
              {footerLink.label} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
