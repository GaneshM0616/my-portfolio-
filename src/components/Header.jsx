"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
//import { FaHome, FaUser } from "react-icons/fa";
//import { MdHomeRepairService } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
//import { PiSuitcaseSimple } from "react-icons/pi";
import { TbCodeCircle2 } from "react-icons/tb";

function Header() {
  return (
    <header
      className="mt-10 w-[75%] mx-auto xl:py-2 xl:w-[75%] px-3 sticky top-0 text-white bg-transparent left-0 right-0 shadow-lg rounded-3xl border border-gray-300/40 backdrop-blur-lg
    sm:w-[100%] py-2"
    >
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-accent to-transparent h-px" />
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className=" sm:mr-2 p-0 text-xl font-semibold">
            Ganesh<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Full navigation for larger screens */}
        <div className="hidden xl:flex gap-10">
          <Navbar />
        </div>

        {/* Icon buttons for smaller screens */}
        <div className="flex sm:gap-6 xl:hidden gap-4">
          <Link href="/">
            {/* <FaHome size={20} /> */}
            <IoHomeOutline size={21} />
          </Link>
          <Link href="/about">
            {/* <FaUser size={20} /> */}
            <FiUser size={21} />
          </Link>
          <Link href="/services">
            <TbCodeCircle2 size={21} />
          </Link>
          <Link href="/contact">
            <AiOutlineSetting size={21} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
