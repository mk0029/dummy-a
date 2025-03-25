import React from "react";
import FilterInput from "./FilterInput";
import Heading from "@/components/common/Components/Heading";
import Categorys from "./category/Categorys";

const FilterHero = () => {
  return (
    <div className="container py-12 sm:py-14 md:py-16 lg:py-20 ">
      <FilterInput />
      <div className="mt-12">
        <Heading className="!text-start lg:mt-1">All Projects</Heading>
        <Categorys />
      </div>
    </div>
  );
};

export default FilterHero;
