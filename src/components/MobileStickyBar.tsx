"use client";

import { usePathname } from "next/navigation";

const PHONE_NUMBER = "+917775963754";
const WHATSAPP_NUMBER = "917775963754";

export default function MobileStickyBar() {
  const pathname = usePathname();
  const isProjectDetail = pathname?.startsWith("/projects/");

  if (isProjectDetail) {
    return (
      <div className="fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-border bg-pure-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-charcoal transition-colors duration-200 active:bg-warm-white"
        >
          <span aria-hidden>💬</span>
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-pure-white bg-charcoal transition-colors duration-200 active:bg-rich-gold"
        >
          <span aria-hidden>📅</span>
          Schedule Visit
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t border-border bg-pure-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-medium text-charcoal transition-colors duration-200 active:bg-warm-white"
      >
        <span aria-hidden>📞</span>
        Call
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-medium text-charcoal border-x border-border transition-colors duration-200 active:bg-warm-white"
      >
        <span aria-hidden>💬</span>
        WhatsApp
      </a>
      <a
        href="/contact"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-pure-white bg-charcoal transition-colors duration-200 active:bg-rich-gold"
      >
        <span aria-hidden>✉️</span>
        Enquire
      </a>
    </div>
  );
}
