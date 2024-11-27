import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg bg-center"
      style={{ backgroundImage: "url(/taxi.jpg)", zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <h1 className="text-[110px] text-right p-[150px]  text-white">
          <span className="text-cool-green  font-bold"> Cool </span>Taxi Niš
        </h1>
      </div>
    </div>
  );
};

export default Hero;
