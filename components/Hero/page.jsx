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
      <div className=" lg:hidden relative z-20 flex flex-col gap-3 items-center  pb-[15px] pt-[100px]">
        <a
          href="tel:+381691971111"
          className="flex items-center w-[220px] gap-2 border-b-[1px] border-cool-green text-white  px-[12px] py-[4px] "
        >
          <FcPhoneAndroid className="w-10 h-10" />
          <span className="text-[25px]">069/1971111</span>
        </a>
        <a
          href="tel:+38119711"
          className="flex gap-[8px] w-[220px] items-center border-b-[1px] border-cool-green text-white  px-[12px] py-[4px] "
        >
          <FaPhoneAlt className="w-10 h-7 text-cool-green" />
          <span className="text-[25px]">19711</span>
        </a>
        <a
          href="viber://contact?number=%2B381659719711"
          className="flex gap-3 w-[220px] items-center border-b-[1px] border-cool-green text-white  px-[12px] py-[4px] "
        >
          <FaViber className="bg-purple-600 rounded-full w-12 h-10 p-[3px] text-white" />
          <span className="text-[25px]">065/9719711</span>
        </a>
      </div>
      <div className=" relative z-20 text-center pt-[30px]  lg:pt-[200px]">
        <div className="flex justify-center items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.AMEGA.cnis&pcampaignid=web_share"
            className="relative z-20"
          >
            <img
              src={"Google_Play.svg"}
              className="w-[170px] h-[65px] mx-auto lg:w-[280px] lg:h-[90px]"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/cool-taxi-ni%C5%A1/id6478986375"
            className="relative z-20"
          >
            <img
              src={"App_Store.svg"}
              className="w-[170px] h-[60px] mx-auto lg:w-[300px] lg:h-[100px]"
            />
          </a>
        </div>
        <p className="text-white lg:text-[20px]">
          instalirajte nasu aplikaciju klikom na dugme.
        </p>
        <p className="text-white lg:text-[20px]">I narucite voznju.</p>
      </div>

      <div className="container mx-auto relative z-20">
        <h1 className="flex flex-col pl-[50px] lg:flex-row text-outline-green lg:gap-8 w-full text-[60px] lg:text-[110px] text-left justify-end pt-[50px] lg:pt-[150px] lg:pr-[100px] leading-snug text-white">
          <span className="text-cool-green text-outline-none font-bold ">
            Cool
          </span>
          Taxi Niš
        </h1>
      </div>
    </div>
  );
};

export default Hero;
