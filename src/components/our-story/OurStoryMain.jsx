"use client";
import React, { useEffect } from "react";
import AnimatedHero from "../common/Components/AnimatedHero";
import About from "./About";
import OutStory from "./OutStory";
import KeyFacts from "./KeyFacts";
import WhoWeAre from "./WhoWeAre";
import OurValue from "./OurValue";
import FeaturedAwards from "./FeaturedAwards";
import RouteInfo from "../common/Components/RouteInfo";
import AOS from "aos";
import "aos/dist/aos.css";
const OurStoryMain = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <AnimatedHero mainImage="/assets/images/ourstory/webp/story-hero.webp" />
      <About />
      <OutStory />
      <KeyFacts />
      <WhoWeAre />
      <OurValue />
      <FeaturedAwards />

      <RouteInfo />
    </>
  );
};

export default OurStoryMain;
