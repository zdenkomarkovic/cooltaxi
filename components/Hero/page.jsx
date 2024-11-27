import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg bg-center"
      style={{ backgroundImage: "url(/taxi.jpg)", zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <div className="">
          <h1 className="flex flex-col lg:flex-row lg:gap-8 w-full text-[60px] lg:text-[110px] text-right justify-end pr-[15px] pt-[200px] lg:p-[150px] leading-snug text-white">
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
