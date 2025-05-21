// "use client"
// import React, { useEffect, useRef } from 'react'

// function HowItWorkSample() {

//     const containerRef = useRef(null);
//     const highlightRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         const highlight = highlightRef.current;
//         const items = container.querySelectorAll(".items");
//         const firstItem = container.querySelector(".items");

//         const moveToElement = (element) => {
//             if (element) {
//                 const rect = element.getBoundingClientRect();
//                 const containerRect = container.getBoundingClientRect();

//                 highlight.style.transform = `translate(${rect.left - containerRect.left}px, ${rect.top - containerRect.top}px)`;
//                 highlight.style.width = `${rect.width}px`;
//                 highlight.style.height = `${rect.hight}px`;
//                 highlight.style.backgroundColor = "#C2BDF5"
//             }
//         }

//         const moveHighlight = (e) => {
//             const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

//             if (hoveredElement && hoveredElement.classList.contains("items")) {
//                 moveToElement(hoveredElement);
//             }
//             else if (
//                 hoveredElement.parentElement && hoveredElement.parentElement.classList.contains("items")
//             ) {
//                 moveToElement(hoveredElement.parentElement);
//             }
//         }

//         moveToElement(firstItem);

//         container.addEventListener("mousemove", moveHighlight);

//         return ()=>{
//             container.removeEventListener("mousemove", moveHighlight);
//         }

//     }, []);

//     return (
//         <div className='container py-[100px]'>
//             <div ref={containerRef} className='flex items-center justify-between relative'>

//                 <div className='items h-[300px] w-[300px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

//                     <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

//                     <div className='h-[70%] w-[85%] relative z-10'>
//                         <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
//                     </div>

//                 </div>

//                 <div className='items h-[300px] w-[300px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

//                     <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

//                     <div className='h-[70%] w-[85%] relative z-10'>
//                         <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
//                     </div>

//                 </div>

//                 <div className='items h-[300px] w-[300px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

//                     <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

//                     <div className='h-[70%] w-[85%] relative z-10'>
//                         <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
//                     </div>

//                 </div>

//                 <div className='items h-[300px] w-[300px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

//                     <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

//                     <div className='h-[70%] w-[85%] relative z-10'>
//                         <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
//                     </div>

//                 </div>

//                 <div className='items h-[300px] w-[300px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

//                     <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

//                     <div className='h-[70%] w-[85%] relative z-10'>
//                         <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
//                     </div>

//                 </div>

//                 <div ref={highlightRef} className='highlight absolute h-[300px] w-[300px] border border-[#5231A6] rounded-[40px] pointer-events-none transition-all ease-in-out duration-500 bg-blend-difference'>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default HowItWorkSample


"use client"
import React, { useEffect, useRef } from 'react'

function HowItWorkSample() {

    const containerRef = useRef(null);
    const highlightRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const highlight = highlightRef.current;
        const items = container.querySelectorAll(".items");
        const firstItem = container.querySelector(".items");

        const moveToElement = (element) => {
            if (element) {
                const rect = element.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                highlight.style.transform = `translate(${rect.left - 8.6*containerRect.left}px, ${rect.top - containerRect.top}px)`;
                highlight.style.width = `${rect.width}px`;
                highlight.style.height = `${rect.hight}px`;
                highlight.style.backgroundColor = "#C2BDF5"
            }
        }

        const moveHighlight = (e) => {
            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

            if (hoveredElement && hoveredElement.classList.contains("items")) {
                moveToElement(hoveredElement);
            }
            else if (
                hoveredElement.parentElement && hoveredElement.parentElement.classList.contains("items")
            ) {
                moveToElement(hoveredElement.parentElement);
            }
        }

        moveToElement(firstItem);

        container.addEventListener("mousemove", moveHighlight);

        return ()=>{
            container.removeEventListener("mousemove", moveHighlight);
        }

    }, []);

    return (
        <div className='container py-[100px]'>
            <div ref={containerRef} className='flex flex-col items-center justify-between relative'>
                
                <div className='flex items-center justify-center '>
                    
                <div className='items h-[400px] w-[400px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

                    <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

                    <div className='h-[70%] w-[85%] relative z-10'>
                        <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
                    </div>

                </div>

                <div className='items h-[400px] w-[400px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

                    <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

                    <div className='h-[70%] w-[85%] relative z-10'>
                        <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
                    </div>

                </div>

                <div className='items h-[400px] w-[400px] border border-[#5231A6] rounded-[40px] overflow-hidden flex flex-col items-center justify-center'>

                    <h1 className='text-center text-2xl font-bold capitalize relative z-10'>Download App</h1>

                    <div className='h-[70%] w-[85%] relative z-10'>
                        <img src="/images/scan.png" className='h-full w-full object-cover' alt="" />
                    </div>

                </div>

                </div>


                <div ref={highlightRef} className='highlight absolute h-[400px] w-[40px] border border-[#5231A6] rounded-[40px] pointer-events-none transition-all ease-in-out duration-500 bg-blend-difference'>

                </div>

            </div>
        </div>
    )
}

export default HowItWorkSample