import React from 'react'
import TextAnimation from '../animation/TextAnimation'

function PastRecap() {
  return (
    <div className='container py-28 flex flex-row justify-between items-start leading-[67.6px]'>
        <h1 className='text-center text-2xl font-bold capitalize'>PAST RECAP</h1>
      <TextAnimation animationOnScrool="false">
        <div className='text-[3.25rem] font-[500] w-[60%]'>From finding a way to deal with city pollution <span className='text-[#0000006B]'>to creating a solution for greener planet.</span></div>
    </TextAnimation>
    </div>
  )
}

export default PastRecap