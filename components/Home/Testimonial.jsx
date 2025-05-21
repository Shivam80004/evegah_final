'use client'
import React from 'react'
import Button from '../comman/Button1'
import TextAnimation from '../animation/TextAnimation'
import img from '@/public/images/testimonial.png'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
    const container = useRef(null)

    useGSAP(
        () => {
            const items = gsap.utils.toArray('.item')

            gsap.timeline({
                defaults: {
                    ease: 'power3'
                },
                scrollTrigger: {
                    trigger: container.current,
                    start: 'center center',
                    end: '+=200%',
                    pin: true,
                    scrub: true
                }
            }).from(items, {
                transformOrigin: '100% -450%',
                stagger: 0.07,
                scaleX: 1.05,
                skewX: 1,
                xPercent: 50,
                rotation: -10,
                autoAlpha: 0
            })
        },
        { scope: container }
    )

    return (
        <div ref={container} className='overflow-hidden'>
            {/* Upper part */}
            <div className='container pt-28 flex flex-col justify-center items-center gap-10 leading-[67.6px]'>
                {/* <Button
                    borderColor="#7000DD"
                    textColor="#7000DD"
                    text="Our Vehicles"
                /> */}
                <TextAnimation animationOnScrool="false">
                    <div className='text-[3.25rem] font-[500] w-[55%] text-center mt-9'>Wheels That <span className='text-[#0000006B]'>Spark Joy!</span></div>
                </TextAnimation>
            </div>

            {/* Lower part */}
            <div className='flex flex-row gap-10 py-20 overflow-visible justify-center items-center'>
                <div className='item rounded-[12px] border-2 border-[#7000DD] h-[406px] w-[280px] overflow-hidden'>
                    <Image
                        src={img}
                        alt="Testimonial"
                        width={1000}
                        height={1000}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='item rounded-[12px] border-2 border-[#7000DD] h-[406px] w-[280px] overflow-hidden'>
                    <Image
                        src={img}
                        alt="Testimonial"
                        width={1000}
                        height={1000}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='item rounded-[12px] border-2 border-[#7000DD] h-[406px] w-[280px] overflow-hidden'>
                    <Image
                        src={img}
                        alt="Testimonial"
                        width={1000}
                        height={1000}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='item rounded-[12px] border-2 border-[#7000DD] h-[406px] w-[280px] overflow-hidden'>
                    <Image
                        src={img}
                        alt="Testimonial"
                        width={1000}
                        height={1000}
                        className='h-full w-full object-cover'
                    />
                </div>
    
            </div>

        </div>
    )
}

export default Testimonial