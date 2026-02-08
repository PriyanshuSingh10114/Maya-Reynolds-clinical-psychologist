"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BlogHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0, rootMargin: '0px' });

  return (
    <section className="bg-cream py-20 md:py-32" ref={ref}>
      <div className="max-w-[var(--spacing-container)] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-20 md:gap-y-32 items-center">

          {/* Image */}
          <div
            className={`relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-t-full overflow-hidden transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="font-display text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] text-charcoal mb-12 md:mb-20">
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
