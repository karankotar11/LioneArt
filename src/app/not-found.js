import Link from "next/link"

function PageNotFound(){
    return(
        <>
        <div className="flex min-h-screen justify-center items-center">
                <div className="flex gap-2 flex-col" >
                <h1 className="text-2xl text-white">404 | Page not Found !</h1>
                <Link href={'/'} className="px-2 font-semibold py-2 text-center bg-white rounded-lg">Go to Home Page</Link>
                </div>

        </div>
            
        </>
    )
}
export default PageNotFound