import React from "react";
import ImpactCard from "../common/ImpactCard";
import Paragraph from "@/components/common/Components/Paragraph";
import Heading from "@/components/common/Components/Heading";
import { ENVIRONMENTAL_IMPACT_LIST } from "@/utils/defaults";
import ImpactSlider from "../common/ImpactSlider";

const EnvironmentalImpact = () => {
  return (
    <div className="container custom-dots-swiper pb-12 sm:pb-14 md:pb-16 lg::pb-20">
      <div className="max-w-[800px] mx-auto">
        <Heading aos="fade-up" aosDuration="400" className="lg:mt-1">
          Our Green Initiatives
        </Heading>
        <Paragraph
          aos="fade-up"
          aosDuration="400"
          aosDelay="250"
          className="mt-2.5">
          Our approach to real estate development is centered around
          sustainability and environmental consciousness. We employ the latest
          construction techniques to reduce our carbon footprint, ensuring that
          every project aligns with our vision of a greener, more sustainable
          future.
        </Paragraph>
      </div>
      <div className="mt-5 sm:mt-6 lg:mt-8">
        <ImpactSlider list={ENVIRONMENTAL_IMPACT_LIST} />
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
