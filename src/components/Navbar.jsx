"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col xl:flex-row gap-5 xl:gap-10">
      <Link
        href="/"
        className={`${
          pathName === "/" ? "text-accent border-b-2 border-accent" : ""
        } capitalize font-medium hover:text-accent transition-colors duration-300 ease-in-out`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`${
          pathName === "/about" ? "text-accent border-b-2 border-accent" : ""
        } capitalize font-medium hover:text-accent transition-colors duration-300 ease-in-out`}
      >
        About
      </Link>

      <Link
        href="/services"
        className={`${
          pathName === "/services" ? "text-accent border-b-2 border-accent" : ""
        } capitalize font-medium hover:text-accent transition-colors duration-300 ease-in-out`}
      >
        Services
      </Link>

      <Link
        href="/contact"
        className={`${
          pathName === "/contact" ? "text-accent border-b-2 border-accent" : ""
        } capitalize font-medium hover:text-accent transition-colors duration-300 ease-in-out`}
      >
        <Button className="rounded-2xl border border-accent">Contact me</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
