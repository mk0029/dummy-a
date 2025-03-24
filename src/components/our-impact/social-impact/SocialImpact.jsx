import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import { SOCIAL_IMPACT_LIST } from "@/utils/defaults";
import React from "react";
import ImpactSlider from "../common/ImpactSlider";

const SocialImpact = () => {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg::py-20 bg-light-orange">
      <div className="container custom-dots-swiper">
        <div className="max-w-[800px] mx-auto">
          <Heading className="lg:mt-1">Social Impact</Heading>
          <Paragraph className="mt-2.5">
            Lodha is committed to creating a positive impact on Indian society
            through programmes which support the nation’s development. Our
            current areas of focus are Women’s Empowerment and Education.
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
