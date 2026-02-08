'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

export default function HopeSection() {
  const { ref: scrollRef, isVisible } = useScrollAnimation();
  const { ref: parallaxRef, style: parallaxStyle } = useParallax({ speed: 0.06 });

  const challenges = [
    "Persistent anxiety or feeling on edge, even when life appears stable",
    "Ongoing physical tension, difficulty sleeping, or bracing for something to go wrong",
    "Exhaustion from perfectionism, high internal pressure, or chronic stress",
    "The impact of past experiences on relationships, confidence, or sense of safety",
    "Professional burnout or feeling disconnected from yourself after years of pushing through"
  ];

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 bg-secondary/30">

      {/* Left: Full Bleed Image */}
      <div className={`parallax-wrapper relative min-h-[40vh] md:min-h-[50vh] lg:min-h-full overflow-hidden animate-on-scroll ${isVisible ? 'is-visible delay-image' : ''}`}>
        <div ref={parallaxRef} style={parallaxStyle} className="relative w-full h-full scale-110">
          <Image
            src="/img6_new.webp"
            alt="Peaceful, grounding therapy environment in Santa Monica"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="bg-secondary p-8 md:p-16 lg:p-24 flex items-center">
        <div
          ref={scrollRef}
          className={`max-w-xl space-y-8 md:space-y-12 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.15] md:leading-[1.1] mb-12 md:mb-16">
            <span className="italic"> You don’t have to carry this by yourself</span>.
          </h2>

          <br />

          <div className="font-body text-text space-y-6 md:space-y-8 mt-0">
            <p className="text-base md:text-lg font-medium italic opacity-90">
              Many of the adults I work with come to therapy experiencing:
            </p>

            <br />

            <ul className="space-y-3 md:space-y-4">
              {challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="font-body text-text text-base md:text-lg leading-relaxed">
            Therapy can become a steady, supportive space to slow down, understand what your mind and body are responding to, and develop more regulated, sustainable ways of living and working over time.
          </p>
        </div>
      </div>
    </section>
  );
}
