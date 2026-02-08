'use client';

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    title: "Anxiety & Overwhelm",
    description:
      "Many of the adults I work with feel constantly on edge—caught in cycles of worry, overthinking, or physical tension, even when life appears manageable from the outside. Our work focuses on understanding these patterns and building tools that support greater steadiness, clarity, and ease.",
    image: "/img3_neww.webp",
    position: "10% 1%",
    bg: "bg-[#F3F1EA]", // soft sage
  },
  {
    title: "Trauma & Safety",
    description:
      "Past experiences can continue to shape how safe you feel in your body, relationships, and daily life. My approach to trauma work is paced carefully, with an emphasis on stabilization, grounding, and helping you feel more regulated and supported over time.",
    image: "/img4_new.webp",
    position: "50% 50%",
    bg: "bg-[#F3F1EA]", // warm stone
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For many high-achieving adults, burnout shows up as exhaustion, disconnection, or constant internal pressure. Therapy can become a space to slow down, reconnect with yourself, and explore more sustainable ways of living and working—without needing to push through.",
    image: "/img5_new.webp",
    position: "50% 50%",
    bg: "bg-[#F3F1EA]", // soft cream
  },
];


export default function Specialties() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-[6.6vmax] bg-secondary">
      <div
        ref={ref}
        className={`max-w-[var(--spacing-container)] mx-auto px-6 animate-on-scroll ${isVisible ? "is-visible" : ""
          }`}
      >
        {/* Section Heading */}
        <p className="text-center font-display text-4xl md:text-[3.5rem] text-primary mb-16 md:mb-[80px]">
          Areas of Focus
        </p>
        <br />
        <br />

        {/* Specialties Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[20px]">
          {items.map((item) => (
            <li
              key={item.title}
              className={`border border-primary/20 p-8 md:p-[24px] flex flex-col min-h-[480px] md:min-h-[520px] rounded-[1.5rem] ${item.bg}`}
            >
              {/* Title */}
              <h3 className="font-heading text-xl md:text-[1.2rem] text-primary">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[0.9rem] md:text-[0.95rem] text-text mt-6 md:mt-[10%] leading-relaxed">
                {item.description}
              </p>

              {/* Image */}
              <div className="mt-8 md:mt-[10%] flex justify-center flex-grow items-end">
                <div className="relative w-[60%] md:w-[75%] aspect-square rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 60vw, 25vw"
                    className="object-cover"
                    style={{ objectPosition: item.position }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
