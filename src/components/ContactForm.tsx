"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const INTERESTS = ["Residential", "Commercial", "Investment", "Luxury", "Selling"];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project") ?? "";
  const intent = searchParams.get("intent");

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(() => {
    if (!project) return "";
    if (intent === "visit") return `I'd like to schedule a site visit for ${project}.`;
    if (intent === "price") return `I'd like pricing and availability details for ${project}.`;
    return `I'm interested in ${project}.`;
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to CRM / email endpoint once backend integration is decided.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="animate-fade-in-up rounded-[6px] border border-champagne-gold/40 bg-warm-white p-8 text-center">
        <p className="text-lg font-medium text-charcoal">Thank you for reaching out.</p>
        <p className="mt-2 text-sm text-slate-grey">
          Our advisory team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />

      {project && <Field label="Property" name="property" defaultValue={project} />}

      <fieldset>
        <legend className="text-xs font-medium text-slate-grey mb-2">Interested In</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-2 rounded-[4px] border border-border px-3 py-2 text-sm text-charcoal cursor-pointer transition-colors duration-200 hover:border-champagne-gold/60 has-checked:border-champagne-gold has-checked:text-rich-gold has-checked:bg-champagne-gold/5"
            >
              <input type="checkbox" name="interest" value={interest} className="accent-[color:var(--color-champagne-gold)]" />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Preferred Location" name="location" />
        <Field label="Budget" name="budget" />
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-slate-grey">Message</span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-[4px] border border-border bg-pure-white px-3 py-2.5 text-sm text-charcoal transition-colors duration-200 focus:outline-none focus:border-champagne-gold"
        />
      </label>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-[6px] bg-charcoal px-8 py-3.5 text-sm font-semibold text-pure-white transition-all duration-200 hover:bg-rich-gold hover:scale-[1.02] active:scale-[0.98]"
      >
        Request a Consultation
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-grey">
        {label}
        {required && <span className="text-deep-burgundy"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="rounded-[4px] border border-border bg-pure-white px-3 py-2.5 text-sm text-charcoal transition-colors duration-200 focus:outline-none focus:border-champagne-gold"
      />
    </label>
  );
}
