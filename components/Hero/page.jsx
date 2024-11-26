import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg bg-center"
      style={{ backgroundImage: "url(/taxi.jpg)", zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <h1 className="text-[90px] text-right p-[100px] text-cool-green">
          Cool <span className="text-white">Taxi Niš</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
