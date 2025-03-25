import AnimatedHero from "@/components/common/Components/AnimatedHero";
import React from "react";
import LinkBar from "./LinkBar";
import DetailCards from "./DetailCards";
import ExploreNeighbourhood from "./ExploreNeighbourhood";
import Gallery from "./Gallery";

const DetailMain = () => {
  return (
    <div>
      <AnimatedHero
        mainImage="/assets/images/allproject/webp/details-hero.webp"
        className=" lg:max-h-[665px]"
      />
      <LinkBar />
      <DetailCards />
      <ExploreNeighbourhood />
      <Gallery/>
    </div>
  );
};

export default DetailMain;
