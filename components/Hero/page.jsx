import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg bg-center"
      style={{ backgroundImage: "url(/taxi.jpg)", zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <h1 className="flex flex-col lg:flex-row lg:gap-8 w-[350px] lg:w-full text-[50px] lg:text-[110px] text-left lg:justify-end pl-[40px] pt-[150px] lg:p-[150px] text-white">
          <span className="text-cool-green  font-bold"> Cool </span>Taxi Niš
        </h1>
      </div>
    </div>
  );
};

export default Hero;
