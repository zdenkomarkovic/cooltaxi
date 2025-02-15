import About from "../../../components/about/page";
import Aplikacija from "../../../components/aplikacija/page";
import ButtonToTop from "../../../components/buttonToTop/page";
import Hero from "../../../components/Hero/page";

import UvekCool from "../../../components/uvekCool/page";
import React from "react";
import VideoPlayer from "../../../components/VideoPlayer";

const Home = () => {
  return (
    <div>
      <Hero />
      <ButtonToTop />

      <UvekCool />
      <About />
      <Aplikacija />
      <VideoPlayer />
    </div>
  );
};

export default Home;
