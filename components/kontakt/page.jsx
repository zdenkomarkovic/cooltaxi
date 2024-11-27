import React from "react";
import { FaViber } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";

const Kontakt = () => {
  return (
    <div id="kontakt" className="bg-black pb-[50px]">
      <div className="container text-center">
        <h2 className="text-[100px] text-white py-[50px]">
          <span className="text-cool-green font-bold">Cool </span>Taksi Nis
        </h2>
        <div className=" flex flex-col gap-[7px] text-[30px] ">
          <a
            href="viber://contact?number=%2B381659719711"
            className="flex gap-3 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
          >
            {" "}
            <FaViber className="bg-purple-600 border rounded-full w-10 h-10 p-[5px] text-white" />
            <span className="text-cool-green">065/97 197 11</span>
          </a>
          <div className="w-[600px] mx-auto h-[3px] bg-cool-green"></div>
          <a
            href="tel:+38119711"
            className="flex gap-3 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
          >
            {" "}
            <FaPhoneAlt className="bg-cool-green border rounded-full w-10 h-10 p-[6px] text-white" />
            <span className="text-cool-green">19711</span>
          </a>
          <div className="w-[600px] mx-auto h-[3px] bg-cool-green"></div>
          <a
            href="tel:+381691971111"
            className="flex gap-3 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
          >
            {" "}
            <FcPhoneAndroid className="bg-cool-green border rounded-full w-10 h-10 p-[3px] " />
            <span className="text-cool-green">069/197 11 11</span>
          </a>
          <div className="w-[600px] mx-auto h-[3px] bg-cool-green"></div>
          <a
            href="tel:+381603219711"
            className="flex gap-3 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
          >
            {" "}
            <FcPhoneAndroid className="bg-cool-green border-b2 rounded-full w-10 h-10 p-[3px] " />
            <span className="text-cool-green">060/32 197 11</span>
          </a>
          <div className="w-[600px] mx-auto h-[3px] bg-cool-green"></div>

          <button>Mail</button>
          <div className="w-[600px] mx-auto h-[3px] bg-cool-green"></div>
        </div>
        <p className="pt-8 lg:pt-12 text-white">
          © 2024 Cool Taxi Nis. Designed by{" "}
          <span className="font-bold"> Manikam.Dev.Solutions</span>
        </p>
      </div>
    </div>
  );
};

export default Kontakt;
