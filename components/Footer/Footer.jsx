import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import logo from '@/public/images/logo-white.png';

const Footer = () => {
  return (
    <div className='h-[50vh] pt-24 pb-8 text-white bg-black text-center text-2xl fixed bottom-0 left-0 w-full -z-50 '>

      <div className='h-[30vh] w-[53vw] mx-auto'>
          <Image src={logo} alt='logo' width={2000} height={1000} className='brightness-200 h-full w-full object-cover' />
      </div>

    </div>
  )
}

export default Footer