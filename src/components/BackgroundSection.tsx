'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BackgroundSection() {
  const { ref, isVisible } = useScrollAnimation();

  const items = [
    {
      title: "Education",
      content:
        "I hold a Doctorate in Clinical Psychology (PsyD), with advanced training in evidence-based treatment for anxiety, trauma, and stress-related conditions. My education emphasized both structured clinical approaches and depth-oriented psychological work."
    },
    {
      title: "Licensure",
      content:
        "I am a Licensed Clinical Psychologist in the state of California and provide therapy in accordance with professional and ethical standards set by the California Board of Psychology."
    },
    {
      title: "Clinical Focus",
      content:
        "My work integrates trauma-informed care, cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. I place particular emphasis on pacing, safety, and nervous-system regulation—supporting clients in feeling more grounded not only during sessions, but in daily life."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 animate-on-scroll ${isVisible ? 'is-visible' : ''
          }`}
      >
        <h2 className="font-heading text-3xl md:text-5xl text-primary text-center mb-16 md:mb-20">
          My Professional Background
        </h2>
        <br />
        <br />
        <div className="border-t border-primary/30">
          {items.map((item, i) => (
            <BackgroundItem
              key={i}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BackgroundItem({
  title,
  content
}: {
  title: string;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left hover:bg-primary/5 transition-colors px-4 group"
      >
        <span className="font-heading text-xl md:text-2xl text-primary font-medium">
          {title}
        </span>
        <span className="text-2xl font-light text-primary transform transition-transform duration-300 group-hover:scale-110">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 px-4 ${isOpen ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="font-body text-text/80 text-lg leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}
