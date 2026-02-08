"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactHero() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>();
  const { ref: textRef, isVisible: textVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: noteRef, isVisible: noteVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-secondary py-[9vmax]">
      <div className="max-w-[var(--spacing-container)] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <div className="space-y-10">

          <h1
            ref={titleRef}
            className={`font-heading text-[clamp(60px,8vw,74px)] leading-[1.05] text-primary animate-on-scroll ${
              titleVisible ? "is-visible" : ""
            }`}
          >
            Get In Touch
          </h1>

          <br/>

          <div
            ref={textRef}
            className={`space-y-6 animate-on-scroll ${
              textVisible ? "is-visible" : ""
            }`}
          >
            <p className="font-body text-text text-lg max-w-md leading-relaxed">
              Reaching out for therapy can feel vulnerable. If you have questions,
              or would like to explore whether working together feels like a good
              fit, you’re welcome to contact me.
            </p>

            <p className="font-body text-text text-lg max-w-md leading-relaxed">
              I offer in-person sessions in Santa Monica, as well as secure
              telehealth for adults throughout California.
            </p>

              <br/>
               
            <div className="space-y-3 pt-2">
              <p className="font-body text-text">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:maya@lilactherapy.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  maya@lilactherapy.com
                </a>
              </p>

              <p className="font-body text-text">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+13105551234"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  (310) 555-1234
                </a>
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div
            ref={imageRef}
            className={`relative w-92 aspect-square rounded-full overflow-hidden opacity-90 animate-on-scroll ${
              imageVisible ? "is-visible" : ""
            }`}
          >
            <Image
              src="/Dr_.webp"
              alt="Soft, calming detail from the therapy space"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT — NOTE */}
        <div
          ref={noteRef}
          className={`rounded-2xl bg-primary/5 border border-primary/15 p-10 max-w-md animate-on-scroll ${
            noteVisible ? "is-visible" : ""
          }`}
        >
          <p className="font-body text-sm leading-relaxed text-text/80">
            <strong className="text-primary">A note on privacy:</strong>
            <br /><br />
            Standard website contact forms are not HIPAA-compliant.
            <br /><br />
            For your privacy, you’re encouraged to reach out via email or use a
            secure, HIPAA-compliant scheduling or client portal when booking
            appointments.
          </p>
        </div>

      </div>
    </section>
  );
}
