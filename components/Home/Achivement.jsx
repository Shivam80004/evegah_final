"use client"
import React from 'react'
import logo from '@/public/images/logo-svg.svg'
import Image from 'next/image'
import AnimatedButton from '../animation/AnimatedButton'
import arrow from '@/public/images/arrow.svg'
import FourBox from './FourBox'
import FadeUp from '../animation/FadeUp'

function Achievement() {
    return (
        <div className='container mx-auto py-[100px]'>
            {/* Upper Part */}
            <FadeUp className='flex flex-col gap-[20px] justify-center items-center max-w-[800px] mx-auto'>
                <h2 className='text-[52px] not-italic font-bold leading-[130%] tracking-[1.56px] text-center'>
                    <div className='inline-block rounded-[14px] bg-[#CDFF64] h-[75px] w-[245px] m-[-23px] pt-[10px]'>
                        <Image src={logo} alt="logo" width={100} height={100} className='h-[85%] w-full fit-cover' />
                    </div>
                    &nbsp;&nbsp;transforming the transportation of Smart e-bike sharing solutions.
                </h2>

                <p className='max-w-[580px] text-center'>
                    By combining advanced EV technologies, a dedicated mobile app, and a deep commitment to sustainable infrastructure, EVegah is setting new benchmarks in shared electric mobility across India.
                </p>

                <div className='flex flex-row gap-[20px] justify-center items-center'>
                    <div className='flex flex-col gap-[20px] justify-center items-center'>
                        <h3 className='text-[20px] not-italic font-medium leading-[130%] tracking-[1.56px] text-center flex flex-row'>
                            <AnimatedButton
                                borderColor="#000"
                                textColor="#000"
                                flairColor="#633bc6"
                                text="Explore More"
                            />
                            <div className='rounded-full border border-[#000] h-[62px] w-[62px] flex items-center justify-center'>
                                <svg xmlns={arrow} width="29" height="29" viewBox="0 0 23 23" fill="none">
                                    <path d="M0.893388 20.6923C0.502863 21.0828 0.502863 21.716 0.893388 22.1065C1.28391 22.497 1.91708 22.497 2.3076 22.1065L0.893388 20.6923ZM22.3995 1.60042C22.3995 1.04814 21.9518 0.600424 21.3995 0.600424L12.3995 0.600425C11.8472 0.600424 11.3995 1.04814 11.3995 1.60042C11.3995 2.15271 11.8472 2.60042 12.3995 2.60042L20.3995 2.60042L20.3995 10.6004C20.3995 11.1527 20.8472 11.6004 21.3995 11.6004C21.9518 11.6004 22.3995 11.1527 22.3995 10.6004L22.3995 1.60042ZM1.60049 21.3994L2.3076 22.1065L22.1066 2.30753L21.3995 1.60042L20.6924 0.893318L0.893388 20.6923L1.60049 21.3994Z" fill="black" />
                                </svg>
                            </div>
                        </h3>
                    </div>
                </div>
            </FadeUp>

            {/* Lower Part */}
            <FourBox />
        </div>
    )
}

export default Achievement