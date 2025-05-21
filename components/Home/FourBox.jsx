"use client"
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function FourBox() {

    const c1 = useRef(null);
    const c2 = useRef(null);
    const c3 = useRef(null);
    const c4 = useRef(null);
    const num1 = useRef(null);
    const num2 = useRef(null);
    const num3 = useRef(null);
    const num4 = useRef(null);

    useGSAP(() => {
        gsap.fromTo(c1.current,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: -50,
                ease: "power1.inOut",
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: c1.current,
                    start: "top bottom",
                    end: "0% 70%",
                }
            }
        );
        gsap.fromTo(c2.current,
            {
                y: 120,
                opacity: 0,
            },
            {
                y: 120,
                duration: 1,
                ease: "power1.inOut",
                opacity: 1,
                scrollTrigger: {
                    trigger: c2.current,
                    start: "top bottom",
                    end: "0% 70%",
                }
            }
        );
        gsap.fromTo(c3.current,
            {
                y: 80,
                opacity: 0,
            },
            {
                y: 80,
                duration: 1,
                ease: "power1.inOut",
                opacity: 1,
                scrollTrigger: {
                    trigger: c3.current,
                    start: "top bottom",
                    end: "0% 70%",
                }
            }
        );
        gsap.fromTo(c4.current,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: -150,
                duration: 1,
                ease: "power1.inOut",
                opacity: 1,
                scrollTrigger: {
                    trigger: c4.current,
                    start: "top bottom",
                    end: "0% 70%",
                }
            }
        );

        // Custom function to animate numbers
        const animateNumber = (element, endValue) => {
            let startValue = 0;
            const duration = 1;
            const startTime = performance.now();
            
            const updateNumber = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / (duration * 1000), 1);
                
                const currentValue = Math.floor(gsap.utils.interpolate(startValue, endValue, progress));
                element.current.textContent = `${currentValue}+`;
                
                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                }
            };
            
            requestAnimationFrame(updateNumber);
        };

        // ScrollTrigger for number animations
        ScrollTrigger.create({
            trigger: c1.current,
            start: "top bottom",
            once: true,
            onEnter: () => animateNumber(num1, 100)
        });

        ScrollTrigger.create({
            trigger: c2.current,
            start: "top bottom",
            once: true,
            onEnter: () => animateNumber(num2, 10)
        });

        ScrollTrigger.create({
            trigger: c3.current,
            start: "top bottom",
            once: true,
            onEnter: () => animateNumber(num3, 200)
        });

        ScrollTrigger.create({
            trigger: c4.current,
            start: "top bottom",
            once: true,
            onEnter: () => animateNumber(num4, 300)
        });

    }, []);


    return (
        <div className='flex flex-row gap-[1vw] justify-center items-end container mx-auto min-h-[35vh]'>

            <div ref={c1} className='flex flex-row gap-[1.2vw] justify-center items-center opacity-0'>{/* mt-[-8vw] */}
                <div className='h-[18vw] min-h-[8rem] w-[20.4vw] min-w-[12rem] bg-[#000] rounded-[1.6vw] flex flex-col justify-center items-center'>
                    <h1 ref={num1} className='text-[4vw] min-text-[2.4rem] font-bold leading-[130%] tracking-[0.08em] text-center text-[#CDFF64]'>
                        0+
                    </h1>
                    <p className='text-[1.2vw] min-text-[0.8rem] font-medium leading-[130%] tracking-[0.08em] text-center text-[#fff]'>
                        Cities
                    </p>
                </div>
            </div>

            <div ref={c2} className='flex flex-row gap-[1.2vw] justify-center items-center opacity-0'>{/* mt-[12vw] */}
                <div className='h-[18vw] min-h-[8rem] w-[20.4vw] min-w-[12rem] bg-[#CDFF64] rounded-[1.6vw] flex flex-col justify-center items-center'>
                    <h1 ref={num2} className='text-[4vw] min-text-[2.4rem] font-bold leading-[130%] tracking-[0.08em] text-center text-black'>
                        0+
                    </h1>
                    <p className='text-[1.2vw] min-text-[0.8rem] font-medium leading-[130%] tracking-[0.08em] text-center text-black'>
                        Cities
                    </p>
                </div>
            </div>

            <div ref={c3} className='flex flex-row gap-[1.2vw] justify-center items-center opacity-0'>{/* mt-[5.6vw] */}
                <div className='h-[18vw] min-h-[8rem] w-[20.4vw] min-w-[12rem] bg-[#EBEBEB] rounded-[1.6vw] flex flex-col justify-center items-center'>
                    <h1 ref={num3} className='text-[4vw] min-text-[2.4rem] font-bold leading-[130%] tracking-[0.08em] text-center text-black'>
                        0+
                    </h1>
                    <p className='text-[1.2vw] min-text-[0.8rem] font-medium leading-[130%] tracking-[0.08em] text-center text-black'>
                        Cities
                    </p>
                </div>
            </div>

            <div ref={c4} className='flex flex-row gap-[1.2vw] justify-center items-center opacity-0'>{/* mt-[-17.6vw] */}
                <div className='h-[18vw] min-h-[8rem] w-[20.4vw] min-w-[12rem] bg-[#DDDAFA] rounded-[1.6vw] flex flex-col justify-center items-center'>
                    <h1 ref={num4} className='text-[4vw] min-text-[2.4rem] font-bold leading-[130%] tracking-[0.08em] text-center text-black'>
                        0+
                    </h1>
                    <p className='text-[1.2vw] min-text-[0.8rem] font-medium leading-[130%] tracking-[0.08em] text-center text-black'>
                        Cities
                    </p>
                </div>
            </div>

        </div>
    )
}

export default FourBox