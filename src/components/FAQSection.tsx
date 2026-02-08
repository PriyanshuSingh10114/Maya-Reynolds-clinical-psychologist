'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "Do you offer virtual therapy sessions?",
      answer:
        "Yes. I offer secure telehealth sessions for adults located anywhere in California, in addition to in-person therapy at my Santa Monica office.",
    },
    {
      question: "Who do you typically work with?",
      answer:
        "I primarily work with adults who feel overwhelmed by anxiety, stress, trauma, burnout, or perfectionism. Many of my clients are high-achieving, thoughtful individuals who feel exhausted or emotionally on edge despite appearing functional on the outside.",
    },
    {
      question: "What is your approach to therapy?",
      answer:
        "My approach is warm, collaborative, and grounded. I integrate evidence-based methods including CBT, EMDR, mindfulness-based practices, and body-oriented techniques. Sessions are structured enough to feel supportive while leaving space for reflection and depth.",
    },
  ];

  return (
    <section className="bg-secondary py-16 md:py-[6vmax]">
      <div
        className={`max-w-[var(--spacing-container)] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-start`}
      >

        {/* LEFT — SUPPORTING VISUAL */}
        <div
          ref={ref}
          className={`space-y-6 md:space-y-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <p className="font-heading text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-primary/60">
            Common Questions
          </p>

          <h2 className="font-heading text-[36px] md:text-[48px] text-primary leading-tight">
            FAQs
          </h2>

          <div className="pt-4 md:pt-6">
            <div className={`w-full max-w-[280px] md:max-w-sm aspect-[3/4] rounded-t-full overflow-hidden relative opacity-95 animate-on-scroll ${isVisible ? 'is-visible delay-image' : ''}`}>
              <Image
                src="/img9_neww.webp"
                alt="Calming moment in a therapy setting"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>


        {/* RIGHT — ACCORDION */}
        <div className={`border-t border-primary/25 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-primary/25">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 md:gap-6 py-8 md:py-10 text-left hover:opacity-80 transition-opacity"
      >
        <span className="text-[20px] md:text-[26px] font-light text-primary leading-none mt-1 md:mt-0">
          {open ? '−' : '+'}
        </span>

        <span className="font-heading text-[22px] md:text-[30px] text-primary leading-tight">
          {question}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="pl-8 md:pl-[52px] font-body text-text text-[15px] md:text-[16px] leading-[1.7] max-w-xl">
          {answer}
        </p>
      </div>
    </div>
  );
}
