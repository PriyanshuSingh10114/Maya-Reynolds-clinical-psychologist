'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

export default function Hero() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: parallaxRef, style: parallaxStyle } = useParallax({ speed: 0.04 });

  return (
    <section className="bg-secondary overflow-hidden">
      <div className="max-w-[var(--spacing-container)] mx-auto px-6 pt-10 md:pt-16 pb-[100px] md:pb-[140px] grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">


        {/* LEFT: IMAGE */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div
            ref={imageRef}
            className={`relative w-full max-w-[340px] md:max-w-[480px] lg:max-w-[540px] aspect-[3/4] overflow-hidden rounded-t-full animate-on-scroll ${imageVisible ? 'is-visible' : ''
              }`}
          >
            <div
              ref={parallaxRef}
              style={parallaxStyle}
              className="relative w-full h-full scale-[1.06]"
            >
              <Image
                src="/img1_new.webp"
                alt="Therapy for anxiety, trauma, and burnout in Santa Monica, California"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div
          ref={textRef}
          className={`text-center lg:text-left max-w-xl order-1 lg:order-2 animate-on-scroll ${textVisible ? 'is-visible' : ''
            }`}
        >
          <h1 className="font-heading text-[42px] md:text-[60px] lg:text-[68px] leading-[1.08] text-primary mb-10 md:mb-14">
            Therapy for Anxiety, Trauma & Burnout
          </h1>
          <br />

          <br />
          <p className="font-body text-[15px] md:text-[16px] leading-[1.75] text-text max-w-lg mx-auto lg:mx-0">
            Compassionate, evidence-based therapy for adults navigating anxiety,
            trauma, perfectionism, and high internal pressure. Offering in-person
            sessions in Santa Monica and secure telehealth throughout California.
          </p>

          <div className="mt-10 md:mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-primary px-9 py-3 text-[12px] md:text-[13px] tracking-[0.14em] uppercase text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
            >
              Schedule a Consultation →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
