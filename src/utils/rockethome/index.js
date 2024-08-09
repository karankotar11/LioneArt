'use client'
import { Rocket } from "lucide-react";
import { useState } from "react";

export default function RocketBackToTop({ scrollPos }) {
    const [flyrocket, setFlyRocket] = useState(false);
    function handlerocketClick() {
        setFlyRocket(true)
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
        setTimeout(() => {
            setFlyRocket(false)
        }, 2000);



    };
    return (
        <>
            <div className={`fixed bottom-0 left-0 px-5  transition-all duration-[1s] z-[5] delay-0 hover:scale-110  `}
                style={{
                    transform: flyrocket ? 'translateY(-5000px)' : 'translate(0px, 27px)',
                    opacity:flyrocket?'50':'100',
                    transitionDuration:'2s'
                    
                    
                }}
                title="Go to Top"

            >
                {/* <h1 className="rainbow-text ">LioneArt</h1> */}
                {
                    scrollPos >900 ? (
                        <img src="roket.svg" className="w-20 h-20 object-fill cursor-pointer bg-transparent "
                            onClick={handlerocketClick}
                            // style={{transform:'rotate(0deg)',scale:flyrocket?'1.5':'1',}}
                            
                        />
                      
                    )
                        : null

                }
            </div>
        </>

    )
}