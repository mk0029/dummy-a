import AnimatedHero from "@/components/common/Components/AnimatedHero";
import React from "react";
import LinkBar from "./LinkBar";
import DetailCards from "./DetailCards";

const DetailMain = () => {
  return (
    <div>
      <AnimatedHero className=" lg:max-h-[665px]" />
      <LinkBar/>
      <DetailCards/>
    </div>
  );
};

export default DetailMain;
