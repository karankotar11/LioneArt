'use client'

import { useEffect, useRef, useState } from "react";

export default function LeftSlide({scrollref}) {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    // console.log(divRef)
   console.log(isVisible)
    const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };
    const handleScroll = (isScrollingEnabled) => {
        if (!isScrollingEnabled) {
            window.addEventListener('scroll', preventScroll, { passive: false });
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
            window.removeEventListener('scroll', preventScroll);
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }
    };
    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        handleScroll(false);
                        setTimeout(() => {
                            handleScroll(true);
                        }, 3000);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.8 }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }
        handleScroll(true);


        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    return (
        <div ref={scrollref}>
        <div className="flex relative justify-center items-center w-full h-screen   my-10  px-2 border-t  border-gray-200 " ref={divRef} >
            {/* <div className={`absolute flex justify-center items-center mt-72 w-full  transition-all duration-700 delay-200 ${isVisible ? 'left-0 opacity-100 ' : ' left-[-100%] opacity-0'}`} >
                <div className="h-[550px]">
                    <img src="https://media.istockphoto.com/id/1369890290/photo/cyberpunk-urban-samurai.webp?b=1&s=170667a&w=0&k=20&c=AfyqgeRK31i2VBvC8_7a9FEZ8b2fcO53y2R_GjFBTaw=" />
                </div>
            </div> */}
            <div className="relative  w-full flex  justify-center items-center " >

                <h1 className="text-2xl text-white font-mono">Scroll Down</h1>
                <div className={`flex justify-center absolute w-[auto]  right-0 opacity-0 items-center transition-all duration-700 delay-200  ${isVisible ? ' left-[0%] opacity-100 ' : ' left-[-150%] '}`}  >
                    <div className="flex justify-center items-center relative w-[500px] group overflow-hidden rounded-lg bg-green-500">
                        <img
                            src="https://media.istockphoto.com/id/1369890290/photo/cyberpunk-urban-samurai.webp?b=1&s=170667a&w=0&k=20&c=AfyqgeRK31i2VBvC8_7a9FEZ8b2fcO53y2R_GjFBTaw="
                            className={`h-[550px] w-[500px] object-cover shadow-lg shadow-black/10 overflow-hidden `}
                        />


                        <div className="flex absolute flex-row text-center transition-all  duration-[2s] delay-100 group-hover:left-[0%]    left-[-150%]   top-[0]   justify-center items-center h-[550px] w-full bg-purple-600 bg-opacity-10   backdrop-blur-[2.5px]  border-opacity-30">

                            <div className="flex justify-center items-center">
                                <h1 className="flex justify-center items-center text-white font-bold text-2xl text-center translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition-all duration-1000 delay-[2s]">Best UI Designer</h1>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="absolute bottom-[20%] w-full h-20  justify-end items-baseline" >

            </div>
        </div >
        </div>
    );
}