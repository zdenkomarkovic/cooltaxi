import React from "react";
import { FaViber } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";

const Sidebar = () => {
  return (
    <div className=" fixed left-[20px] top-[250px] my-auto flex flex-col gap-4">
      <a
        href="viber://contact?number=%2B381659719711"
        className="flex gap-3 items-center hover:scale-110 bg-green-100 px-3 py-1 border-collapse rounded-xl"
      >
        {" "}
        <FaViber className="bg-purple-600 border rounded-full w-10 h-10 p-[5px] text-white" />
        <span className="text-green-700">065/97 197 11</span>
      </a>
      <a
        href="tel:+38119711"
        className="flex gap-3 items-center  hover:scale-110  bg-green-100 px-3 py-1 border-collapse rounded-xl"
      >
        {" "}
        <FaPhoneAlt className="bg-green-700 border rounded-full w-10 h-10 p-[6px] text-white" />
        <span className="text-green-700">19711</span>
      </a>
      <a
        href="tel:+381691971111"
        className="flex gap-3 items-center  hover:scale-110  bg-green-100 px-3 py-1 border-collapse rounded-xl"
      >
        {" "}
        <FcPhoneAndroid className="bg-green-700 border rounded-full w-10 h-10 p-[3px] text-white" />
        <span className="text-green-700">069/197 11 11</span>
      </a>
      <a
        href="tel:+381603219711"
        className="flex gap-3 items-center  hover:scale-110  bg-green-100 px-3 py-1 border-collapse rounded-xl"
      >
        {" "}
        <FcPhoneAndroid className="bg-green-700 border rounded-full w-10 h-10 p-[3px] text-white" />
        <span className="text-green-700">060/32 197 11</span>
      </a>

      <button>Mail</button>
    </div>
  );
};

export default Sidebar;
