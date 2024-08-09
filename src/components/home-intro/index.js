import { Mail, MapPin, Phone } from "lucide-react"
import { useAmp } from "next/amp";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";


export default function ImagesScroll({ ref1, handleExploreMoreClick }) {
    const phoneNumber = "9664787828";
    const [flyIron, setflyIron] = useState(false)
    const launch = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(true,'kjhkyh');
                        setflyIron(true);
                    }
                    else{
                        // console.log(false,'kjhkyh');
                    
                    }
                });
            },
            { threshold: 1.0 } // Adjust the threshold as needed
        );

        if (launch.current) {
            observer.observe(launch.current);
            console.log('yess')
        }

        return () => {
            if (launch.current) {
                observer.unobserve(launch.current);
            }
        };
    }, []);
    
    const imagesList = [
        "https://media.istockphoto.com/id/1128893480/photo/heavy-metal-mind.webp?b=1&s=170667a&w=0&k=20&c=KzNe8fmKhZQ9xLrgp_TYVTkU8R5Pyv6IUJ221csLMEc=",
        "https://media.istockphoto.com/id/1271513829/photo/cyberpunk-soldier-city-patrol.webp?b=1&s=170667a&w=0&k=20&c=yA83Gbo52kmEt84lnGicidAHVWSG8bs6xaBvo0jmNTs=",
        "https://images.unsplash.com/photo-1644898262501-6e73916dce2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    return (
        <>
            <div className="flex flex-row h-full justify-center items-center pt-20 border-t mb-20 b" ref={ref1}>


                <div className="grid h-[80%] mt-20 lg:mt-0 lg:h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] sm:w-[70%] lg:min-w-[80%] md:w-[80%] gap-10 lg:gap-5 md:gap-3 items-center justify-center  ">

                    <div className="shadow-md relative overflow-hidden rounded-lg shadow-red-200 group">

                        <div className="relative ">
                            <img src={imagesList[0]} alt="No image found" className="h-[500px] w-full rounded-lg object-cover" />
                        </div>
                        <div className="absolute h-full w-full bottom-[-500px] group-hover:bottom-[-280px] transition-all duration-[1s] delay-0 bg-white bg-opacity-10  shadow-lg shadow-black/10 backdrop-blur-[5px] border border-white border-opacity-30">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-white font-semibold text-2xl translate-y-[-30px] group-hover:translate-y-0 group-hover:opacity-[1] delay-[1s] opacity-0 transition-all mt-10">Gaming Graphics</h1>
                                <ul className="flex justify-center gap-5 py-3 text-white font-medium ">

                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition delay-[0.5s]"><Link href="mailto:karankotar11@gmail.com"><Mail /></Link></li>
                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition delay-[1.5s]"><Link href={`tel:${phoneNumber}`}><Phone /></Link></li>
                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition delay-[2s]"><Link href="https://www.google.com/maps/place/Surat,+Gujarat/@21.153597,72.8116532,11z/data=!4m6!3m5!1s0x3be04e59411d1563:0xfe4558290938b042!8m2!3d21.1702401!4d72.8310607!16zL20vMDFoMWhu?entry=ttu"><MapPin /></Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md relative overflow-hidden rounded-lg shadow-red-200 group">

                        <div className="relative ">
                            <img src={imagesList[2]} alt="No image found" className="h-[500px]  w-full rounded-lg object-cover" />
                        </div>
                        <div className="absolute h-full w-full bottom-[-500px] group-hover:bottom-[-280px] transition-all duration-[1s] delay-0 bg-white bg-opacity-10  shadow-lg shadow-black/10 backdrop-blur-[5px] border border-white border-opacity-30">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-white font-semibold text-2xl translate-y-[-20px] group-hover:translate-y-0 group-hover:opacity-[1] delay-[1s] opacity-0 transition-all mt-10">Gaming Graphics</h1>
                                <ul className="flex justify-center gap-5 py-3 text-white font-medium ">

                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition-all delay-[1s]"><Link href="mailto:karankotar11@gmail.com"><Mail /></Link></li>
                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition-all delay-[1.5s]"><Link href={`tel:${phoneNumber}`}><Phone /></Link></li>
                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition-all delay-[2s]"><Link href="https://www.google.com/maps/place/Surat,+Gujarat/@21.153597,72.8116532,11z/data=!4m6!3m5!1s0x3be04e59411d1563:0xfe4558290938b042!8m2!3d21.1702401!4d72.8310607!16zL20vMDFoMWhu?entry=ttu"><MapPin /></Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md relative overflow-hidden rounded-lg shadow-red-200 group" ref={launch}>

                        <div className="relative ">
                            <img src={imagesList[1]} alt="No image found" className="h-[500px] w-full  rounded-lg object-cover" />
                        </div>
                        <div className="absolute h-full w-full bottom-[-500px] group-hover:bottom-[-280px] transition-all duration-[1s] delay-0 bg-white bg-opacity-10  shadow-lg shadow-black/10 backdrop-blur-[5px] border border-white border-opacity-30">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-white font-semibold text-2xl translate-y-[-20px] group-hover:translate-y-0 group-hover:opacity-[1] delay-[1s] opacity-0 transition-all mt-10">Gaming Graphics</h1>
                                <ul className="flex justify-center gap-5 py-3 text-white font-medium ">

                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition-all  delay-[0.5s]"><Link href="mailto:karankotar11@gmail.com"><Mail /></Link></li>
                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition-all delay-[1s]"><Link href={`tel:${phoneNumber}`}><Phone /></Link></li>
                                    <li className="translate-y-[40px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 transition-all delay-[1.5s]"><Link href="https://www.google.com/maps/place/Surat,+Gujarat/@21.153597,72.8116532,11z/data=!4m6!3m5!1s0x3be04e59411d1563:0xfe4558290938b042!8m2!3d21.1702401!4d72.8310607!16zL20vMDFoMWhu?entry=ttu"><MapPin /></Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex  col-span-full items-center justify-center " >
                        <button className="bg-white font-bold text-[#8A63F0] mb-24   border-2 px-3 py-2 rounded items-center" onClick={handleExploreMoreClick}>Explore More!</button>
                    </div>

                </div>

            </div>
            <div className={`fixed -right-44 bottom-0 transition ease-out delay-150 duration-[8s] md:duration-[2s] ${flyIron ? 'translate-y-[-100vh]  translate-x-[-1200px] scale-75' : ' '} `}>
                <div className="">
                    <img src="ironman.png" className="h-32 " />
                </div>

            </div>




        </>
    )
}