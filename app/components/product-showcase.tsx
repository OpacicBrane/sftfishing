"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

type ProductShowcaseProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  galleryLabels: {
    previous: string;
    next: string;
    showImage: string;
    openThumbnail: string;
  };
  cta: string;
  specs: {
    label: string;
    value: string | string[];
  }[];
  images: {
    image: string;
    thumbnail: string;
    alt: string;
    name: string;
  }[];
  eager?: boolean;
};

export function ProductShowcase({
  eyebrow,
  title,
  subtitle,
  description,
  galleryLabels,
  cta,
  specs,
  images,
  eager = false,
}: ProductShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const activeImage = images[activeIndex];
  const preloadImage = (image: string) => {
    const preloadedImage = new window.Image();
    preloadedImage.src = image;
  };
  const showPreviousImage = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };
  const showNextImage = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };
  const handleSwipeStart = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") {
      return;
    }

    swipeStart.current = { x: event.clientX, y: event.clientY };
  };
  const handleSwipeEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!swipeStart.current || event.pointerType === "mouse") {
      swipeStart.current = null;
      return;
    }

    const deltaX = event.clientX - swipeStart.current.x;
    const deltaY = event.clientY - swipeStart.current.y;
    const isHorizontalSwipe = Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35;

    if (isHorizontalSwipe) {
      if (deltaX < 0) {
        showNextImage();
      } else {
        showPreviousImage();
      }
    }

    swipeStart.current = null;
  };

  useEffect(() => {
    const previousIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

    preloadImage(images[previousIndex].image);
    preloadImage(images[nextIndex].image);
  }, [activeIndex, images]);

  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
      <div>
        <div className="relative overflow-hidden rounded-md border border-white/10 bg-moss-950 shadow-2xl shadow-black/30">
          <div
            className="relative aspect-[1.34] touch-pan-y"
            onPointerCancel={() => {
              swipeStart.current = null;
            }}
            onPointerDown={handleSwipeStart}
            onPointerUp={handleSwipeEnd}
          >
            <Image
              src={activeImage.image}
              alt={activeImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
              priority={eager && activeIndex === 0}
              unoptimized
            />
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-black text-white backdrop-blur">
            {activeIndex + 1} / {images.length}
          </div>
          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur">
            {activeImage.name}
          </div>
          <button
            type="button"
            aria-label={galleryLabels.previous}
            onClick={showPreviousImage}
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur transition hover:border-brass-300/70 hover:bg-black/55 hover:text-brass-300 focus:outline-none focus:ring-2 focus:ring-brass-300"
          >
            <ChevronLeft size={25} strokeWidth={2.6} />
          </button>
          <button
            type="button"
            aria-label={galleryLabels.next}
            onClick={showNextImage}
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur transition hover:border-brass-300/70 hover:bg-black/55 hover:text-brass-300 focus:outline-none focus:ring-2 focus:ring-brass-300"
          >
            <ChevronRight size={25} strokeWidth={2.6} />
          </button>
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/50 to-transparent px-4 pb-4 pt-10">
            {images.map((image, index) => (
              <button
                key={image.image}
                type="button"
                aria-label={`${galleryLabels.showImage} ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                onFocus={() => preloadImage(image.image)}
                onMouseEnter={() => preloadImage(image.image)}
                className={`h-3 w-3 rounded-full transition ${
                  activeIndex === index
                    ? "bg-brass-400"
                    : "bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-10">
          {images.map((image, index) => (
            <button
              key={image.image}
              type="button"
              aria-label={`${galleryLabels.openThumbnail} ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              onFocus={() => preloadImage(image.image)}
              onMouseEnter={() => preloadImage(image.image)}
              className={`relative aspect-square overflow-hidden rounded-md border transition ${
                activeIndex === index
                  ? "border-brass-400"
                  : "border-white/10 opacity-72 hover:border-white/40 hover:opacity-100"
              }`}
            >
              <Image
                src={image.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="72px"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.24em] text-brass-400">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
          {title}
        </h3>
        <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-reed">
          {subtitle}
        </p>
        <p className="mt-7 text-base leading-8 text-reed sm:text-lg">{description}</p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className={`rounded-md border border-white/10 bg-white/[0.04] p-4 ${
                Array.isArray(spec.value) ? "sm:col-span-2" : "sm:col-span-1"
              }`}
            >
              <dt className="text-xs font-black uppercase tracking-[0.16em] text-brass-400">
                {spec.label}
              </dt>
              <dd className="mt-3 font-bold text-white">
                {Array.isArray(spec.value) ? (
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-5">
                    {spec.value.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  spec.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#kontakt"
          className="mt-8 inline-flex rounded-md bg-brass-400 px-7 py-4 text-sm font-black text-moss-950 transition hover:bg-brass-300"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
