'use client'
import { AlarmCheck, CornerDownRight, Pen, Plus, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";


export default function PopUpMenu() {
    const [displayPopUpMenu, setdisplayPopUpMenu] = useState(false);
    const togglePopUpMenu = () => {
        setdisplayPopUpMenu(prevState => !prevState);
    };
    const handleClickOutside = (event) => {
        if (PopUpMenuRef.current && !PopUpMenuRef.current.contains(event.target)) {
            setdisplayPopUpMenu(false);
        }
    };
    const PopUpMenuRef = useRef(null)
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };
    }, []);
    // console.log(displayPopUpMenu)
    return (
        <>
         {displayPopUpMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[5]" onClick={handleClickOutside}></div>
            )}
            <div className={`fixed bottom-0 w-full right-0 px-2 z-[10] py-[4px]`}>
                <div className="h-auto w-auto relative " ref={PopUpMenuRef}>

                    <div className="flex justify-center items-center absolute h-12 w-12 bg-white bottom-0 rounded-full right-0 m-2 group" onClick={togglePopUpMenu}>
                        {
                            displayPopUpMenu ? <X className="transition-all font-extrabold  duration-300 delay-500" /> : <Plus className="transition-opacity font-extrabold  duration-300" />
                        }
                    </div>
                    <div className={`flex justify-center items-center absolute h-10 w-10 text-[#9C54F3] bg-slate-100   transition-all duration-500 delay-75  ${displayPopUpMenu ? ' bottom-16 right-0 opacity-100 ' : ' bottom-0 right-0 z-[-1] opacity-0'}  rounded-full m-3`} >
                        <AlarmCheck />
                    </div>
                    <div className={`flex justify-center items-center absolute h-10 w-10 text-[#9C54F3] bg-slate-100  transition-all duration-500 delay-150    ${displayPopUpMenu ? ' bottom-12 right-12 opacity-100 ' : ' bottom-0 right-[0] z-[-1] opacity-0'} rounded-full m-3`}>
                        <Pen />
                    </div>
                    <div className={`flex justify-center items-center absolute h-10 w-10 text-[#9C54F3] bg-slate-100  transition-all duration-500 delay-300   ${displayPopUpMenu ? ' bottom-0 right-16 opacity-100 z-[40]' : ' bottom-0 right-[0] z-[-1] opacity-0'} rounded-full m-3`}>
                           <CornerDownRight/>
                    </div>
                    <div className={`flex justify-center items-center absolute h-10 w-10 text-[#9C54F3] bg-slate-100  transition-all duration-500 delay-150   ${displayPopUpMenu ? ' bottom-0 left-0 opacity-100 z-[40]' : ' bottom-0 left-[-10%] z-[-1] opacity-0'} rounded-full m-3`}>
                           <Send/>
                    </div>
                    <div className={`flex justify-center items-center absolute h-10 w-10 text-[#9C54F3] bg-slate-100  transition-all duration-500 delay-300   ${displayPopUpMenu ? ' bottom-12 left-0 opacity-100 z-[40]' : ' bottom-12 left-[-10%] z-[-1] opacity-0'} rounded-full m-3`}>
                           <CornerDownRight/>
                    </div>

                </div>
                <div>

                </div>
            </div>
        </>
    )
}