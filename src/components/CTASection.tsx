import Link from "next/link";
import Reveal from "./Reveal";

interface CTASectionProps {
  heading: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTASection({ heading, body, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="section-space bg-charcoal text-warm-white">
      <Reveal className="max-w-(--container-page) mx-auto px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">{heading}</h2>
        {body && <p className="mt-4 text-silver leading-relaxed">{body}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-[6px] bg-champagne-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-rich-gold hover:scale-[1.03] active:scale-[0.98]"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-[6px] border border-warm-white/40 px-7 py-3.5 text-sm font-semibold text-warm-white transition-all duration-200 hover:border-champagne-gold hover:text-champagne-gold hover:scale-[1.03] active:scale-[0.98]"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}
