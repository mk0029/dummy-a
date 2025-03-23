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
