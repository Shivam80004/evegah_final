'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo-white.png'
import logoSmall from '@/public/images/logo-small.png'
import downloadIcon from '@/public/images/download-icon.png'
import menu from '@/public/images/menu-button.png'
import arrow from '@/public/images/arrow.svg'
import AnimatedButton from '../animation/AnimatedButton'

function Header() {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsScrollingUp(false);
            } else {
                // Scrolling up
                setIsScrollingUp(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className='fixed top-0 z-50 w-full'>
            <div className='relative'>
                {/* Upper Part */}
                <div className={`absolute top-0 z-50 w-full transition-opacity duration-500 mix-blend-difference ${isScrollingUp ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='bg-[#462A88] h-[39px] w-full flex justify-center items-center'>
                        <h3 className='text-white text-center text-sm font-medium'>Want to see what we're up to Get updates from Evegah.</h3>
                    </div>

                    <div className='container flex justify-between items-center py-4 mix-blend-difference'>
                        <Image src={logo} alt='logo' width={130} height={130} className='brightness-200' />

                        <div className='flex gap-4'>
                            <button className=' text-white px-4 py-2 rounded-md mix-blend-difference'>Contact Us</button>
                            <div className='flex flex-row'>
                                <AnimatedButton
                                    borderColor="#ffffff"
                                    textColor="#000000"
                                    flairColor="#633bc6"
                                    text="Download Now"
                                />
                                {/* <Image src={menu} alt='menu' width={50} height={20} /> */}
                                <div className='rounded-full border bg-white h-[62px] w-[62px] flex items-center justify-center'>
                                    <svg xmlns={arrow} width="22" height="22" viewBox="0 0 23 23" fill="black">
                                        <path d="M0.893388 20.6923C0.502863 21.0828 0.502863 21.716 0.893388 22.1065C1.28391 22.497 1.91708 22.497 2.3076 22.1065L0.893388 20.6923ZM22.3995 1.60042C22.3995 1.04814 21.9518 0.600424 21.3995 0.600424L12.3995 0.600425C11.8472 0.600424 11.3995 1.04814 11.3995 1.60042C11.3995 2.15271 11.8472 2.60042 12.3995 2.60042L20.3995 2.60042L20.3995 10.6004C20.3995 11.1527 20.8472 11.6004 21.3995 11.6004C21.9518 11.6004 22.3995 11.1527 22.3995 10.6004L22.3995 1.60042ZM1.60049 21.3994L2.3076 22.1065L22.1066 2.30753L21.3995 1.60042L20.6924 0.893318L0.893388 20.6923L1.60049 21.3994Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Part */}
                <div className={`inline-flex items-center justify-center px-[11px] py-[10px] pl-[26px] gap-[22px] rounded-[16px] backdrop-blur-3xl bg-[#2A195C]/80 absolute bottom-[-92vh] left-[35%] z-50 w-full max-w-[474px] mx-auto transition-opacity duration-500 ${isScrollingUp ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="logo">
                        <Image src={logoSmall} alt='logo' width={30} height={30} className='brightness-200' />
                    </div>

                    <div className="links flex flex-row gap-4 text-white">
                        <a href="#">About</a>
                        <a href="#">Products</a>
                        <a href="#">Partner</a>
                        <a href="#">Rental</a>
                        <a href="#">Blogs</a>
                    </div>

                    <button className='px-4 py-2 rounded-md bg-white h-[35px] w-[40px]'>
                        <Image src={downloadIcon} alt='download' width={20} height={20} className='h-full w-full object-cover' />
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header