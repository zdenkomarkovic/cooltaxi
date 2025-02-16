import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero relative w-full h-screen">
      <Image
        src={"/B78A3898.jpg"}
        fill
        alt="cool taxi"
        className="object-cover"
      />
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/B78A3898.jpg)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div> */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10 "></div>
      <div className="flex flex-col md:flex-row justify-between lg:gap-20 container mx-auto px-[8px] lg:px-[40px] pt-[60px] md:pt-[42px] lg:pt-[130px]">
        <div className="text-gray-100 text-nowrap mx-auto w-[230px] md:w-[300px] lg:w-[430px] md:pt-[40px] lg:pt-[120px] text-[17px] lg:text-[24px] relative z-20 flex  flex-col lg:gap-1 pb-[15px]">
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-3 items-center pl-[10px] py-[5px] lg:py-[5px] hover:scale-110 "
          >
            <FaViber className="bg-purple-600  rounded-full w-7 h-7 lg:w-10 lg:h-10 lg:p-[5px]" />
            <span className="">065/97 197 11</span>
            <Image
              src={"/mts-logo.png"}
              width={60}
              height={30}
              alt={"logo"}
              className="bg-gray-100 p-1 lg:p-2 rounded-sm lg:rounded-lg w-[45px] lg:w-[60px]"
            />
          </a>
          <div className=" w-full mr-auto h-[2px] bg-cool-green"></div>
          <a
            href="tel:+38119711"
            className="flex gap-3 items-center pl-[10px] py-[5px] lg:py-[5px] mr-auto hover:scale-110 "
          >
            <FaPhoneAlt className="bg-gray-100 rounded-full w-7 h-7 lg:w-9 lg:h-9 p-[3px] text-cool-green" />
            <span className="">19711</span>
          </a>
          <div className="w-full mx-auto h-[2px] bg-cool-green"></div>
          <a
            href="tel:+381691971111"
            className="flex gap-3 items-center pl-[10px] py-[5px] lg:py-[5px] mr-auto hover:scale-110 "
          >
            <Image
              src={"/yettel-logo.png"}
              width={42}
              height={37}
              alt={"logo"}
              className="rounded-lg w-[32px] lg:w-[42px]"
            />

            <span className="">069/197 11 11</span>
          </a>
          <div className="w-full mx-auto h-[2px] bg-cool-green"></div>
          <a
            href="tel:+381603219711"
            className="flex gap-3 items-center pl-[10px] py-[5px] lg:py-[5px] mr-auto hover:scale-110 "
          >
            <Image
              src={"/a1-logo.png"}
              width={37}
              height={37}
              alt={"logo"}
              className="bg-gray-100 rounded-md lg:rounded-lg w-[27px] lg:w-[37px]"
            />

            <span className="">060/32 197 11</span>
          </a>
          <div className="w-full mx-auto h-[2px] bg-cool-green"></div>
        </div>
        <div>
          <div className="pt-[25px] md:pt-0 flex flex-col items-center text-center relative z-20 lg:ml-[350px]">
            <div className="flex items-center">
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
            <div className="text-gray-100 lg:text-[20px]">
              <p className=" ">instalirajte nasu aplikaciju klikom na dugme.</p>
              <p className="">I narucite voznju.</p>
            </div>
          </div>

          <div className=" relative z-20 pt-[60px] md:pt-[20px] lg:pt-[60px]">
            <h1 className=" text-[55px] lg:text-[100px] text-center px-[8px] lg:px-[30px] leading-tight md:leading-none lg:leading-snug text-gray-100">
              <span className="text-cool-green font-bold ">Cool </span>
              Taxi Niš, taxi sa tradicijom
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
