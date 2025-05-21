"use client"

import React, { Children, useRef } from "react"
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react" 

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextAnimation({ children, animationOnScrool = true, delay = 0 }) {

    const containerRef = useRef(null);
    const elementRef = useRef([]);
    const splitRef = useRef([]);
    const lines = useRef([]);

    useGSAP(()=>{
        
        if(!containerRef.current)return;

        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];

        let elements = [];

        if(containerRef.current.hasAttribute("data-copy-wrapper")){
            elements = Array.from(containerRef.current.children);
        }
        else{
            elements = [containerRef.current];
        }

        elements.forEach((element)=>{
            elementRef.current.push(element);

        const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
        })

        splitRef.current.push(split);
        lines.current.push( ...split.lines);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.testIndent;

        if(textIndent && textIndent == "0px" ){
            if(split.lines.length > 0){
                split.lines[0].computedStyleMap.paddingLeft = textIndent;
            }
            element.style.textIndent = textIndent;
        }
        
        lines.current.push(...split.lines);
        });

        gsap.set(lines.current, { y: "100%", opacity:0 });

        const animationProps = {
           y: "0%",
           duration: 1,
           opacity: 1,
           stagger: 0.1,
           ease: "power4.out",
           delay: delay,
        };
        
        if(animationOnScrool){
            gsap.to(lines.current, {
                ...animationProps,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    once: true,
                },
            });
        }
        else{
            gsap.to(lines.current, animationProps);
        }

        return () => {
            splitRef.current.forEach((split)=>{
                if(split){
                    split.revert();
                }
            })
        }
    },
    {
        scope: containerRef,
        dependencies: [animationOnScrool, delay],
    })

    if(React.Children.count(children) === 1){
         return React.cloneElement(children, {ref: containerRef});
    }

    return(
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    )
}