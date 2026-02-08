"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SubscribeSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-[#EEE9E0] py-24 lg:py-32">
      <div
        ref={ref}
        className={`max-w-[var(--spacing-container)] mx-auto px-6 animate-on-scroll ${isVisible ? "is-visible" : ""
          }`}
      >
        <div className="max-w-3xl mx-auto text-center space-y-10 bg-[#FAF8F3] p-12 lg:p-20 rounded-[2rem] shadow-sm">

          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Stay Connected
          </h2>



          <p className="font-sans text-lg text-text/80 leading-relaxed max-w-xl mx-auto">
            If you’d like to receive occasional reflections on anxiety, trauma,
            and burnout, you’re welcome to join the mailing list below.
            There’s no pressure to engage.
          </p>

          <form
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 pt-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow bg-white border border-primary/20 px-6 py-4 text-text outline-none placeholder:text-text/40 rounded-full"
              required
            />

            <button
              type="submit"
              className="px-10 py-4 border border-primary text-primary font-sans text-sm tracking-widest uppercase rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="font-sans text-sm text-text/60 italic pt-2">
            Your privacy is respected. Emails are sent occasionally.
          </p>
        </div>
      </div>
    </section>
  );
}
