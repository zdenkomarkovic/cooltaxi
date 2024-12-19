"use client";

import PozoviPadajuci from "@/components/pozovipadajuci/page";
import Footer from "@/components/shared/footer/page";
import Navbar from "@/components/shared/navbar/page";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";

const layout = ({ children }) => {
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
    <main className="">
      <Navbar />
      <div>{children}</div>
      <PozoviPadajuci showCallButton={showCallButton} />
      <Footer />
    </main>
  );
};

export default layout;
