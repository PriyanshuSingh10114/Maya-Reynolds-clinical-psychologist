'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function OfficeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="office"
      className="py-16 md:py-24 lg:py-32 bg-secondary border-t border-primary/10"
    >
      <div
        ref={ref}
        className={`max-w-[1280px] mx-auto px-6 animate-on-scroll ${isVisible ? "is-visible" : ""
          }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: TEXT */}
          <div className="space-y-8 md:space-y-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-accent text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-semibold">
                Our Office
              </span>

              <h2 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] text-primary">
                A Calm Space for <span className="italic font-normal">Healing</span>
              </h2>
            </div>

            <div className="font-sans text-[17px] leading-[1.8] text-text space-y-6">
              <p>
                My Santa Monica office is a quiet, private space designed to help
                you feel grounded and supported from the moment you arrive.
                Many clients share that the environment itself helps them slow
                down and feel more at ease.
              </p>

              <p>
                With natural light, soft textures, and an uncluttered layout,
                the space is intentionally simple—offering a sense of steadiness
                and safety rather than a clinical feel.
              </p>

              <p>
                I offer in-person therapy at this location, as well as secure
                telehealth sessions for adults throughout California.
              </p>
            </div>

            {/* Details */}
            <div className="pt-8 border-t border-primary/10">
              <div className="flex flex-col sm:flex-row gap-10">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-primary/60 font-semibold mb-1">
                    Location
                  </p>
                  <p className="text-[14px] font-medium text-primary">
                    Santa Monica, CA
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-widest text-primary/60 font-semibold mb-1">
                    Sessions
                  </p>
                  <p className="text-[14px] font-medium text-primary">
                    In-Person & Telehealth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGES */}
          <div className="relative">

            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <Image
                src="/office1.webp"
                alt="Dr. Maya Reynolds’ Santa Monica therapy office with natural light"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary detail image */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-[55%] aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-primary/10 bg-secondary shadow-lg z-10 hidden sm:block">
              <Image
                src="/office2.webp"
                alt="Detail of a calm and private therapy space designed for adult sessions"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
