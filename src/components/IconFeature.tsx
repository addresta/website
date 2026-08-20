interface IconFeatureProps {
  number?: string;
  title: string;
  description: string;
}

export default function IconFeature({ number, title, description }: IconFeatureProps) {
  return (
    <div className="border border-border-card rounded-[6px] p-6 bg-pure-white">
      {number && <p className="text-sm font-semibold text-champagne-gold mb-2">{number}</p>}
      <h3 className="text-lg font-medium text-charcoal mb-2">{title}</h3>
      <p className="text-sm text-slate-grey leading-relaxed">{description}</p>
    </div>
  );
}
