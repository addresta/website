import Link from "next/link";

interface HeroProps {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  supportingLine?: string;
}

export default function Hero({ eyebrow, heading, body, primaryCta, secondaryCta, supportingLine }: HeroProps) {
  return (
    <section className="relative bg-charcoal text-warm-white">
      <div className="max-w-(--container-page) mx-auto px-6 py-24 lg:py-36 flex flex-col items-start">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-champagne-gold mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] max-w-3xl">{heading}</h1>
        {body && <p className="mt-6 text-base md:text-lg text-silver max-w-xl leading-relaxed">{body}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-[6px] bg-champagne-gold px-7 py-3.5 text-sm font-semibold text-charcoal hover:bg-rich-gold transition-colors"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-[6px] border border-warm-white/40 px-7 py-3.5 text-sm font-semibold text-warm-white hover:border-champagne-gold hover:text-champagne-gold transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {supportingLine && <p className="mt-8 text-sm text-silver italic">{supportingLine}</p>}
      </div>
    </section>
  );
}
