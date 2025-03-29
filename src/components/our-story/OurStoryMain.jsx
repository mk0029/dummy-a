import React from "react";
import AnimatedHero from "../common/Components/AnimatedHero";
import About from "./About";
import OutStory from "./OutStory";
import KeyFacts from "./KeyFacts";
import WhoWeAre from "./WhoWeAre";
import OurValue from "./OurValue";
import FeaturedAwards from "./FeaturedAwards";
import RouteInfo from "../common/Components/RouteInfo";

const OurStoryMain = () => {
  return (
    <>
      <AnimatedHero mainImage="/assets/images/allproject/webp/details-hero.webp" />
      <div className="container">
        <About />
        <OutStory />
        <KeyFacts />
        <WhoWeAre />
        <OurValue />
        <FeaturedAwards />
      </div>
      <RouteInfo />
    </>
  );
};

export default OurStoryMain;
