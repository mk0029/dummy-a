import React from "react";
import ImpactCard from "../common/ImpactCard";

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
        <ImpactCard />
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
