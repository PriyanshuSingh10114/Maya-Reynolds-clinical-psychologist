"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  "/img6_new.webp",
  "/img5_new.webp",
  "/img2_new.webp",
  "/img1_new.webp",
];

export default function SocialGallery() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-secondary py-[8vmax]">
      <div className="max-w-[var(--spacing-container)] mx-auto px-6 space-y-12">

        <div className="text-center lg:text-left">
          <h2
            ref={titleRef}
            className={`font-heading text-[clamp(36px,6vw,48px)] text-primary animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
          >
            Find me on social.
          </h2>
          <p className="font-body text-text text-lg mt-4 max-w-2xl">
            Follow along for mindfulness tips, therapy insights, and moments of calm.
          </p>
        </div>

        <div
          ref={galleryRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll ${galleryVisible ? 'is-visible' : ''}`}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={src}
                alt={`Social media post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-primary hover:text-primary/70 transition-colors duration-300 text-lg font-semibold"
          >
            @lilactherapy →
          </a>
        </div>

      </div>
    </section>
  );
}
