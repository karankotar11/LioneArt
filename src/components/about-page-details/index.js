import { useEffect, useRef, useState } from "react";
import ServiceInfo from "../services-info";

export default function AboutDetails({scrollPos}) {
    const services = useRef(null);

    const whatOfferRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    function handleScroll() {
        // if (services.current) {
        //     const rect = services.current.getBoundingClientRect();
        //     // Check if the image is in the viewport
        //     if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        //         setIsVisible(true);
        //     } else {
        //         setIsVisible(false);
        //     }
        // }
        setIsVisible(true)
    };

    useEffect(() => {
        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
        // setTimeout(() => {
        //     handleScroll();
        // }, 500);
        if(scrollPos<700){
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    }, [scrollPos]);

    const handleWhatWeOfferClick = () => {
        if (whatOfferRef.current) {
            whatOfferRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            <div className="min-h-screen flex justify-center items-center flex-col w-full overflow-hidden mt-20 px-3 " >

                
                <div className={` transition-all duration-1000  w-full ${scrollPos<200 ? "translate-x-0" : "translate-x-[-200%]"}`} ref={services}>
                    <div className="h-full flex justify-center flex-col items-center ">
                        <h1 className="text-3xl md:text-4xl text-white font-semibold mb-5 text-center">Welcome to LioneArt</h1>
                        <p className="pr-3 text-[15px] md:text-[20px] text-center text-white px-5 max-w-[80%]">    At LioneArt, we specialize in creating stunning user interfaces for websites and captivating graphics tailored specifically for the gaming industry. Our mission is to transform your ideas into visually engaging designs that enhance user experience and elevate brand identity.</p>
                    </div>
                </div>



                {/* style={{transform:`translateX(${(scrollPos)/8}%)`}} */}
                <div className={` transition-all duration-1000  h-auto w-full md:w-[90%] lg:w-[80%] rounded-lg mt-10 pb-0  border-2 ${isVisible ? "translate-x-0" : "translate-x-[200%]"}`} >
                    <div className="h-full gap-10 flex justify-center flex-col items-center mx-5">
                        <h1 className="text-3xl md:text-4xl text-white font-semibold pb-10 mt-10 ">Our Services</h1>
                        <div className="grid justify-center h-full items-center grid-cols-1 gap-5 px-2 ">
                            <div className="grid  justify-center items-center grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden bg-white bg-opacity-10 mb-10 shadow-lg shadow-black/10 backdrop-blur-[5px] border border-white border-opacity-30 ">
                                <div className="px-3 flex justify-center items-center flex-col  overflow-hidden gap-5">
                                    <h3 className="pr-3  text-center mb-2 text-2xl text-white mt-5 px-5 lg:text-4xl ">1. UI Design for Websites</h3>
                                    <button className="bg-white font-bold text-[#8A63F0] mb-5   border-2 px-3 py-2 rounded items-center" onClick={handleWhatWeOfferClick}>What we Offer!</button>
                                </div>
                                <img src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg" className="object-cover h-full w-full" />

                            </div>
                            <div className="grid justify-center items-center grid-cols-1 md:mb-10 md:grid-cols-2 rounded-xl overflow-hidden mt-10 bg-white bg-opacity-10  shadow-lg shadow-black/10 backdrop-blur-[5px] border border-white border-opacity-30">

                                <img src="https://blog.trainocate.com/wp-content/uploads/2022/01/GAMING.png" className="object-cover h-full w-full" />
                                <div className="px-3 flex justify-center items-center flex-col   overflow-hidden gap-5">
                                    <h3 className="pr-3  text-center mb-2 text-2xl text-white mt-5 px-5 lg:text-4xl">2. Graphics for the Gaming Industry</h3>
                                    <button className="bg-white font-bold text-[#8A63F0] mb-5   border-2 px-3 py-2 rounded items-center" >What we Offer!</button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                   <ServiceInfo whatOfferRef={whatOfferRef} scrollPos={scrollPos} />
                  

            </div>
        </>
    );
}
