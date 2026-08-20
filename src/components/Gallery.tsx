export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  if (!images.length) {
    return (
      <div className="aspect-video rounded-[6px] border border-border-card bg-silver/20 flex items-center justify-center text-sm text-slate-grey">
        Gallery images coming soon
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`${alt} — image ${i + 1}`}
          className="w-full aspect-[4/3] object-cover rounded-[6px] border border-border-card"
        />
      ))}
    </div>
  );
}
