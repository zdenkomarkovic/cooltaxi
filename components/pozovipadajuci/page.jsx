"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const PozoviPadajuci = () => {
  const [showCallButton, setShowCallButton] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const heroSection = document.querySelector(".hero");
    const footerSection = document.querySelector(".footer");
    const updateVisibility = (entries) => {
      const isHeroVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("hero") && entry.isIntersecting
      );

      const isFooterVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("footer") && entry.isIntersecting
      );
      setShowCallButton(!isHeroVisible && !isFooterVisible);
    };

    const observer = new IntersectionObserver(updateVisibility, {
      threshold: 0.1,
    });
    if (heroSection) observer.observe(heroSection);
    if (footerSection) observer.observe(footerSection);
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <div
      className={`
      ${
        showCallButton
          ? "opacity-100 translate-y-0 duration-500"
          : "opacity-0 translate-y-10 pointer-events-none duration-500"
      }
      fixed top-[250px]  p-1 ml-2 lg:ml-10  z-50`}
    >
      <p className=" bg-cool-green px-[10px] py-[5px] opacity-90 rounded-lg flex items-center gap-[10px] text-[15px] lg:text-[20px] animate-bounce cursor-pointer">
        <FaPhoneAlt className="bg-gray-100 rounded-full w-7 h-7 lg:w-12 lg:h-12 p-[4px] text-cool-green" />{" "}
        <span className=" text-gray-100 "> Pozovite nas</span>
      </p>
    </div>
  );
};

export default PozoviPadajuci;
