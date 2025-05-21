import Image from 'next/image'
import React from 'react'
import bg from '@/public/images/info-bg.png'
import Button from '../comman/Button1'
import ImgParallex from '../animation/ImgParallex'

function Information() {
    return (
        <div className='container py-28'>

            <div className='border rounded-[32px] w-full h-[95vh] bg-amber-300 flex flex-row p-9 py-20 items-start justify-between relative' >

                <Image src={bg} width={1240} height={1120} className='h-full w-full object-cover rounded-[32px] absolute bottom-0 left-0 z-0' alt="Information backgound" />
                <div className='absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 rounded-[32px]' ></div>

                {/* Left Side */}
                <div className='z-10 flex flex-col gap-32 w-[30%]'>

                    <Button
                        borderColor="#FFFFFF"
                        textColor="#ffff"
                        text="Infrastructure"
                    />

                    <h4 className='text-[28px] not-italic font-bold leading-normal tracking-[-0.56px] text-white'>What we are</h4>

                    <h4 className='text-[28px] not-italic font-bold leading-normal tracking-[-0.56px] text-white'>Our Mission</h4>

                </div>

                {/* Right Side */}
                <div className='z-10 flex flex-col items-end justify-between gap-60 w-[60%]'>

                    <h4 className='text-[28px] not-italic font-bold leading-normal tracking-[-0.56px] text-white'>About Us</h4>

                    <div>
                        <h1 className='text-white text-[50px] w-[90%] font-medium leading-[60px] pb-4'>EVegah Mobility: Powering India’s Green Transportation Revolution.</h1>
                        <p className='text-white text-lg font-medium'>we are India’s answer to innovative electric bike sharing and smart mobility solutions. From cutting-edge IoT electric vehicle technology to eco-friendly Made in India electric vehicles, we bring the perfect mix of sustainability and convenience to every ride.</p>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Information