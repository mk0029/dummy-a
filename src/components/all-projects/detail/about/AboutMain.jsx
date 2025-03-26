import React from "react";
import Gallery from "./Gallery";
import Plans from "./plans/Plans";
import ExploreNeighbourhood from "./ExploreNeighbourhood";
import FinestDevelopments from "./FinestDevelopments";
import CommonQueries from "./CommonQueries";
import DetailCards from "./DetailCards";

const AboutMain = ({ aboutDetails }) => {
  return (
    <div>
      <DetailCards content={aboutDetails?.propertyInfo} />
      <Gallery content={aboutDetails?.lifeStyle} />
      {aboutDetails?.plans && <Plans content={aboutDetails?.plans} />}
      <ExploreNeighbourhood content={aboutDetails?.neighbourhood} />
      <FinestDevelopments content={aboutDetails?.finestDevelopments} />
      <CommonQueries content={aboutDetails?.queries} />
    </div>
  );
};

export default AboutMain;
