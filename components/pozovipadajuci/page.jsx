"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";

const PozoviPadajuci = () => {
  const [showCallButton, setShowCallButton] = useState(true);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();

  const toggleDropdownMenu = () => {
    setDropdownMenu((prev) => !prev);
  };

  useEffect(() => {
    const heroSection = document.querySelector(".hero");
    const footerSection = document.querySelector(".footer");
    const updateVisibility = (entries) => {
      const isHeroVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("hero") && entry.isIntersecting
      );

      const isFooterVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("footer") && entry.isIntersecting
      );
      setShowCallButton(!isHeroVisible && !isFooterVisible);
    };

    const observer = new IntersectionObserver(updateVisibility, {
      threshold: 0.1,
    });
    if (heroSection) observer.observe(heroSection);
    if (footerSection) observer.observe(footerSection);
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <div
      onClick={toggleDropdownMenu}
      className={`
      ${
        showCallButton
          ? "opacity-100 translate-y-0 duration-500"
          : "opacity-0 translate-y-10 pointer-events-none duration-500"
      }
      fixed top-[250px] md:top-[65px] lg:top-[250px]  p-1 ml-2 lg:ml-10  z-50`}
    >
      <p
        className={`${
          !dropdownMenu && " bg-gray-700 animate-bounce"
        } px-[10px] py-[5px] opacity-90 rounded-lg flex items-center gap-[10px] text-[15px] lg:text-[20px] cursor-pointer`}
      >
        <FaPhoneAlt className="bg-gray-100 rounded-full w-7 h-7 lg:w-12 lg:h-12 p-[4px] text-cool-green" />{" "}
        <span className={` text-gray-100 ${dropdownMenu && "hidden"} `}>
          {" "}
          Pozovite nas
        </span>
      </p>
      <div
        className={`${
          !dropdownMenu && "hidden"
        } text-gray-100 text-nowrap text-[17px] lg:text-[17px] z-20 flex flex-col gap-1`}
      >
        <a
          href="viber://contact?number=%2B381659719711"
          className="  bg-gray-700 rounded-lg flex gap-3 items-center px-[10px] py-[3px] hover:scale-110"
        >
          <FaViber className="bg-purple-600  rounded-full w-7 h-7  " />
          <span className="">065/97 197 11</span>
          <Image
            src={"/mts-logo.png"}
            width={60}
            height={30}
            alt={"logo"}
            className="bg-gray-100 p-1 rounded-sm  w-[45px] "
          />
        </a>

        <a
          href="tel:+38119711"
          className="bg-gray-700 rounded-lg flex gap-3 items-center px-[10px] py-[3px] mr-auto hover:scale-110 "
        >
          <FaPhoneAlt className="bg-gray-100 rounded-full w-6 h-6  p-[3px] text-cool-green" />
          <span className="">19711</span>
        </a>

        <a
          href="tel:+381691971111"
          className="bg-gray-700 rounded-lg flex gap-3 items-center px-[10px] py-[3px] mr-auto hover:scale-110 "
        >
          <Image
            src={"/yettel-logo.png"}
            width={42}
            height={37}
            alt={"logo"}
            className="rounded-lg w-[27px] "
          />

          <span className="">069/197 11 11</span>
        </a>

        <a
          href="tel:+381603219711"
          className="bg-gray-700 rounded-lg flex gap-3 items-center px-[10px] py-[3px] mr-auto hover:scale-110 "
        >
          <Image
            src={"/a1-logo.png"}
            width={37}
            height={37}
            alt={"logo"}
            className="bg-gray-100 rounded-md  w-[23px]"
          />

          <span className="">060/32 197 11</span>
        </a>
      </div>
    </div>
  );
};

export default PozoviPadajuci;
