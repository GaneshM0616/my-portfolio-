import Link from "../../node_modules/next/link";
import { GoArrowLeft } from "react-icons/go";


export default function NotFound(){
  return(
     <div className="flex justify-center items-center min-h-screen">
      <div className=" mt-36 flex flex-col items-center text-center max-w-lg px-4">
        <h1 className="text-red-600 text-5xl"> Oops!</h1>
        <p className="mt-5 text-lg text-gray-600">It seems you&apos;ve lost your way</p>
        <p className="mt-5 mb-5 text-lg text-gray-500">But don&apos;t worry, I&apos;ll help you get back to Home.</p>
        <Link legacyBehavior href="/">
        <a className="flex  items-center mt-10 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow hover:bg-blue-700 transition duration-300">
        <span className="mr-2"><GoArrowLeft /></span>Take Me Home
        </a>
        </Link>
      </div>
     </div>
  )
}
