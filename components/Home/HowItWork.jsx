import React from 'react'
import playstore from '@/public/images/playstore-icon.png'
import applestore from '@/public/images/appstore-icon.png'
import p1 from '@/public/images/download-p1.png'
import Image from 'next/image'
import SwiperHowItWork from './SwiperHowItWork'
import Button from '../Comman/Button'

const data = [
        {
            title: "Download the app",
            image: p1,
            bottomText: "Discover your nearest available vehicle."
        },
        {
            title: "Download the app",
            image: p1,
            bottomText: "Discover your nearest available vehicle."
        },
        {
            title: "Download the app",
            image: p1,
            bottomText: "Discover your nearest available vehicle."
        },      
        {
            title: "Download the app",
            image: p1,
            bottomText: "Discover your nearest available vehicle."
        },
        {
            title: "Download the app",
            image: p1,
            bottomText: "Discover your nearest available vehicle."
        },
        {
            title: "Download the app",
            image: p1,
            bottomText: "Discover your nearest available vehicle."
        },      
]

function HowItWork() {
    return (
        <div className='container mx-auto'>
            {/* <h2 className='h-fit w-fit px-[27px] py-[16px] text-2xl font-bold capitalize rounded-[100px] border border-[#7000DD] text-[#7000DD]'>How It Works ?</h2> */}
            <Button
                borderColor="#7000DD"
                textColor="#7000DD"
                text="How It Works ?"
            />
            <div className='rounded-[40px] border border-[#5231A6] bg-[#F5F4FE] text-black pl-[60px] py-[30px] mt-[22px] flex justify-between items-center gap-[80px]'>

                {/* Content Part */}
                <div className='max-w-[482px] flex gap-[16px] flex-col'>
                    <h3 className='text-[52px] not-italic font-bold leading-[130%] tracking-[1.56px]'>Your Journey Begins Here</h3>
                    <p className='text-[16px] not-italic font-normal leading-[130%] tracking-[0.32px]'>Ready to explore, book, and ride with ease? Download the EVegah app today and unlock an integrated experience</p>
                    <p className='text-[16px] not-italic font-normal leading-[130%] tracking-[0.32px]'>Download now on Android and iOS and join the EVegah revolution</p>
                    <div className='flex gap-[6px]'>
                        <button className=''>
                            <Image src={playstore} width={150} height={100} alt="playstore" />
                        </button>
                        <button className=''>
                            <Image src={applestore} width={150} height={100} alt="applestore" />
                        </button>
                    </div>
                    <p className='text-[16px] not-italic font-normal leading-[130%] tracking-[0.32px] mt-[44px]'>Where every ride charges up your day and our journey together lights the way to a greener tomorrow!</p>
                </div>

                {/* Crousal Part */}
                <div className='max-w-[50%] relative'>

                    <SwiperHowItWork
                        slides={data}
                    />

                    <div className='absolute z-50 top-0 left-0 w-[6%] h-full bg-gradient-to-l from-[#F5F4FE] to-[#F5F4FE]'></div>
                    
                </div>

            </div>
        </div>
    )
}

export default HowItWork