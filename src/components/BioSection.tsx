'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

export default function BioSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: parallaxMainRef, style: parallaxMainStyle } = useParallax({ speed: 0.025 });
  const { ref: parallaxCircleRef, style: parallaxCircleStyle } = useParallax({ speed: -0.04 });

  return (
    <section className="bg-secondary py-[6.6vmax]">
      <div
        ref={ref}
        className="max-w-[var(--spacing-container)] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >

        {/* Left: Text */}
        <div
          className={`space-y-8 lg:pr-16 animate-on-scroll ${isVisible ? 'is-visible' : ''
            }`}
        >
          <h2 className="font-heading text-5xl md:text-6xl text-primary">
            Hi, I’m Dr. Maya Reynolds.
          </h2>

          <br />

          <p className="font-body text-text text-lg leading-relaxed max-w-lg">
            I’m a licensed clinical psychologist based in Santa Monica, California,
            offering therapy for adults who feel overwhelmed by anxiety, stress,
            or the lingering effects of past experiences.
          </p>

          <p className="font-body text-text text-lg leading-relaxed max-w-lg">
            My approach is warm, collaborative, and grounded. I integrate
            evidence-based methods such as CBT, EMDR, mindfulness, and
            body-oriented techniques.
          </p>

          <br />

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary text-xs font-semibold tracking-widest uppercase transition-colors hover:bg-primary hover:text-secondary"
          >
            Schedule a consultation →
          </a>
        </div>

        {/* Right: Images */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Main Image */}
          <div
            className={`parallax-wrapper w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden animate-on-scroll ${isVisible ? 'is-visible delay-200' : ''
              }`}
          >
            <div
              ref={parallaxMainRef}
              style={parallaxMainStyle}
              className="relative w-full h-full scale-[1.03]"
            >
              <Image
                src="/Dr_.webp"
                alt="Dr. Maya Reynolds’ therapy space"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
