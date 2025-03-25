import React from "react";
import FilterHero from "./filter-cards/FilterHero";
import Heading from "../common/Components/Heading";

const AllProjects = () => {
  return (
    <div>
      <FilterHero />
      <div className="pt-12 bg-[#F8F8F8 ]">
        <Heading>Featured Projects</Heading>
      </div>
    </div>
  );
};

export default AllProjects;
