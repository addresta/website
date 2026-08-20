interface PlaceholderArtProps {
  label?: string;
  className?: string;
}

export default function PlaceholderArt({ label = "Image coming soon", className = "" }: PlaceholderArtProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-warm-white via-[#f1ece1] to-champagne-gold/15 ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="w-10 h-10 text-champagne-gold/70 transition-transform duration-500 group-hover:scale-110"
        aria-hidden
      >
        <path
          d="M8 30 L32 10 L56 30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 26 V54 H50 V26" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M26 54 V38 H38 V54" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-wider text-slate-grey/70">{label}</span>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/5 to-transparent" />
    </div>
  );
}
