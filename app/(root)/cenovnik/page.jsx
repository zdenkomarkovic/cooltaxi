"use client";

import { priceList } from "../../../constants";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Breadcrumb from "../../../components/shared/breadcrumb/page";

const Cenovnik = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPriceList = priceList.filter((route) =>
    route.pravac.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Breadcrumb />
      <div className="container px-[5px] lg:px-[40px]  mx-auto pt-[100px] lg:pt-[150px] pb-[50px] lg:pb-[70px]">
        <div className=" border-2 border-cool-green  rounded-3xl bg-gray-100 px-[5px] lg:px-[40px]  mx-auto py-[20px] lg:py-[50px]">
          <h2 className="text-[45px] lg:text-[80px] text-center pb-[20px] lg:pb-[50px]  font-bold text-gray-900">
            Cenovnik <span className="text-cool-green">Cool</span> Taxi Niš
          </h2>
          <div className="flex flex-col-reverse lg:flex-row px-auto ">
            <div className="mx-auto">
              <div className="text-center text-[17px] lg:text-[34px] mb-[20px] flex justify-center gap-[15px] lg:gap-[100px] items-center">
                <label className="text-nowrap">Pretrazi destinaciju</label>
                <div className="relative flex items-center w-[40%] lg:w-[40%]">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-2 cursor-pointer border-gray-900 rounded-lg py-1 lg:px-4 pl-7 lg:pl-14 lg:text-[22px] placeholder-gray-500"
                  />
                  <IoSearchOutline className="pointer-events-none text-gray-500 lg:text-[26px] absolute left-2 lg:left-5" />
                </div>
              </div>
              <div className="text-[18px] lg:text-[34px]">
                <table className="mx-auto border-[2px] lg:border-[5px] border-gray-900">
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
                          <td className="px-[7px] lg:pl-[50px] py-[3px] border-[1px]  tracking-tighter lg:tracking-normal">
                            Niš - {route.pravac}
                          </td>
                          <td className=" pl-[7px] lg:px-[50px] py-[3px] border-[1px]  tracking-tighter lg:tracking-normal">
                            {route.cena}{" "}
                            <span className="text-[16px] lg:text-[28px]">
                              RSD
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-auto gap-[10px] mx-auto lg:gap-[20px] text-[26px] lg:text-[45px] pb-[20px] lg:pb-0">
              <div className="flex lg:flex-col gap-[10px] lg:gap-[20px] ">
                <div className=" w-[100%] border-[1px] rounded-lg text-center border-cool-green lg:px-[15px] lg:py-[8px]">
                  <p className=" text-cool-green">Start</p>
                  <p className="text-[15px] lg:text-[18px]">190 RSD</p>
                </div>
                <div className="w-[100%] border-[1px] rounded-lg text-center border-cool-green lg:px-[15px] lg:py-[8px]">
                  <p className=" text-cool-green">Tarifa 1</p>
                  <p className="text-[15px] lg:text-[18px]">
                    70 RSD po kilometru
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col gap-[10px] lg:gap-[20px] text-[22px] lg:text-[45px]">
                <div className="w-[50%] lg:w-full border-[1px] rounded-lg text-center border-cool-green lg:px-[15px] lg:py-[8px]">
                  <p className=" text-cool-green">Cekanje</p>
                  <p className="text-[15px] lg:text-[18px]">900 RSD - 1h</p>
                </div>
                <div className="w-[50%] lg:w-full border-[1px] rounded-lg text-center border-cool-green lg:px-[15px] lg:py-[8px]">
                  <p className=" text-cool-green">Prtljag</p>
                  <p className="text-[15px] lg:text-[18px]">
                    0 RSD ne naplacuje se
                  </p>
                </div>
              </div>
              <p className="text-[15px] lg:text-[18px] md:w-[300px]"> <strong>Napomena:</strong> Trudimo se da sve cene budu tačne i ažurne, ali zadržavamo pravo na izmene. Za najnovije informacije molimo vas da nas kontaktirate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cenovnik;
