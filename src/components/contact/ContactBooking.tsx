"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactBooking() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>();
  const { ref: textRef, isVisible: textVisible } =
    useScrollAnimation<HTMLParagraphElement>();
  const { ref: widgetRef, isVisible: widgetVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-[#EBE9E1] py-[9vmax] px-6">
      <div className="max-w-2xl mx-auto text-center space-y-10">

        {/* HEADING */}
        <h2
          ref={titleRef}
          className={`font-heading text-[clamp(38px,6vw,52px)] text-primary leading-tight animate-on-scroll ${
            titleVisible ? "is-visible" : ""
          }`}
        >
          Begin the conversation.
        </h2>

        <br/>

        {/* SUPPORTING COPY */}
        <p
          ref={textRef}
          className={`font-body text-text text-lg leading-relaxed max-w-xl mx-auto animate-on-scroll ${
            textVisible ? "is-visible" : ""
          }`}
        >
          Reaching out for therapy can feel like a big step. Whether you’re
          feeling overwhelmed, burned out, or simply curious about whether we’d
          be a good fit, you’re welcome to start here.
        </p>

        <p className="font-body text-text text-lg leading-relaxed max-w-xl mx-auto">
          I offer both in-person sessions in Santa Monica and secure telehealth
          sessions for adults throughout California.
        </p>

        {/* BOOKING / CONTACT AREA */}
        <div
          ref={widgetRef}
          className={`mt-16 rounded-2xl border border-primary/20 bg-primary/5 px-10 py-16 animate-on-scroll ${
            widgetVisible ? "is-visible" : ""
          }`}
        >
          <div className="space-y-6 max-w-md mx-auto">
            <p className="font-heading text-xl text-primary">
              Schedule a consultation
            </p>

            <br/>

            <p className="font-body text-text/80 leading-relaxed">
              You can request a consultation using the secure scheduling system
              below, or reach out directly if you have questions before getting
              started.
            </p>

            {/* PLACEHOLDER */}
            <div className="mt-10 rounded-xl border border-primary/20 bg-white px-6 py-10 text-sm text-text/70">
              HIPAA-compliant scheduling integration
              <br />
              (SimplePractice, TherapyNotes, or similar)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
