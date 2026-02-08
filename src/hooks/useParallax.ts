'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
    speed?: number; // Speed of the parallax effect (positive = slower, negative = faster)
    direction?: 'vertical' | 'horizontal';
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(options: ParallaxOptions = {}) {
    const { speed = 0.1, direction = 'vertical' } = options;
    const ref = useRef<T>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate how far the element is from the center of the viewport
            const centerOffset = (rect.top + rect.height / 2) - viewportHeight / 2;

            // Apply the parallax speed
            setOffset(centerOffset * speed);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    const style = direction === 'vertical'
        ? { transform: `translateY(${offset}px)` }
        : { transform: `translateX(${offset}px)` };

    return { ref, style };
}
