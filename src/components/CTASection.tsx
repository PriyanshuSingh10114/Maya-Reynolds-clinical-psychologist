'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-[#EEE9E0] text-center px-6">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto space-y-6 md:space-y-8 animate-on-scroll ${isVisible ? 'is-visible' : ''
          }`}
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl text-secondary leading-tight mb-8 md:mb-12">
          Begin at your own pace.
        </h2>

        <br />

        <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
          If you’re feeling overwhelmed, burned out, or stuck in patterns that no longer
          feel sustainable, therapy can offer a space to slow down, feel supported, and
          explore a different way forward—without pressure or urgency.
        </p>

        <div className="pt-6 md:pt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-block w-full sm:w-auto px-10 py-4 border border-secondary text-secondary text-sm tracking-[0.12em] uppercase hover:bg-secondary hover:text-primary transition-all duration-300"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
