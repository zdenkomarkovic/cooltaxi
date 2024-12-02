import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg bg-center"
      style={{ backgroundImage: "url(/taxi.jpg)", zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <div className="  flex  flex-col gap-3 items-start pl-[50px] pb-[15px]  pt-[130px]">
          <a
            href="tel:+381691971111"
            className="flex items-center border-2 border-cool-green text-cool-green bg-black px-[12px] py-[4px] rounded-full "
          >
            {" "}
            <FcPhoneAndroid className="w-6 h-8" />
            <span className=" text-[19px]">069/1971111</span>
          </a>
          <a
            href="tel:+38119711"
            className="flex gap-[2px] items-center border-2 border-cool-green text-cool-green bg-black px-[12px] py-[4px] rounded-full tracking-tight"
          >
            <FaPhoneAlt className=" w-5 h-6  text-cool-green" />
            <span className=" text-[19px] ">19711</span>
          </a>
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-1 items-center border-2 border-cool-green text-cool-green bg-black px-[12px] py-[4px] rounded-full"
          >
            {" "}
            <FaViber className="bg-purple-600 rounded-full w-6 h-6 p-[3px] text-white" />
            <span className=" text-[19px]  ">065/9719711</span>
          </a>
        </div>
        <div className="">
          <h1 className="flex flex-col lg:flex-row lg:gap-8 w-full text-[60px] lg:text-[110px] text-right justify-end pr-[15px] pt-[100px] lg:p-[150px] leading-snug text-white">
            <span className="text-cool-green font-bold pr-[80px] lg:pr-0">
              {" "}
              Cool{" "}
            </span>
            Taxi Niš
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
