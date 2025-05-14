import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import menu from '@/public/images/menu-button.png'

function header() {
    return (
        <header className='absolute top-0 z-10 w-full'>
            <div className='bg-[#462A88] h-[39px] w-full flex justify-center items-center'>
                <h3 className='text-white text-center text-sm font-medium'>Want to see what we're up to Get updates from Evegah.</h3>
            </div>
            <div className='container flex justify-between items-center py-4'>

                <Image src={logo} alt='logo' width={130} height={130} />

                <div className='flex gap-4'>
                    <button className=' text-white px-4 py-2 rounded-md'>Contact Us</button>
                    <div className='flex flex-row'>
                        <button className='bg-white text-[#B9C0CA] px-4 py-2 rounded-4xl'>Download Now</button>
                        <Image src={menu} alt='menu' width={50} height={20} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header