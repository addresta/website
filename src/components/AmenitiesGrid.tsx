export default function AmenitiesGrid({ amenities }: { amenities: string[] }) {
  if (!amenities.length) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {amenities.map((amenity) => (
        <div
          key={amenity}
          className="flex items-center gap-2 rounded-[6px] border border-border-card bg-pure-white px-4 py-3 text-sm text-charcoal"
        >
          <span className="text-champagne-gold" aria-hidden>
            ✦
          </span>
          {amenity}
        </div>
      ))}
    </div>
  );
}
