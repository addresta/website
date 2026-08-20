"use client";

import { useEffect, useState } from "react";
import PlaceholderArt from "./PlaceholderArt";

interface ProjectGalleryProps {
  images: string[];
  alt: string;
}

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, images.length]);

  if (!images.length) {
    return (
      <PlaceholderArt
        label="Gallery images coming soon"
        className="aspect-[16/9] md:aspect-[21/9] rounded-[8px] border border-border-card"
      />
    );
  }

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-[8px] overflow-hidden aspect-[16/9] md:aspect-[21/9]">
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="group relative col-span-4 row-span-2 md:col-span-2 overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[0]}
            alt={`${alt} — main photo`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {images.slice(1, 5).map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightboxIndex(i + 1)}
            className={`group relative hidden md:block overflow-hidden ${
              images.length <= 2 ? "md:col-span-2" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${alt} — photo ${i + 2}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {i === 3 && images.length > 5 && (
              <span className="absolute inset-0 flex items-center justify-center bg-charcoal/50 text-warm-white text-sm font-semibold">
                +{images.length - 5} more
              </span>
            )}
          </button>
        ))}
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="mt-4 inline-flex items-center gap-2 rounded-[6px] border border-charcoal px-5 py-2.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-charcoal hover:text-pure-white"
        >
          Show all {images.length} photos
        </button>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          alt={alt}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  alt,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const goPrev = () => onNavigate((index - 1 + images.length) % images.length);
  const goNext = () => onNavigate((index + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-charcoal/98 animate-fade-in-up"
      style={{ animationDuration: "0.2s" }}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} photo gallery`}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-4 text-warm-white shrink-0">
        <span className="text-sm">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="text-2xl leading-none hover:text-champagne-gold transition-colors"
        >
          ×
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 pb-4 min-h-0">
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 md:left-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-warm-white/10 text-warm-white text-xl hover:bg-warm-white/20 transition-colors"
          >
            ←
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={`${alt} — photo ${index + 1}`}
          className="max-h-full max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photo"
            className="absolute right-2 md:right-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-warm-white/10 text-warm-white text-xl hover:bg-warm-white/20 transition-colors"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
