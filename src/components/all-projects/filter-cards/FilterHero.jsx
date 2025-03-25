"use client";
import React, { useState } from "react";
import FilterInput from "./FilterInput";
import Heading from "@/components/common/Components/Heading";
import Categorys from "./category/Categorys";
import Paragraph from "@/components/common/Paragraph";
import Icons from "@/components/common/Icons";
import outSideClickHandler from "@/utils/outSideClickHandler";

const FilterHero = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const dropRef = outSideClickHandler(() => {
    setIsDropOpen(false);
  });
  return (
    <div className="container py-12 sm:py-14 md:py-16 lg:py-20 ">
      <FilterInput />
      <div className="mt-12 max-lg:flex max-lg:items-center max-lg:justify-between w-full relative">
        <Heading className="!text-start lg:mt-1 lg:mb-5">All Projects</Heading>
        <div
          onClick={() => setIsDropOpen(!isDropOpen)}
          className="flex lg:hidden justify-between items-center pr-2 gap-x-3">
          <Icons
            icon="filter-bars"
            className={`w-3 ${isDropOpen && "rotate-180"}`}
            stroke="stroke-light-gray"
          />
          <Paragraph className={`!text-start select-none`}>Filter</Paragraph>
          <Icons
            icon="accordion-arrow"
            className={`w-3 ${isDropOpen && "rotate-180"}`}
            stroke="stroke-light-gray"
          />
        </div>
        <div
          ref={dropRef}
          className={`max-lg:absolute  max-lg:shadow-[0px_3px_5px_rgba(0,0,0,0.2)] max-lg:p-4 max-lg:top-full max-lg:left-0 w-full max-lg:bg-white ${
            !isDropOpen &&
            "max-lg:mt-5 max-lg:opacity-0 max-lg:pointer-events-none"
          } transition-all ease-linear duration-300`}>
          <div
            className={`absolute shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] right-0.5 -top-[3px] w-3.5 h-2.5 bg-[#f8f8f8] -rotate-45 -z-10 lg:hidden ${
              !isDropOpen && "hidden"
            }`}></div>
          <Categorys />
        </div>
      </div>
    </div>
  );
};

export default FilterHero;
