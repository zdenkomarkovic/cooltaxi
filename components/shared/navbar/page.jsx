import { navbarLinks } from "@/constants/index";
import Link from "@/node_modules/next/link";
import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-black bg-opacity-50 fixed left-0 right-0 top-0  uppercase text-white font-bold z-50 text-[22px]">
      <nav className="lg:hidden flex mx-auto px-[10px] py-2 justify-between z-100 items-center">
        <div className="flex flex-col gap-3">
          <a
            href="tel:+381691971111"
            className="flex gap-3 items-center bg-white px-3 h-[35px] rounded-full"
          >
            {" "}
            <FcPhoneAndroid className="w-9 h-8" />
            <span className="text-black font-bold text-[18px]">
              069/197 11 11
            </span>
          </a>
          <a
            href="tel:+38119711"
            className="flex gap-3 items-center bg-white px-3 h-[35px] rounded-full"
          >
            <FaPhoneAlt className=" w-7 h-6  text-cool-green" />
            <span className="text-black font-bold text-[18px]">19711</span>
          </a>
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-3 items-center bg-white px-3 h-[35px] rounded-full"
          >
            {" "}
            <FaViber className="bg-purple-600 rounded-full w-8 h-8 p-[4px] text-white" />
            <span className="text-black font-bold text-[18px]">
              065/97 197 11
            </span>
          </a>
        </div>
        <div className="hidden  gap-5">
          {navbarLinks.map((link, i) => {
            return (
              <Link key={i} href={link.route}>
                <p className="hover:text-cool-green">{link.label}</p>
              </Link>
            );
          })}
          <a
            href="https://www.cooltaxi.rs/prodaja-i-ugradnja-taksimetara/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cool-green"
          >
            servis
          </a>
        </div>
      </nav>
      <nav className="hidden container mx-auto px-[50px] py-5 lg:flex justify-between z-100 items-center">
        <div className="flex gap-8">
          <a
            href="tel:+381691971111"
            className="flex gap-3 items-center  hover:scale-110 bg-white px-3 py-1 border-collapse rounded-full"
          >
            {" "}
            <FcPhoneAndroid className="w-9 h-9" />
            <span className="text-black font-bold text-[18px]">
              069/197 11 11
            </span>
          </a>
          <a
            href="tel:+38119711"
            className="flex gap-3 items-center  hover:scale-110  bg-white px-3 rounded-full"
          >
            <FaPhoneAlt className=" w-7 h-7  text-cool-green" />
            <span className="text-black font-bold text-[18px]">19711</span>
          </a>
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-3 items-center hover:scale-110 bg-white px-3  border-collapse rounded-full"
          >
            {" "}
            <FaViber className="bg-purple-600 rounded-full w-9 h-9 p-[4px] text-white" />
            <span className="text-black font-bold text-[18px]">
              065/97 197 11
            </span>
          </a>
        </div>
        <div className="flex gap-5">
          {navbarLinks.map((link, i) => {
            return (
              <Link key={i} href={link.route}>
                <p className="hover:text-cool-green">{link.label}</p>
              </Link>
            );
          })}
          <a
            href="https://www.cooltaxi.rs/prodaja-i-ugradnja-taksimetara/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cool-green"
          >
            servis
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
