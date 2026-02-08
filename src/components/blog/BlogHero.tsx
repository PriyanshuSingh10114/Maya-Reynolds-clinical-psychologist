"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BlogHero() {
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-cream pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-[var(--spacing-container)] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div
            ref={imageRef}
            className={`relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-t-full overflow-hidden animate-on-scroll ${imageVisible ? "is-visible" : ""
              }`}
          >
            <Image
              src="/img3_neww.webp"
              alt="Quiet moment of reflection in natural light"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`space-y-8 animate-on-scroll ${textVisible ? "is-visible" : ""
              }`}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
              Thoughts and Reflections
            </h1>

            <br />

            <div className="space-y-6 max-w-lg">
              <p className="font-sans text-xl md:text-2xl text-charcoal/80 leading-relaxed">
                Thoughtful writing for adults navigating anxiety, trauma,
                burnout, and the quiet pressure of holding it all together.
              </p>

              <br />

              <p className="font-sans text-lg text-charcoal/70">
                These reflections are intended to support insight, clarity,
                and a more grounded relationship with yourself.
                <br />
                <br />
                <b>Glad you’re here.</b>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
