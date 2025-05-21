"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedButton = ({ 
    text = '', 
    className = '', 
    borderColor = '#000',
    textColor = '#000',
    flairColor = '#000',
    ...props 
}) => {
    const buttonRef = useRef(null);
    const flairRef = useRef(null);
    const xSet = useRef(null);
    const ySet = useRef(null);

    useEffect(() => {
        if (!buttonRef.current || !flairRef.current) return;

        // Initialize GSAP quickSetters
        xSet.current = gsap.quickSetter(flairRef.current, "xPercent");
        ySet.current = gsap.quickSetter(flairRef.current, "yPercent");

        const button = buttonRef.current;
        const flair = flairRef.current;

        const getXY = (e) => {
            const rect = button.getBoundingClientRect();
            
            const xTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, rect.width, 0, 100),
                gsap.utils.clamp(0, 100)
            );

            const yTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, rect.height, 0, 100),
                gsap.utils.clamp(0, 100)
            );

            return {
                x: xTransformer(e.clientX - rect.left),
                y: yTransformer(e.clientY - rect.top)
            };
        };

        const handleMouseEnter = (e) => {
            const { x, y } = getXY(e);
            xSet.current(x);
            ySet.current(y);

            gsap.to(flair, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = (e) => {
            const { x, y } = getXY(e);
            gsap.killTweensOf(flair);

            gsap.to(flair, {
                xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                scale: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseMove = (e) => {
            const { x, y } = getXY(e);
            gsap.to(flair, {
                xPercent: x*0.2,
                yPercent: y*0.5,
                duration: 0.4,
                ease: "power2"
            });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);
        button.addEventListener("mousemove", handleMouseMove);

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            button.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`button button--stroke relative inline-flex items-center justify-center overflow-hidden rounded-[100px] px-[27px] py-[16px] text-lg font-medium capitalize bg-white text-black hover:!text-white hover:!border-black transition-all duration-150 ease-in-out ${className}`}
            style={{ 
                color: textColor,
                borderColor: borderColor,
                border: '2px solid',
            }}
            {...props}
        >
            <span 
                ref={flairRef}
                className="button__flair absolute pointer-events-none scale-0 origin-[0_0]"
                style={{
                    backgroundColor: flairColor,
                    width: '170%',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <span className="button__label relative text-center transition-colors duration-150 ease-in-out">
                {text}
            </span>
        </button>
    );
};

export default AnimatedButton; 