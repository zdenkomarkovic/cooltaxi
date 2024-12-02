import Aplikacija from "@/components/aplikacija/page";
import ButtonToTop from "@/components/buttonToTop/page";
import Cenovnik from "@/components/cenovnik/page";
import Hero from "@/components/Hero/page";
import Kontakt from "@/components/kontakt/page";
import UvekCool from "@/components/uvekCool/page";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <ButtonToTop />
      <UvekCool />
      <Aplikacija />
      <Cenovnik />
      <Kontakt />
    </div>
  );
};

export default Home;
