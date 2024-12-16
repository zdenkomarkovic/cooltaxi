"use client";

import { navbarLinks } from "@/constants/index";
import Link from "@/node_modules/next/link";
import React, { useState } from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(true);

  const toggleDropdownMenu = () => {
    setDropdownMenu((prev) => !prev);
  };

  return (
    <header className="bg-black bg-opacity-60 fixed left-0 right-0 top-0   text-white  z-50 text-[20px]">
      <nav className="lg:hidden px-[5px] py-3 z-100 ">
        <div onClick={toggleDropdownMenu} className="relative">
          {dropdownMenu ? (
            <RxHamburgerMenu className="text-white w-[50px] h-auto pl-5" />
          ) : (
            <AiOutlineClose className="text-white w-[50px] h-auto pl-5" />
          )}
          <div
            className={` ${
              dropdownMenu && "hidden"
            } absolute flex flex-col mt-3 text-white w-full mx-auto  bg-black bg-opacity-90 rounded-b-3xl`}
          >
            {navbarLinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.route}
                  className="hover:text-cool-green px-5 py-[9px]"
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
              Servis
            </a>
          </div>
        </div>
      </nav>
      <nav className="hidden container mx-auto px-[50px] py-[5px] lg:flex justify-between z-100 items-center">
        <Image
          src={"/cool_logo.png"}
          width={75}
          height={20}
          alt={"cool-logo"}
          className="rounded-full"
        />
        <div className="flex gap-8">
          <a
            href="tel:+381691971111"
            className="flex gap-3 items-center  hover:scale-110  px-3 py-1 bg-black border-2 border-cool-green text-white rounded-full"
          >
            <Image
              src={"/yettel-logo.png"}
              width={36}
              height={36}
              alt={"logo"}
              className="rounded-lg"
            />

            <span className="font-bold text-[20px]">069/197 11 11</span>
          </a>
          <a
            href="tel:+38119711"
            className="flex gap-3 items-center  hover:scale-110   bg-black border-2 border-cool-green text-white px-3 rounded-full"
          >
            <FaPhoneAlt className=" w-7 h-7  text-cool-green" />
            <span className="font-bold text-[20px]">19711</span>
          </a>
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-3 items-center hover:scale-110  bg-black border-2 border-cool-green text-white px-3 rounded-full"
          >
            <Image
              src={"/mts-logo.png"}
              width={60}
              height={50}
              alt={"logo"}
              className="bg-white px-[7px] py-[3px] rounded-md"
            />
            <span className="font-bold text-[20px]">065/97 197 11</span>
            <FaViber className="bg-purple-600 rounded-full w-9 h-9 p-[4px] text-white" />
          </a>
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-3 items-center hover:scale-110  bg-black border-2 border-cool-green text-white px-3 rounded-full"
          >
            <Image
              src={"/a1-logo.png"}
              width={34}
              height={30}
              alt={"logo"}
              className="bg-white rounded-lg"
            />

            <span className="font-bold text-[20px]">065/97 197 11</span>
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
        </div>
        <a
          href="https://www.cooltaxi.rs/prodaja-i-ugradnja-taksimetara/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cool-green"
        >
          Servis
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
