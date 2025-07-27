import About from "../../../components/about/page";
import Aplikacija from "../../../components/aplikacija/page";
import ButtonToTop from "../../../components/buttonToTop/page";
import Hero from "../../../components/Hero/page";
import FAQ from "../../../components/faq/page";
import PopularDestinations from "../../../components/popularDestinations/page";
import UvekCool from "../../../components/uvekCool/page";
import React from "react";
import VideoPlayer from "../../../components/VideoPlayer";

export const metadata = {
  title: "Cool Taxi Niš - Pouzdan taxi prevoz 24/7 | Taksi Niš",
  description: "Cool Taxi Niš - vodeća taksi firma u Nišu od 2000. godine. Brz, pouzdan i ekološki prevoz 24/7. Pozovite 19711 ili 065/97 197 11. Hibridna i električna vozila.",
  keywords: "taksi niš, cool taxi niš, taxi prevoz niš, taksi 24/7 niš, taxi aerodrom niš, taksi beograd niš, taxi kragujevac niš, ekološki taxi niš, hibridni taxi niš, taxi aplikacija niš, 19711 taxi, 06597197111, taxi niš cene, taksi cenovnik niš",
  openGraph: {
    title: "Cool Taxi Niš - Pouzdan taxi prevoz 24/7",
    description: "Cool Taxi Niš - vodeća taksi firma u Nišu od 2000. godine. Brz, pouzdan i ekološki prevoz 24/7. Hibridna i električna vozila.",
    url: 'https://www.taxinis.rs',
    type: 'website',
  },
};

const Home = () => {
  return (
    <div>
      <Hero />
      <ButtonToTop />

      <UvekCool />
      <About />
      <PopularDestinations />
      <Aplikacija />
      <FAQ />
      <VideoPlayer />
    </div>
  );
};

export default Home;
