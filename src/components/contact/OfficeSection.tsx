"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function OfficeSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>();
  const { ref: addressRef, isVisible: addressVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: hoursRef, isVisible: hoursVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: mapRef, isVisible: mapVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-[#dfded9] py-[9vmax]">
      <div className="max-w-[var(--spacing-container)] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT — OFFICE DETAILS */}
        <div className="space-y-10">
          <h2
            ref={titleRef}
            className={`font-heading text-[clamp(38px,6vw,48px)] text-primary animate-on-scroll ${
              titleVisible ? "is-visible" : ""
            }`}
          >
            Office location
          </h2>

          <div
            ref={addressRef}
            className={`space-y-3 animate-on-scroll ${
              addressVisible ? "is-visible" : ""
            }`}
          >
            <p className="font-body text-text text-lg leading-relaxed max-w-md">
              I offer in-person therapy sessions from my Santa Monica office,
              designed to be a quiet, supportive space for focused work.
            </p>

            <div className="pt-4 space-y-1 text-text">
              <p className="font-semibold">Address</p>
              <p>123 W 45th Street</p>
              <p>Santa Monica, CA 90401</p>
            </div>
          </div>

          <div
            ref={hoursRef}
            className={`space-y-2 animate-on-scroll ${
              hoursVisible ? "is-visible" : ""
            }`}
          >
            <p className="font-semibold text-text">Office hours</p>
            <p className="text-text">Monday – Friday</p>
            <p className="text-text">10:00am – 6:00pm</p>

            <p className="text-sm text-text/70 pt-3 max-w-sm">
              Limited evening availability may be offered depending on
              scheduling. Telehealth sessions are available statewide within
              California.
            </p>
          </div>
        </div>

        {/* RIGHT — MAP */}
        <div
          ref={mapRef}
          className={`w-full aspect-[4/3] rounded-2xl overflow-hidden border border-primary/15 animate-on-scroll ${
            mapVisible ? "is-visible" : ""
          }`}
        >
          <iframe
            className="w-full h-full"
            src="https://maps.google.com/maps?q=Santa%20Monica&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            title="Santa Monica therapy office location"
          />
        </div>
      </div>
    </section>
  );
}
