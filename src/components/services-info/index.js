
import { Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ServiceInfo({ whatOfferRef, scrollPos }) {
    const services = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    


    useEffect(() => {
        if (scrollPos > 800) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }, [scrollPos]);

    return (
        <>
            <div className="flex text-white justify-center h-auto w-full items-center flex-col md:w-[90%] lg:w-[80%]  bg-white mt-32 backdrop-blur-[3px] bg-opacity-25 mb-10 py-20 px-5 border-2 rounded-lg" ref={whatOfferRef}>


                <div>
                    <h1 className="text-3xl md:text-4xl text-white text-center mb-5 mt-10">Websites UI Designs</h1>
                    <p className="text-[15px] md:text-[20px] w-full px-3 text-black md:px-20 text-center mb-20">In the digital world, your website is often the first point of contact with your audience. Our expert UI designers focus on crafting intuitive and aesthetically pleasing interfaces that guide users seamlessly through your content. We prioritize usability and accessibility while ensuring that every design reflects your brand’s personality.</p>

                </div>

                <h3 className="text-3xl text-white tracking-wider mb-10">We Offering!</h3>
                <div className="grid min-h-[100%] w-full md:w-[90%] grid-cols-1  justify-center items-center gap-2 md:gap-3 mb-0">
                    <div className="grid grid-cols-3  justify-center items-center text-center border-zinc-600 border-2 border-opacity-20 rounded-lg  h-full overflow-hidden w-full">
                        <div className="w-full col-span-2">
                            <h1 className={`text-[13px] sm:text-[18px] p-1 md:text-[20px] lg:text-[25px] transition-all duration-700 ${isVisible ? 'translate-x-0 ' : 'translate-x-[-100%]'}`}>Custom UI design tailored to your brand</h1>
                        </div>
                        <div className=" flex justify-end h-full ">
                            <img
                                src="https://cdn.kwork.com/pics/t3/21/28935711-64f442f187748.jpg"
                                className={`h-full w-[230px] object-cover transition-all duration-700 ${isVisible ? 'translate-x-0 ' : 'translate-x-[101%]'}`}
                            />
                        </div>

                    </div>
                    <div className="grid grid-cols-3 relative justify-center items-center text-center border-zinc-600 border-2 border-opacity-20 rounded-lg  h-full overflow-hidden w-full">

                        <div className="w-auto h-full ">
                            <img
                                src="https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?t=st=1723033900~exp=1723037500~hmac=a3598097a40d1b2a905d0e6c0b41fad1c84b9f7d7af02e10b28f8016de24d480&w=1380"
                                className={`h-full w-[230px] object-cover transition-all duration-700 delay-150 ${isVisible ? 'translate-x-0 ' : 'translate-x-[-100%]'}`}
                            />
                        </div>
                        <div className="flex justify-center items-center col-span-2 w-full ">
                            <h1 className={`text-[13px] sm:text-[18px] p-1 md:text-[20px] lg:text-[25px] transition-all duration-700 ${isVisible ? 'translate-x-0 ' : 'translate-x-[101%]'}`}>Responsive designs for optimal performance across devices</h1>
                        </div>

                    </div>
                    <div className="grid grid-cols-3  justify-center items-center text-center border-zinc-600 border-2 border-opacity-20 rounded-lg  h-full overflow-hidden w-full">
                        <div className="w-full col-span-2">
                            <h1 className={`text-[13px] sm:text-[18px] p-1 md:text-[20px] lg:text-[25px] transition-all duration-700 ${isVisible ? 'translate-x-0 ' : 'translate-x-[-100%]'}`}>User-centered design approach focusing on usability</h1>
                        </div>
                        <div className=" flex justify-end  h-full  ">
                            <img
                                src="https://www.questionpro.com/blog/wp-content/uploads/2022/05/user-centered-design.jpg"
                                className={`h-full w-[230px] object-cover transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 ' : 'translate-x-[100%]'}`}
                            />
                        </div>

                    </div>
                    <div className="grid grid-cols-3 relative justify-center items-center text-center border-zinc-600 border-2 border-opacity-20 rounded-lg  h-full overflow-hidden w-full">

                        <div className="w-auto h-full  ">
                            <img
                                src="https://assorttech.com/wp-content/uploads/2023/09/Wireframing-and-Prototyping.png"
                                className={`h-full w-[230px] object-cover transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 ' : 'translate-x-[-100%]'}`}
                            />
                        </div>
                        <div className="flex justify-center items-center w-full col-span-2">
                            <h1 className={`text-[13px] sm:text-[18px] p-1 md:text-[20px] lg:text-[25px] transition-all duration-500 ${isVisible ? 'translate-x-0 ' : 'translate-x-[101%]'}`}>Comprehensive wireframing and prototyping services</h1>
                        </div>

                    </div>
                    <div className="grid grid-cols-3  justify-center items-center text-center border-zinc-600 border-2 border-opacity-20 rounded-lg  h-full overflow-hidden w-full">
                        <div className="flex justify-center items-center w-full col-span-2">
                            <h1 className={`text-[13px] sm:text-[18px] p-1 md:text-[20px] lg:text-[25px] transition-all duration-700 ${isVisible ? 'translate-x-0 ' : 'translate-x-[-100%]'}`}>Collaboration throughout the design </h1>
                        </div>
                        <div className=" flex justify-end  h-full">
                            <img
                                src="https://htmlburger.com/blog/wp-content/uploads/2023/12/The-Ultimate-Guide-to-Design-Collaboration-826x464.png"
                                className={`min-h-[150px] w-[230px] object-cover transition-all duration-700 delay-700 ${isVisible ? 'translate-x-0 ' : 'translate-x-[100%]'}`}
                            />
                        </div>

                    </div>
                </div>
                {/* <div className="grid justify-center items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[2px] h-full w-full bg-transparent px-1 py-1 rounded-t-xl bg-zinc-500">
                    <div className="row-span-3 rounded-t-xl sm:rounded-t-xl  md:rounded-l-xl lg:rounded-tl-xl rounded-none overflow-hidden bg-[url('https://media.istockphoto.com/id/1196702694/photo/designers-drawing-website-ux-app-development.webp?b=1&s=170667a&w=0&k=20&c=Ev7q0KlZn1YQJDIxlSAEG40qp4ZsWVS2aMU4nGUp1ho=')] h-full w-full bg-no-repeat bg-cover group">
                        <div className="flex justify-center items-center h-[250px]  md:h-[500px] lg:h-full w-full translate-x-[1200px] transition-all duration-700 group-hover:translate-x-0  bg-white bg-opacity-30 backdrop-blur-[8px] ">
                            <h1 className="text-black text-[15px] md:text-2xl">Custom UI design to your brand</h1>
                        </div>

                    </div>
                    <div className="grid justify-center items-center grid-cols-1 gap-[2px] ">
                        <div className="grid justify-center items-center grid-cols-2  gap-[2px] ">
                            <div className="overflow-hidden bg-[url('https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?t=st=1723033900~exp=1723037500~hmac=a3598097a40d1b2a905d0e6c0b41fad1c84b9f7d7af02e10b28f8016de24d480&w=1380')] h-[100px] md:h-[150px] lg:h-[250px]  w-full bg-no-repeat bg-cover group">
                                <div className="flex justify-center items-center h-[250px]  md:h-[500px] lg:h-full w-full translate-x-[1200px] transition-all duration-700 group-hover:translate-x-0  bg-white bg-opacity-30 backdrop-blur-[8px] ">
                                    <h1 className="text-black text-[15px] md:text-2xl">Responsive</h1>
                                </div>

                            </div>
                            <div className="overflow-hidden bg-[url('https://designwebkit.com/wp-content/uploads/2014/09/ux-factors-website-success-thumb.jpg')] h-[100px] md:h-[150px] lg:h-[250px] lg:rounded-tr-xl w-full bg-no-repeat bg-cover group">
                                <div className="flex justify-center items-center h-[250px]  md:h-[500px] lg:h-full w-full translate-x-[1200px] transition-all duration-700 group-hover:translate-x-0  bg-white bg-opacity-30 backdrop-blur-[8px] ">
                                    <h1 className="text-black text-[15px] md:text-2xl">User Centered</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid justify-center items-center grid-cols-1  gap-[2px]">
                        <div className="grid justify-center items-center grid-cols-2  gap-[2px]">
                            <div className="overflow-hidden bg-[url('https://assorttech.com/wp-content/uploads/2023/09/Wireframing-and-Prototyping-768x578.png')] h-[100px] md:h-[150px] lg:h-[250px]  w-full bg-no-repeat bg-cover group">
                                <div className="flex justify-center items-center h-[250px]  md:h-[500px] lg:h-full w-full translate-x-[1200px] transition-all duration-700 group-hover:translate-x-0  bg-white bg-opacity-30 backdrop-blur-[8px] ">
                                    <h1 className="text-black text-[15px] md:text-2xl">Wireframing and Prototyping</h1>
                                </div>

                            </div>
                            <div className="overflow-hidden bg-[url('https://media.istockphoto.com/id/1196702694/photo/designers-drawing-website-ux-app-development.webp?b=1&s=170667a&w=0&k=20&c=Ev7q0KlZn1YQJDIxlSAEG40qp4ZsWVS2aMU4nGUp1ho=')] h-[100px] md:h-[150px] lg:h-[250px]  w-full bg-no-repeat bg-cover group">
                                <div className="h-full w-full translate-x-[1200px] transition-all duration-700 group-hover:translate-x-0  bg-white bg-opacity-30 backdrop-blur-[8px]">

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid justify-center items-center grid-cols-1  gap-[2px]">
                        <div className="grid justify-center items-center grid-cols-2  gap-[2px]">
                            <div className="overflow-hidden bg-[url('https://media.istockphoto.com/id/1196702694/photo/designers-drawing-website-ux-app-development.webp?b=1&s=170667a&w=0&k=20&c=Ev7q0KlZn1YQJDIxlSAEG40qp4ZsWVS2aMU4nGUp1ho=')] h-[100px] md:h-[150px] lg:h-[250px] w-full bg-no-repeat bg-cover group">
                                <div className="h-full w-full translate-x-[1200px] transition-all duration-700 group-hover:translate-x-0  bg-white bg-opacity-30 backdrop-blur-[8px]">

                                </div>

                            </div>
                            <div className="overflow-hidden bg-[url('https://media.istockphoto.com/id/1196702694/photo/designers-drawing-website-ux-app-development.webp?b=1&s=170667a&w=0&k=20&c=Ev7q0KlZn1YQJDIxlSAEG40qp4ZsWVS2aMU4nGUp1ho=')] h-[100px] md:h-[150px] lg:h-[250px]  w-full bg-no-repeat bg-cover group">
                                <div className="h-full w-full translate-x-[1200px] transition-all duration-700 group-hover:translate-x-0  bg-white bg-opacity-30 backdrop-blur-[8px]">

                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}










            </div>
            
        </>
    )

}