interface Step {
  number: string;
  title: string;
  description: string;
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <div key={step.number}>
          <p className="text-3xl font-heading text-champagne-gold mb-3">{step.number}</p>
          <h3 className="text-lg font-medium text-charcoal mb-2">{step.title}</h3>
          <p className="text-sm text-slate-grey leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
