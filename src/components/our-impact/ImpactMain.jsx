import React from "react";
import AnimatedHero from "../common/Components/AnimatedHero";
import CreatingImpact from "./CreatingImpact";
import EnvironmentalImpact from "./environmental-impact/EnvironmentalImpact";
import SocialImpact from "./social-impact/SocialImpact";
import Recognition from "./recognition/Recognition";
import Partnerships from "./partnerships/Partnerships";
import Downloads from "./downloads/Downloads";
import Blogs from "./blogs/Blogs";

const ImpactMain = () => {
  return (
    <div>
      <h2 className="text-2xl text-light-black cormorantSemiBold leading-116 max-md:text-xl max-md:leading-120"></h2>
      <h5 className="text-xl text-light-black cormorantSemiBold leading-140 max-lg:text-base max-md:text-sm max-lg:leading-125"></h5>
      <p className="text-sm text-light-gray leading-143"></p>
      <p className="text-[14.4px] text-light-gray leading-143 futuraMedium"></p>
      <AnimatedHero />
      <CreatingImpact />
      <EnvironmentalImpact />
      <SocialImpact />
      <Recognition />
      <Partnerships />
      <Downloads />
      <Blogs />
    </div>
  );
};

export default ImpactMain;
