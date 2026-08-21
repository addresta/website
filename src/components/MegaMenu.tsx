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
  const columnCount = Math.min(columns.length, 4);

  return (
    <div className="absolute left-0 top-full w-full border-t border-border bg-pure-white shadow-lg">
      <div className="max-w-(--container-page) mx-auto px-6 py-8">
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(180px, 240px))` }}
        >
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
                      className="group inline-flex items-center gap-1.5 text-sm text-charcoal hover:text-rich-gold transition-colors"
                    >
                      <span className="w-0 h-px bg-champagne-gold transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {footerLink && (
        <div className="border-t border-border">
          <div className="max-w-(--container-page) mx-auto px-6 py-4">
            <Link
              href={footerLink.href}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-rich-gold hover:text-champagne-gold"
            >
              {footerLink.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
