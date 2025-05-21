import React from 'react'
import TextAnimation from '../animation/TextAnimation'
import VideoParallax from '../animation/VideoParallex'

function HeroSection() {
    return (
        <div className="h-screen bg-black relative overflow-hidden">
            <video src="/images/main-video.webm" autoPlay muted loop className='w-full h-full object-cover opacity-65'></video>
            <div className='absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-black/50'></div>
            <div className='container absolute bottom-10 left-1/2 translate-x-[-50%]'>
                <TextAnimation animationOnScrool={true} delay={0}>
                <h1 className='text-white text-[60px] w-[90%] font-bold leading-[75px] pb-4'>India’s 1st Multi-Solution Shared Mobility Ecosystem</h1>
                <p className='text-white text-lg font-medium'>Now finding sustainable urban transportation has never been so easy.</p>
                </TextAnimation>
                
            </div>
        </div>
    )
}

export default HeroSection