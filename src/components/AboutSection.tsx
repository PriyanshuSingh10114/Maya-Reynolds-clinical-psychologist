'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

export default function AboutSection() {
  const { ref: scrollRef, isVisible } = useScrollAnimation();
  const { ref: parallaxRef, style: parallaxStyle } = useParallax({ speed: -0.05 });

  return (
    <section
      id="about"
      className="py-24 lg:py-0 lg:min-h-[80vh] grid lg:grid-cols-2 bg-[#F2F0E9]"
    >
      {/* Left text column */}
      <div
        ref={scrollRef}
        className={`flex items-center justify-center p-8 md:p-12 lg:p-24 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-xl space-y-6 md:space-y-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-900 leading-tight">
            When everything looks <span className="italic">fine</span> on the outside.
          </h2>

          <br />

          <div className="font-sans text-forest-900/80 text-[16px] md:text-lg space-y-4 md:space-y-6 leading-relaxed">
            <p>
              Many of the adults I work with appear capable and high-functioning on
              the outside, while quietly carrying constant worry, physical tension,
              or difficulty sleeping.
            </p>
            <p>
              In our work together, we focus not only on easing symptoms, but on
              developing insight, resilience, and a more grounded relationship
              with yourself over time.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#bio"
              className="inline-block text-forest-900 text-xs font-bold uppercase tracking-widest border-b border-forest-900 pb-1 hover:opacity-70 transition-opacity"
            >
              Get to know me →
            </a>
          </div>
        </div>
      </div>

      {/* Right image column */}
      <div className={`parallax-wrapper relative w-full h-[40vh] md:h-[50vh] lg:h-full overflow-hidden order-first lg:order-last animate-on-scroll ${isVisible ? 'is-visible delay-image' : ''}`}>
        <div ref={parallaxRef} style={parallaxStyle} className="relative w-full h-full scale-110">
          <Image
            src="/img2_new.webp"
            alt="Quiet, reflective moment supporting therapy for anxiety and burnout"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
