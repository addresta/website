import { Testimonial } from "@/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-[6px] border border-border-card bg-pure-white p-8">
      <p className="text-champagne-gold text-3xl font-heading leading-none mb-4">&ldquo;</p>
      <p className="text-base text-charcoal leading-relaxed">{testimonial.quote}</p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-charcoal">{testimonial.clientName}</p>
        <p className="text-xs text-slate-grey">{testimonial.clientRole}</p>
      </div>
    </div>
  );
}
