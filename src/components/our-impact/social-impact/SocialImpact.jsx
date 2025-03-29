import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import { SOCIAL_IMPACT_LIST } from "@/utils/defaults";
import React from "react";
import ImpactSlider from "../common/ImpactSlider";

const SocialImpact = () => {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-20 bg-light-orange">
      <div className="container custom-dots-swiper">
        <div className="max-w-[800px] mx-auto">
          <Heading aos="fade-up" aosDuration="400" className="lg:mt-1">
            Social Commitment & Community Development
          </Heading>
          <Paragraph
            aos="fade-up"
            aosDuration="400"
            aosDelay="250"
            className="mt-2.5">
            Beyond construction, we believe in creating a positive social
            impact. Our projects are designed to enhance the quality of life,
            ensuring accessibility, safety, and comfort for all.
          </Paragraph>
        </div>
        <div className="mt-5 sm:mt-6 lg:mt-8">
          <ImpactSlider list={SOCIAL_IMPACT_LIST} />
        </div>
      </div>
    </div>
  );
};

export default SocialImpact;
