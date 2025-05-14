import React from 'react'
import Button from '../comman/Button1'
import ebike from '@/public/images/ebike.png'
import arrow from '@/public/images/arrow.svg'
import Image from 'next/image'

function ProductCard() {
  return (
    <>
      {/* Upper Part */}
      <div className='container py-28 flex flex-row justify-between items-start leading-[67.6px]'>
        <Button
          borderColor="#7000DD"
          textColor="#7000DD"
          text="Our Vehicles"
        />
        <div className='text-[3.25rem] font-[500] w-[55%]'>Electrify Your Commute with <span className='text-[#0000006B]'>EVegah’s Shared E-Ride Revolution</span></div>
      </div>

      {/* Product Cards */}

      <div className='flex items-center justify-center gap-6'>
        <div className='w-[27.68rem] h-[32.18rem] relative rounded-[40px] bg-[#EBEBEB] px-[30px] pt-[30px] transition-all duration-500'>
          <div className='flex justify-between items-center gap-[160px] mb-[40px]'>
            <h4 className='text-[28px] not-italic font-bold leading-normal tracking-[-0.56px] text-black'>Evegah Mink</h4>
            <div className='rounded-full bg-[#462A88] h-[62px] w-[62px] flex items-center justify-center'>
              <svg xmlns={arrow} width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M20.5692 2.01823C20.5692 1.25991 19.9544 0.645163 19.1961 0.645162L6.83849 0.645162C6.08016 0.645163 5.46542 1.25991 5.46542 2.01823C5.46542 2.77655 6.08017 3.3913 6.83849 3.3913L17.823 3.3913L17.823 14.3758C17.823 15.1341 18.4378 15.7489 19.1961 15.7489C19.9544 15.7489 20.5692 15.1341 20.5692 14.3758L20.5692 2.01823ZM1.80391 19.4104L2.77482 20.3813L20.167 2.98913L19.1961 2.01823L18.2252 1.04732L0.833009 18.4395L1.80391 19.4104Z" fill="#EEEEEE" />
              </svg>
            </div>
          </div>
          <Image src={ebike} width={420} height={120} alt="download" />
          <div className='absolute bottom-9 left-[11%] right-[11%] w-fit rounded-[90px] border border-white bg-white py-2 px-3.5'>
            <p className='text-[16px] not-italic font-normal leading-[130%] tracking-[0.32px] text-black'>Discover your nearest available vehicle.</p>
          </div>
        </div>

        <div className='w-[27.68rem] h-[32.18rem] relative rounded-[40px] bg-[#D9D9D9] px-[30px] pt-[30px] transition-all duration-500'>
          <div className='flex justify-between items-center gap-[160px] mb-[40px]'>
            <h4 className='text-[28px] not-italic font-bold leading-normal tracking-[-0.56px] text-black'>Evegah City</h4>
            <div className='rounded-full bg-[#462A88] h-[62px] w-[62px] flex items-center justify-center'>
              <svg xmlns={arrow} width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M20.5692 2.01823C20.5692 1.25991 19.9544 0.645163 19.1961 0.645162L6.83849 0.645162C6.08016 0.645163 5.46542 1.25991 5.46542 2.01823C5.46542 2.77655 6.08017 3.3913 6.83849 3.3913L17.823 3.3913L17.823 14.3758C17.823 15.1341 18.4378 15.7489 19.1961 15.7489C19.9544 15.7489 20.5692 15.1341 20.5692 14.3758L20.5692 2.01823ZM1.80391 19.4104L2.77482 20.3813L20.167 2.98913L19.1961 2.01823L18.2252 1.04732L0.833009 18.4395L1.80391 19.4104Z" fill="#EEEEEE" />
              </svg>
            </div>
          </div>
          <Image src={ebike} width={420} height={120} alt="download" />
          <div className='absolute bottom-9 left-[11%] right-[11%] w-fit rounded-[90px] border border-white bg-white py-2 px-3.5'>
            <p className='text-[16px] not-italic font-normal leading-[130%] tracking-[0.32px] text-black'>Discover your nearest available vehicle.</p>
          </div>
        </div>

        <div className='w-[27.68rem] h-[32.18rem] relative rounded-[40px] bg-[#EBEBEB] px-[30px] pt-[30px] transition-all duration-500'>
          <div className='flex justify-between items-center gap-[160px] mb-[40px]'>
            <h4 className='text-[28px] not-italic font-bold leading-normal tracking-[-0.56px] text-black'>Evegah King</h4>
            <div className='rounded-full bg-[#462A88] h-[62px] w-[62px] flex items-center justify-center'>
              <svg xmlns={arrow} width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M20.5692 2.01823C20.5692 1.25991 19.9544 0.645163 19.1961 0.645162L6.83849 0.645162C6.08016 0.645163 5.46542 1.25991 5.46542 2.01823C5.46542 2.77655 6.08017 3.3913 6.83849 3.3913L17.823 3.3913L17.823 14.3758C17.823 15.1341 18.4378 15.7489 19.1961 15.7489C19.9544 15.7489 20.5692 15.1341 20.5692 14.3758L20.5692 2.01823ZM1.80391 19.4104L2.77482 20.3813L20.167 2.98913L19.1961 2.01823L18.2252 1.04732L0.833009 18.4395L1.80391 19.4104Z" fill="#EEEEEE" />
              </svg>
            </div>
          </div>
          <Image src={ebike} width={420} height={120} alt="download" />
          <div className='absolute bottom-9 left-[11%] right-[11%] w-fit rounded-[90px] border border-white bg-white py-2 px-3.5'>
            <p className='text-[16px] not-italic font-normal leading-[130%] tracking-[0.32px] text-black'>Discover your nearest available vehicle.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductCard