interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ eyebrow, heading, subheading, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-champagne-gold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-charcoal leading-tight">{heading}</h2>
      {subheading && <p className="mt-4 text-base text-slate-grey leading-relaxed">{subheading}</p>}
    </div>
  );
}
