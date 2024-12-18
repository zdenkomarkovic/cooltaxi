"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const PozoviPadajuci = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const handleScroll = () => {
    if (window.scrollY > 600 && window.scrollY < 3500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scrollToTopButton ${
        isVisible ? "visible" : ""
      } fixed top-[150px]  p-1 ml-6  z-50`}
    >
      <p className=" bg-cool-green px-[10px] py-[5px] opacity-80 rounded-lg flex items-center gap-[10px] text-[20px] animate-bounce cursor-pointer">
        <FaPhoneAlt className="bg-gray-100 rounded-full w-12 h-12 p-[4px] text-cool-green" />{" "}
        <span className=" text-gray-100 text-[20px]"> Pozovite nas</span>
      </p>
    </div>
  );
};

export default PozoviPadajuci;
