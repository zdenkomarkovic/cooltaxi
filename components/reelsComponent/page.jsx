"use client";
import React from "react";
import ReelCard from "../reelCard/page";

import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(() => import("react-instagram-embed"), {
  ssr: false,
  loading: () => <p>Loading...</p>, // Prikazuje tekst dok se komponenta učitava
});

const reels = [
  "https://www.instagram.com/reel/DC887O2sQYw/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DClxt3nMqpx/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DCbcYoNskCL/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DCWI-Q1MuTR/?utm_source=ig_embed&amp;utm_campaign=loading",
  //   "https://www.instagram.com/reel/DBvfZ1OsuMn/?utm_source=ig_embed&amp;utm_campaign=loading",
  //   "https://www.instagram.com/reel/DBqn26TMpdb/?utm_source=ig_embed&amp;utm_campaign=loading",
  //   "https://www.instagram.com/reel/DBf73XnMIdK/?utm_source=ig_embed&amp;utm_campaign=loading",
  //   "https://www.instagram.com/reel/DBa1JKysGS_/?utm_source=ig_embed&amp;utm_campaign=loading",
];

const ReelsComponent = () => {
  return (
    <div className="px-[8px] container lg:px-[30] mx-auto justify-around flex flex-wrap">
      {reels.map((url, i) => {
        return <ReelCard key={i} embedUrl={url} />;
      })}
    </div>
  );
};

export default ReelsComponent;
