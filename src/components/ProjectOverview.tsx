import { Property } from "@/types";

export default function ProjectOverview({ property }: { property: Property }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Project Overview</h2>
      <p className="text-sm md:text-base text-slate-grey leading-relaxed">{property.description}</p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {property.highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-2 text-sm text-charcoal">
            <span className="text-champagne-gold" aria-hidden>
              ✦
            </span>
            {highlight}
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-sm border border-border-card rounded-[6px] overflow-hidden">
          <thead>
            <tr className="bg-warm-white text-left text-xs uppercase tracking-wider text-slate-grey">
              <th className="px-4 py-3 font-medium">Configuration</th>
              <th className="px-4 py-3 font-medium">Area</th>
              <th className="px-4 py-3 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {property.configurations.map((config) => (
              <tr key={config.type} className="border-t border-border-card">
                <td className="px-4 py-3 text-charcoal font-medium">{config.type}</td>
                <td className="px-4 py-3 text-slate-grey">{config.area}</td>
                <td className="px-4 py-3 text-slate-grey">{config.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
