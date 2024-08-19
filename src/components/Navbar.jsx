"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="flex gap-5 mr-28">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent transition-all duration-300 ease-in-out`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
