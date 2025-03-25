"use client";
import React, { useState } from "react";
import ThreeBhk from "./ThreeBhk";
import FourBhk from "./FourBhk";

const PlanTab = () => {
  const [tab, setTab] = useState(false);
  return (
    <>
      <div className="max-w-[800px] w-full flex items-center plans-link-parent relative max-lg:max-w-[728px] max-md:max-w-[335px]">
        <button
          onClick={() => setTab(false)}
          className={`py-2.5 px-5 text-base font-normal cursor-pointer leading-7 border-b-[3px] duration-300 ease-linear max-md:px-[13px] ${
            tab === false
              ? "text-dark-orange border-dark-orange"
              : "text-light-gray border-transparent"
          }`}
        >
          3BHK
        </button>
        <button
          onClick={() => setTab(true)}
          className={`py-2.5 px-5 text-base font-normal cursor-pointer leading-7 border-b-[3px] duration-300 ease-linear max-md:px-[13px] ${
            tab === true
              ? "text-dark-orange border-dark-orange"
              : "text-light-gray border-transparent"
          }`}
        >
          4BHK
        </button>
      </div>
      <div className="w-full py-[30px]">
        {tab === false ? <ThreeBhk /> : <FourBhk />}
      </div>
    </>
  );
};

export default PlanTab;
