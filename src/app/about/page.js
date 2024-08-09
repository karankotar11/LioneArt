'use client'
import AboutDetails from "@/components/about-page-details";
import PopUpMenu from "@/components/PopUpMenu";
import RocketBackToTop from "@/utils/rockethome";
import useScroll from "@/utils/useScroll";
import { useEffect, useState } from "react";




export default function About() {
    
    const {scrollPosition} = useScroll();
    const [isMobile, setisMobile] = useState(false)
    
    
    
    // console.log(isMobile,'mob')
    useEffect(() => {
        if(window.innerWidth<=720)
            {
                setisMobile(true)
            }
            else{
                setisMobile(false)
            }
    }, [])

    const scrollPos = isMobile ? scrollPosition * 0.5 : scrollPosition * 0.7;
    console.log(scrollPos)
    
    
    


    // console.log(displayPopUpMenu)
    return (
        <>

            <AboutDetails scrollPos={scrollPos}  />


            <PopUpMenu />
            <RocketBackToTop scrollPos={scrollPos}/>
            
        </>
    )
}