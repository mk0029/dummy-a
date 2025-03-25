"use client";
import Paragraph from "@/components/common/Components/Paragraph";
import Icons from "@/components/common/Icons";
import outSideClickHandler from "@/utils/outSideClickHandler";
import { useState } from "react";

const Loyalty = ({ className = "", title = "" }) => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const city = ["Palava", "Alibaug", "Mumbai", "Pune", "Bangalore", "Thane"];

  // Filter cities based on search term
  // const filteredCities = city.filter((c) =>
  //   c.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // // Toggle city selection
  // const handleSelectCity = (type) => {
  //   setSelectedCities((prev) =>
  //     prev.includes(type)
  //       ? prev.filter((city) => city !== type)
  //       : [...prev, type]
  //   );
  // };
  const dropRef = outSideClickHandler(() => {
    setIsDropOpen(false);
  });
  return (
    <div ref={dropRef} className="relative z-[97]">
      <div
        onClick={() => setIsDropOpen(!isDropOpen)}
        className={`inline-flex justify-between items-center cursor-pointer max-lg:gap-x-3 lg:min-w-[125px]  ${className}`}>
        <Paragraph className="!text-start select-none">Loyalty</Paragraph>
        <Icons
          icon="accordion-arrow"
          className={`w-3 ${isDropOpen && "rotate-180"}`}
          stroke="stroke-light-gray "
        />
      </div>

      <div
        className={`min-w-[168px] w-full shadow-[0px_3px_5px_rgba(0,0,0,0.2)] absolute mt-5 right-0 bg-white transition-all duration-300 ease-linear ${
          !isDropOpen && "opacity-0 mt-8 pointer-events-none"
        }`}>
        <div className="absolute shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] right-0.5 -top-[3px] w-3.5 h-2.5 bg-[#f8f8f8] -rotate-45 z-0"></div>

        {/* Search Input */}
        <div className="w-full flex justify-between items-center bg-[#F8F8F8] pr-1.5 relative z-10">
          <input
            type="text"
            className="text-sm !border-none !outline-none !leading-110 text-black w-full pl-2.5 pr-1 min-h-9"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Icons fill="fill-black" icon="search-glass" />
        </div>
      </div>
    </div>
  );
};

export default Loyalty;
