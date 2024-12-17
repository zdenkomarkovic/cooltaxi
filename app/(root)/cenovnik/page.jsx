"use client";

import { priceList } from "@/constants";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Cenovnik = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPriceList = priceList.filter((route) =>
    route.pravac.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container px-[8px] lg:px-[40px]  mx-auto pt-[150px] pb-[70px]">
      <div className=" border-2 border-cool-green rounded-3xl  mx-auto py-[50px]">
        <h2 className="text-[45px] lg:text-[80px] text-center pb-[50px]  font-bold text-gray-900">
          Cenovnik <span className="text-cool-green">Cool</span> Taxi Niš
        </h2>
        <div className="text-center text-[18px] lg:text-[34px] mb-[20px] flex justify-center lg:gap-[100px] items-center">
          <label className="text-nowrap">Pretrazi destinaciju</label>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" border-2 border-gray-900 rounded-lg py-1 lg:px-4 pl-7 lg:pl-14 lg:text-[22px] placeholder-gray-500"
            />
            <IoSearchOutline className="pointer-events-none text-gray-500 lg:text-[26px] absolute left-2 lg:left-5" />
          </div>
        </div>
        <div className="text-[18px] lg:text-[34px]">
          <table className="mx-auto border-[5px] border-gray-900">
            <thead>
              <tr className="text-center bg-gray-900 text-gray-100">
                <td className="lg:w-[82px] py-[3px] border-[1px]"> RB. </td>
                <td className="lg:w-[500px] py-[3px] border-[1px]">
                  ČESTE DESTINACIJE
                </td>
                <td className="lg:w-[300px] py-[3px] border-[1px]">CENA</td>
              </tr>
            </thead>
            <tbody>
              {filteredPriceList.map((route, i) => {
                return (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-gray-50" : " bg-gray-100"
                    } text-gray-800 hover:text-cool-green`}
                  >
                    <td className="lg:px-[30px] py-[3px] border-[1px] text-center">
                      {i + 1}
                    </td>
                    <td className="px-[7px] lg:px-[50px] py-[3px] border-[1px]">
                      Niš - {route.pravac}
                    </td>
                    <td className=" px-[7px] lg:px-[50px] py-[3px] border-[1px]">
                      {route.cena}{" "}
                      <span className="text-[16px] lg:text-[28px]">RSD</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cenovnik;
