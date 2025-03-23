import React from "react";
import ImpactCard from "../common/ImpactCard";
import Paragraph from "@/components/common/Components/Paragraph";
import Heading from "@/components/common/Components/Heading";
import { ENVIRONMENTAL_IMPACT_LIST } from "@/utils/defaults";

const EnvironmentalImpact = () => {
  return (
    <div className="container">
      <div className="max-w-[800px] mx-auto">
        <Heading className="lg:mt-1">Environmental Impact</Heading>
        <Paragraph className="mt-2.5">
          Our approach to sustainable construction focuses on reducing carbon
          emissions (decarbonisation) and on creating assets that will be
          resilient to future climate change (resilience).
        </Paragraph>
      </div>
      <div className="mt-5 sm:mt-6 lg:mt-8">
        <div className="flex">
          {ENVIRONMENTAL_IMPACT_LIST.map((obj, index) => (
            <div key={`environment-card-${index + 1}`} className="w-4/12 px-2">
              <ImpactCard src={obj.img} url={obj.url}>
                {obj.description}
              </ImpactCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
