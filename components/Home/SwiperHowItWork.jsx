'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './HomeComp.css'

function SwiperHowItWork({ slides = [], className = '' }) {
    return (
        <div className={`relative ${className} styles.swiper-pagination`}>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                slidesPerView={1.5}
                spaceBetween={40}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 3,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="pb-10"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative max-h-[515px] rounded-[40px] bg-[#633BC6] px-[30px] pt-[30px] transition-all duration-500">
                            <div className='flex justify-between items-center gap-[160px] mb-[40px]'>
                                <h4 className='text-[28px] not-italic font-bold leading-normal tracking-[-0.56px] text-white'>{slide.title}</h4>
                                <button className='rounded-[110px] border border-white bg-[rgba(255,255,255,0.12)] p-[16px] cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300'>
                                    <svg xmlns="assets/images/download-icon.svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <path d="M17.375 2.58923C17.375 1.55212 16.5371 0.714233 15.5 0.714233C14.4629 0.714233 13.625 1.55212 13.625 2.58923V16.8099L9.32422 12.5092C8.5918 11.7767 7.40234 11.7767 6.66992 12.5092C5.9375 13.2416 5.9375 14.431 6.66992 15.1635L14.1699 22.6635C14.9023 23.3959 16.0918 23.3959 16.8242 22.6635L24.3242 15.1635C25.0566 14.431 25.0566 13.2416 24.3242 12.5092C23.5918 11.7767 22.4023 11.7767 21.6699 12.5092L17.375 16.8099V2.58923ZM4.25 21.3392C2.18164 21.3392 0.5 23.0209 0.5 25.0892V26.9642C0.5 29.0326 2.18164 30.7142 4.25 30.7142H26.75C28.8184 30.7142 30.5 29.0326 30.5 26.9642V25.0892C30.5 23.0209 28.8184 21.3392 26.75 21.3392H20.8027L18.1484 23.9935C16.6836 25.4584 14.3105 25.4584 12.8457 23.9935L10.1973 21.3392H4.25ZM25.8125 24.6205C26.1855 24.6205 26.5431 24.7686 26.8069 25.0324C27.0706 25.2961 27.2188 25.6538 27.2188 26.0267C27.2188 26.3997 27.0706 26.7574 26.8069 27.0211C26.5431 27.2848 26.1855 27.433 25.8125 27.433C25.4395 27.433 25.0819 27.2848 24.8181 27.0211C24.5544 26.7574 24.4062 26.3997 24.4062 26.0267C24.4062 25.6538 24.5544 25.2961 24.8181 25.0324C25.0819 24.7686 25.4395 24.6205 25.8125 24.6205Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                            <Image src={slide.image} width={400} height={400} alt="download" />
                            <div className='absolute bottom-9 left-[11%] right-[11%] w-fit rounded-[90px] border border-white bg-[#633BC6] p-2'>
                                <p className='text-[16px] not-italic font-normal leading-[130%] tracking-[0.32px] text-white'>{slide.bottomText}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperHowItWork 