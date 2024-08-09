'use client'

import ImagesScroll from "@/components/home-intro";
import LeftSlide from "@/components/left-slide";
import PopUpMenu from "@/components/PopUpMenu";
import { playClickSound } from "@/utils/play-click-sound";
import { useRef } from "react";


export default function Home() {
  const exploreSectionRef = useRef(null);
  const scrollleftSectoion = useRef(null);
  
  const handleExploreClick = () => {
    
      if (exploreSectionRef.current) {
        exploreSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      playClickSound()
    };
  const handleExploreMoreClick = () => {
    playClickSound()
      if (exploreSectionRef.current) {
        scrollleftSectoion.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center h-screen">

          <h1 className="align-middle font-bold  text-white text-3xl mb-2">Welcome to LioneArt </h1>
          <button className="bg-white font-bold text-[#8A63F0] mb-24   border-2 px-3 py-2 rounded items-center" onClick={handleExploreClick}>Explore Site!</button>
        </div>
      </div>
      <ImagesScroll  ref1={exploreSectionRef} handleExploreMoreClick={handleExploreMoreClick}/>
      <LeftSlide scrollref={scrollleftSectoion}/>
      
      <PopUpMenu/>
      
    </>
  );
}
