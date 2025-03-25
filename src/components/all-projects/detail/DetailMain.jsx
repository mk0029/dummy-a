import AnimatedHero from "@/components/common/Components/AnimatedHero";
import React from "react";
import LinkBar from "./LinkBar";
import DetailCards from "./DetailCards";

const DetailMain = () => {
  return (
    <div>
      <AnimatedHero
        mainImage="/assets/images/allproject/webp/details-hero.webp"
        className=" lg:max-h-[665px]"
      />
      <LinkBar />
      <DetailCards />
    </div>
  );
};

export default DetailMain;
