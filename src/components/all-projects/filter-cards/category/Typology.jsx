"use client";
import Paragraph from "@/components/common/Components/Paragraph";
import Icons from "@/components/common/Icons";
import outSideClickHandler from "@/utils/outSideClickHandler";
import { useState } from "react";

const Typology = ({
  className = "",
  title = "",
  list = [],
  search = false,
}) => {
  const [selectedType, setSelectedType] = useState("");
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const projectTypes = ["5+", "4", "3", "2"];

  // Filter project types based on search input
  const filteredTypes = projectTypes.filter((type) =>
    type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dropRef = outSideClickHandler(() => {
    setIsDropOpen(false);
  });
  return (
    <div ref={dropRef} className="sm:relative z-50">
      <div
        onClick={() => setIsDropOpen(!isDropOpen)}
        className={`inline-flex justify-between items-center cursor-pointer max-lg:gap-x-3 lg:min-w-[105px] ${className}`}>
        <Paragraph className={`!text-start select-none`}>Typology</Paragraph>
        <Icons
          icon="accordion-arrow"
          className={`w-3 ${isDropOpen && "rotate-180"}`}
          stroke="stroke-light-gray"
        />
      </div>
      <div
        className={`min-w-[168px] w-full shadow-[0px_3px_5px_rgba(0,0,0,0.2)] absolute mt-5 right-0 bg-white transition-all duration-300 ease-linear ${
          !isDropOpen && "opacity-0 mt-8 pointer-events-none"
        }`}>
        <div className="absolute shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] right-0.5 -top-[3px] w-3.5 h-2.5 bg-[#f8f8f8] -rotate-45 z-0"></div>
        <div className="w-full flex justify-between items-center bg-[#F8F8F8] pr-1.5 relative z-10">
          <input
            id={`drop-input-${title.replace(" ", "-")}`}
            type="text"
            className="text-sm !border-none !outline-none !leading-110 text-black w-full pl-2.5 pr-1 min-h-9"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Icons fill="fill-black" icon="search-glass" />
        </div>
        {filteredTypes.map((type, index) => (
          <div
            onClick={() => setSelectedType(type)}
            key={index}
            className="py-3.5 w-full flex items-center border-b border-solid border-b-[rgba(0,0,0,0.1)] px-7 gap-x-2.5 hover:bg-light-black/10 transition-all ease-linear cursor-pointer">
            <span className="size-[18px] relative flex justify-center items-center border border-solid border-dark-orange">
              {selectedType === type && (
                <span className="w-2 h-1 absolute border-l border-solid border-dark-orange border-b -rotate-45 scale-[1.2] mb-0.5"></span>
              )}
            </span>
            <Paragraph>{type} Beds</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Typology;
