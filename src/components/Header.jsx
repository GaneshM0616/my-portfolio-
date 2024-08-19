import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "@/components/Navbar";

function Header() {
  return (
    <header className="w-full xl:py-2 text-white bg-transparent fixed top-0 left-0 shadow-lg rounded-b-3xl border border-gray-300/40 backdrop-blur-lg">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className=" p-0 text-4xl font-semibold ml-20">
            Ganesh<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex gap-10">
          <Navbar />
        </div>

        {/* mobile nav */}
      </div>
    </header>
  );
}

export default Header;
