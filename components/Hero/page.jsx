import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/taxi.jpg)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className=" lg:hidden relative z-20 flex flex-col gap-5 items-start  pb-[15px] pt-[100px]">
        <a
          href="tel:+381691971111"
          className="flex items-center gap-2 ml-[50px] border-2 border-cool-green text-white bg-black px-[12px] py-[4px] rounded-full"
        >
          <FcPhoneAndroid className="w-6 h-8" />
          <span className="text-[19px]">069/1971111</span>
        </a>
        <a
          href="tel:+38119711"
          className="flex gap-[8px] ml-[100px] items-center border-2 border-cool-green text-white bg-black px-[12px] py-[4px] rounded-full tracking-tight"
        >
          <FaPhoneAlt className="w-5 h-6 text-cool-green" />
          <span className="text-[19px]">19711</span>
        </a>
        <a
          href="viber://contact?number=%2B381659719711"
          className="flex gap-3 ml-[150px] items-center border-2 border-cool-green text-white bg-black px-[12px] py-[4px] rounded-full"
        >
          <FaViber className="bg-purple-600 rounded-full w-6 h-6 p-[3px] text-white" />
          <span className="text-[19px]">065/9719711</span>
        </a>
      </div>
      <div className=" relative z-20 text-center pt-[30px]">
        <a
          href="https://play.google.com/store/apps/details?id=com.AMEGA.cnis&pcampaignid=web_share"
          className="relative z-20"
        >
          <img src={"Google_Play.svg"} className="w-[200px] h-[65px] mx-auto" />
          <p className="text-white">instalirajte nasu aplikaciju.</p>
          <p className="text-white">I narucite voznju.</p>
        </a>
      </div>

      <div className="relative z-20">
        <h1 className="flex flex-col pl-[50px] lg:flex-row text-outline-green lg:gap-8 w-full text-[60px] lg:text-[110px] text-left justify-end pt-[50px] lg:pt-[350px] lg:pr-[250px] leading-snug text-white">
          <span className="text-cool-green text-outline-none font-bold  lg:pr-0">
            Cool
          </span>
          Taxi Niš
        </h1>
      </div>
    </div>
  );
};

export default Hero;
