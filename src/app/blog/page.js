'use client'
import TextEditor from "@/components/text-editor";
import { Grid } from "lucide-react";

export default function BlogPage(){
    return(
        <>
        <div className="flex justify-center flex-col items-center min-h-screen gap-2">
            <div className="grid justify-center overflow-hidden max-h-[600px] w-[98%] md:w-[80%] lg:w-[70%] bg-red-100 items-center grid-cols-2">
                <div>
                    <img src="blog2.jpeg" className="h-full"/>
                </div>
                <div className="grid justify-center items-center grid-col-2 gap-2 ">
                    <div className="w-[100%] bg-pink-400">
                        <img src="blog1.jpeg" className="h-[300px]  object-cover"/>
                    </div>
                    <div>
                    <img src="blog3.jpeg" className="h-[300px] w-full"/>
                    </div>
                </div>

            </div>
            {/* <h1>How are you this is blog page</h1> */}
        </div>
        {/* <TextEditor/> */}
        </>
    )
}