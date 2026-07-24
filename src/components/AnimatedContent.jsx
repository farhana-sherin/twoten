import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AnimatedContent = ({
    children,
    distance = 100,
    direction = 'vertical',
    reverse = false,
    duration = 0.8,
    ease = 'power3.out',
    initialOpacity = 0,
    animateOpacity = true,
    scale = 1,
    threshold = 0.1,
    delay = 0,
    className = '',
}) => {
    const elRef = useRef(null);

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;

        let x = 0;
        let y = 0;

        if (direction === 'vertical') {
            y = reverse ? -distance : distance;
        } else if (direction === 'horizontal') {
            x = reverse ? -distance : distance;
        }

        const fromVars = {
            x,
            y,
            scale: scale !== 1 ? 0.9 : scale,
            opacity: animateOpacity ? initialOpacity : 1,
        };

        const toVars = {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration,
            ease,
            delay,
            scrollTrigger: {
                trigger: el,
                start: `top ${100 - (threshold * 100)}%`,
                toggleActions: 'play none none reverse',
            },
        };

        const ctx = gsap.context(() => {
            gsap.fromTo(el, fromVars, toVars);
        }, elRef);

        return () => ctx.revert();
    }, [distance, direction, reverse, duration, ease, initialOpacity, animateOpacity, scale, threshold, delay]);

    return (
        <div ref={elRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedContent;
