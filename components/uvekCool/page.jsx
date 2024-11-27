import React from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";

const UvekCool = () => {
  return (
    <div className="px-[15px] lg:container mx-auto pb-[50px] lg:pb-[100px]">
      <h2 className="text-[45px] lg:text-[80px] text-center py-[30px] lg:py-[80px] font-bold">
        Uvek birajte <span className="text-cool-green">Cool</span> Taksi Niš
      </h2>
      <div className="flex flex-col lg:flex-row gap-[25px] lg:gap-[15px]">
        <div className="text-center flex flex-col gap-[3px] lg:gap-[15px]">
          <TfiMapAlt className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
          <h3 className="text-[25px] lg:text-[30px] text-cool-green">
            Voznje van grada
          </h3>
          <p className="text-[18px] lg:text-[20px]">
            Vozimo do okolnih sela, gradova, do Beograda i dalje u inostaranstvo
          </p>
        </div>
        <div className="text-center flex flex-col gap-[3px] lg:gap-[15px]">
          <CiCreditCard2 className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
          <h3 className="text-[25px] lg:text-[30px] text-cool-green">
            Placanje karticom
          </h3>
          <p className="text-[18px] lg:text-[20px]">
            U nasim vozilima postoji mogucnost placanja karticom
          </p>
        </div>
        <div className="text-center flex flex-col gap-[3px] lg:gap-[15px]">
          <IoCarSportOutline className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
          <h3 className="text-[25px] lg:text-[30px] text-cool-green">
            Nasa flota
          </h3>
          <p className="text-[18px] lg:text-[20px]">
            Nasa flota se sastoji iskljucivo od hibridnih i elektricnih vozila
          </p>
        </div>
        <div className="text-center flex flex-col gap-[3px] lg:gap-[15px]">
          <TfiMapAlt className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
          <h3 className="text-[25px] lg:text-[30px] text-cool-green">
            Voznje van grada
          </h3>
          <p className="text-[18px] lg:text-[20px]">
            Vozimo do okolnih sela, gradova, do Beograda i dalje. I u
            inostaranstvo
          </p>
        </div>
      </div>
    </div>
  );
};

export default UvekCool;
