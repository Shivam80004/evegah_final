"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useLenis } from "lenis/dist/lenis-react";

const ImgParallax = ({ src, alt }) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const quickSetter = useRef(null);

  useLayoutEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  useLayoutEffect(() => {
    if (imageRef.current) {
      quickSetter.current = gsap.quickSetter(imageRef.current, "y", "px");
    }
  }, []);

  useLenis(({ scroll }) => {
    if (!bounds.current || !quickSetter.current) return;
    const relativeScroll = scroll - bounds.current.top;
    const targetY = relativeScroll * 0.5;

    gsap.to(imageRef.current, {
      y: targetY,
      scale: 1.25,
      ease: "power3.out",
      duration: 0.5,
      overwrite: true,
    });
  });

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      style={{
        willChange: "transform",
        transform: "translateY(0px) scale(1.25)",
        display: "block",
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default ImgParallax;
