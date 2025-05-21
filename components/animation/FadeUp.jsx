"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FadeUp = ({ 
    children, 
    delay = 0,
    duration = 1,
    y = 80,
    triggerOffset = "80%",
    className = "",
    once = false,
    toggleActions = "play none none reverse"
}) => {
    const elementRef = useRef(null);

    useGSAP(() => {
        if (!elementRef.current) return;

        const animation = gsap.fromTo(
            elementRef.current,
            {
                y,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration,
                delay,
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: `top ${triggerOffset}`,
                    toggleActions,
                    once,
                },
            }
        );

        // Cleanup function
        return () => {
            if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
            }
            animation.kill();
        };
    }, {
        scope: elementRef,
        dependencies: [delay, duration, y, triggerOffset, once, toggleActions]
    });

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

export default FadeUp; 