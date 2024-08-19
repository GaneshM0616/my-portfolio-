"use client";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "./ui/button";
import { HomeIcon, UserIcon, CogIcon, MailIcon } from "@heroicons/react/24/outline";


function Header() {
  return (
    <header className="w-full xl:py-2 text-white bg-transparent fixed top-0 left-0 shadow-lg rounded-3xl border border-gray-300/40 backdrop-blur-lg">
      <div className="container flex items-center justify-between px-4 xl:px-6">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ganesh<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop and laptop nav */}
        <div className="hidden xl:flex gap-10 flex-grow">
          <Navbar />
        </div>

        {/* Mobile nav with icons */}
        <div className="xl:hidden flex gap-4">
          <Link href="/">
            <HomeIcon className="h-6 w-6 text-white hover:text-accent transition-colors duration-300 ease-in-out" />
          </Link>
          <Link href="/about">
            <UserIcon className="h-6 w-6 text-white hover:text-accent transition-colors duration-300 ease-in-out" />
          </Link>
          <Link href="/services">
            <CogIcon className="h-6 w-6 text-white hover:text-accent transition-colors duration-300 ease-in-out" />
          </Link>
          <Link href="/contact">
            <MailIcon className="h-6 w-6 text-white hover:text-accent transition-colors duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
