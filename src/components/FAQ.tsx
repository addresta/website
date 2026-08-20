"use client";

import { useState } from "react";

interface FAQProps {
  items: { question: string; answer: string }[];
  heading?: string;
}

export default function FAQ({ items, heading = "Frequently Asked Questions" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">{heading}</h2>
      <div className="divide-y divide-border">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-4 text-left group"
              >
                <span className="text-sm md:text-base font-medium text-charcoal group-hover:text-rich-gold transition-colors">
                  {item.question}
                </span>
                <span
                  className={`text-champagne-gold text-xl leading-none shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div className={`accordion-panel ${isOpen ? "is-open" : ""}`}>
                <div>
                  <p className="pb-4 text-sm text-slate-grey leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
