import PlaceholderArt from "./PlaceholderArt";

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  if (!images.length) {
    return <PlaceholderArt label="Gallery images coming soon" className="aspect-video rounded-[6px] border border-border-card" />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`${alt} — image ${i + 1}`}
          className="w-full aspect-[4/3] object-cover rounded-[6px] border border-border-card transition-transform duration-500 hover:scale-[1.03]"
        />
      ))}
    </div>
  );
}
