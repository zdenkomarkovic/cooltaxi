import { navbarLinks } from "@/constants/index";
import Link from "@/node_modules/next/link";
import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-black bg-opacity-50 fixed left-0 right-0 top-0  uppercase text-white font-bold z-50 text-[22px]">
      <nav className="container mx-auto px-[50px] py-5 flex justify-between z-100 items-center">
        <div className="flex gap-8">
          <a
            href="tel:+381691971111"
            className="flex gap-3 items-center  hover:scale-110 bg-white px-3 py-1 border-collapse rounded-full"
          >
            {" "}
            <FcPhoneAndroid className="bg-cool-green border rounded-full w-10 h-10 p-[3px] " />
            <span className="text-black font-bold text-[18px]">
              069/197 11 11
            </span>
          </a>
          <a
            href="tel:+38119711"
            className="flex gap-3 items-center  hover:scale-110  bg-white px-3 rounded-full"
          >
            <FaPhoneAlt className="bg-cool-green border rounded-full w-10 h-10 p-[6px] text-white" />
            <span className="text-black font-bold text-[18px]">19711</span>
          </a>
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-3 items-center hover:scale-110 bg-white px-3  border-collapse rounded-full"
          >
            {" "}
            <FaViber className="bg-purple-600 border rounded-full w-10 h-10 p-[5px] text-white" />
            <span className="text-black font-bold text-[18px]">
              065/97 197 11
            </span>
          </a>
        </div>
        <div className="flex gap-5">
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
