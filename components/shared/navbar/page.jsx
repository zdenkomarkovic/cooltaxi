"use client";

import { navbarLinks } from "@/constants/index";
import Link from "@/node_modules/next/link";
import React, { useState } from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(true);

  const toggleDropdownMenu = () => {
    setDropdownMenu((prev) => !prev);
  };

  return (
    <header className="bg-black bg-opacity-60 fixed left-0 right-0 top-0  uppercase text-white font-bold z-50 text-[22px]">
      <nav className="lg:hidden flex px-[5px] py-3 z-100 ">
        {/* <div className="flex justify-around pb-[15px]">
          <a
            href="tel:+381691971111"
            className="flex items-center border-2 border-cool-green text-cool-green bg-black px-[8px] h-[38px] rounded-full"
          >
            {" "}
            <FcPhoneAndroid className="w-6 h-8" />
            <span className=" text-[17px]">069/1971111</span>
          </a>
          <a
            href="tel:+38119711"
            className="flex gap-[2px] items-center border-2 border-cool-green text-cool-green bg-black px-[3px] h-[35px] rounded-full tracking-tight"
          >
            <FaPhoneAlt className=" w-5 h-6  text-cool-green" />
            <span className=" text-[17px] ">19711</span>
          </a>
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-1 items-center border-2 border-cool-green text-cool-green bg-black px-[8px] h-[38px] rounded-full"
          >
            {" "}
            <FaViber className="bg-purple-600 rounded-full w-6 h-6 p-[3px] text-white" />
            <span className=" text-[17px]  ">065/9719711</span>
          </a>
        </div> */}

        <div onClick={toggleDropdownMenu} className="relative">
          {dropdownMenu ? (
            <RxHamburgerMenu className="text-white w-[50px] h-auto pl-5" />
          ) : (
            <AiOutlineClose className="text-white w-[50px] h-auto pl-5" />
          )}
          <div
            className={` ${
              dropdownMenu && "hidden"
            } absolute flex flex-col mt-3 text-white w-full mx-auto  bg-black bg-opacity-70 rounded-b-3xl`}
          >
            {navbarLinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.route}
                  className="hover:text-cool-green px-5 py-1"
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://www.cooltaxi.rs/prodaja-i-ugradnja-taksimetara/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cool-green px-5 py-1"
            >
              servis
            </a>
          </div>
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
