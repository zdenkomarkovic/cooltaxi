"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const PozoviPadajuci = ({ showCallButton }) => {
  return (
    <div
      className={`
      ${
        showCallButton
          ? "opacity-100 translate-y-0 duration-500"
          : "opacity-0 translate-y-10 pointer-events-none duration-500"
      }
      fixed top-[150px]  p-1 ml-6  z-50`}
    >
      <p className=" bg-gray-900 px-[10px] py-[5px] opacity-80 rounded-lg flex items-center gap-[10px] text-[20px] animate-bounce cursor-pointer">
        <FaPhoneAlt className="bg-gray-100 rounded-full w-12 h-12 p-[4px] text-cool-green" />{" "}
        <span className=" text-gray-100 text-[20px]"> Pozovite nas</span>
      </p>
    </div>
  );
};

export default PozoviPadajuci;
