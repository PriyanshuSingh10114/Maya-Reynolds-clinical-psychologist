'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

export default function AboutSection() {
  const { ref: scrollRef, isVisible } = useScrollAnimation({ threshold: 0, rootMargin: '0px' });
  const { ref: parallaxRef, style: parallaxStyle } = useParallax({ speed: -0.05 });

  return (
    <section
      id="about"
      ref={scrollRef}
      className="py-24 lg:py-0 lg:min-h-[80vh] grid lg:grid-cols-2 bg-[#F2F0E9]"
    >
      {/* Left text column */}
      <div
        className={`flex items-center justify-center p-8 md:p-16 lg:p-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest-900 leading-tight mb-8 md:mb-12">
            When everything looks <span className="italic">fine</span> on the outside.
          </h2>

          <br />

          <div className="font-sans text-forest-900/80 text-[16px] md:text-lg space-y-6 leading-relaxed mt-0">
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

          <div className="pt-8 md:pt-10">
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
      <div className={`parallax-wrapper relative w-full h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-full overflow-hidden order-first lg:order-last transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
