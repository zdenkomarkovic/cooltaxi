import { navbarLinks } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black bg-opacity-50 fixed left-0 right-0 top-0  uppercase text-white z-50">
      <nav className="container mx-auto py-10 flex justify-around z-100">
        <Image src="/cool_logo.png" width={23} height={23} alt="logo" />
        <div className="flex gap-3">
          {navbarLinks.map((link, i) => {
            return (
              <Link key={i} href={link.route}>
                <p className="">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
