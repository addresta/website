import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  supportingLine?: string;
  backgroundImage?: string;
}

export default function Hero({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  supportingLine,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-warm-white">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
          <div className="absolute inset-0 bg-charcoal/20" />
        </>
      ) : (
        <div
          className="pointer-events-none absolute -top-1/3 -right-1/4 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-champagne-gold) 0%, transparent 70%)" }}
          aria-hidden
        />
      )}
      <div className="relative max-w-(--container-page) mx-auto px-6 pt-24 pb-36 lg:pt-36 lg:pb-52 flex flex-col items-start">
        {eyebrow && (
          <p className="animate-fade-in-up text-xs font-semibold tracking-[0.2em] uppercase text-champagne-gold mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="animate-fade-in-up text-4xl md:text-6xl leading-[1.1] max-w-3xl" style={{ animationDelay: "100ms" }}>
          {heading}
        </h1>
        {body && (
          <p
            className="animate-fade-in-up mt-6 text-base md:text-lg text-silver max-w-xl leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            {body}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="animate-fade-in-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
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
        {supportingLine && (
          <p className="animate-fade-in-up mt-8 text-sm text-silver italic" style={{ animationDelay: "400ms" }}>
            {supportingLine}
          </p>
        )}
      </div>
    </section>
  );
}
