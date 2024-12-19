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
          </div>
        </div>
      </nav>
      <nav className="hidden container mx-auto px-[50px] py-[8px] lg:flex gap-[500px] z-100 items-center">
        <Link href={"/"}>
          <Image
            src={"/cool_logo.png"}
            width={60}
            height={20}
            alt={"cool-logo"}
            className="rounded-full "
          />
        </Link>

        <div className="flex gap-5">
          {navbarLinks.map((link, i) => {
            return (
              <Link key={i} href={link.route}>
                <p className="hover:text-cool-green">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
