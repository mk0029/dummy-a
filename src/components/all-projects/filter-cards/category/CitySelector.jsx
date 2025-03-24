"use client";
import Paragraph from "@/components/common/Components/Paragraph";
import Icons from "@/components/common/Icons";
import { useState } from "react";

const CitySelector = ({
  className = "",
  title = "",
  list = [],
  search = false,
}) => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const city = ["Palava", "Alibaug", "Mumbai", "Pune", "Bangalore", "Thane"];

  // Toggle city selection
  const handleSelectCity = (type) => {
    setSelectedCities((prev) =>
      prev.includes(type)
        ? prev.filter((city) => city !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="relative z-50">
      <div
        onClick={() => setIsDropOpen(!isDropOpen)}
        className={`inline-flex justify-between items-center cursor-pointer min-w-[100px] gap-x-5 ${className}`}>
        <Paragraph className="!text-start select-none">
          {selectedCities.length > 0 && "Selected"} City
          {selectedCities.length > 0 && "'s"}{" "}
          {selectedCities.length > 0 && selectedCities.length}
        </Paragraph>
        <Icons
          icon="accordion-arrow"
          className={`w-3 ${isDropOpen && "rotate-180"}`}
          stroke="stroke-light-gray "
        />
      </div>

      <div
        className={`min-w-[168px] w-full shadow-[0px_3px_5px_rgba(0,0,0,0.2)] absolute mt-5 right-0 bg-[#F8F8F8] transition-all duration-300 ease-linear ${
          !isDropOpen && "opacity-0 mt-8 pointer-events-none"
        }`}>
        <div className="absolute shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] right-0.5 -top-[3px] w-3.5 h-2.5 bg-[#f8f8f8] -rotate-45 z-0"></div>

        <div className="w-full flex justify-between items-center bg-[#F8F8F8] pr-1.5 relative z-10">
          <input
            id={`drop-input-${title.replace(" ", "-")}`}
            type="text"
            className="text-sm !border-none !outline-none !leading-110 text-black w-full pl-2.5 pr-1 min-h-9"
            placeholder="Search ..."
          />
          <Icons fill="fill-black" icon="search-glass" />
        </div>

        <div className="max-h-[235px] overflow-auto">
          {city.map((type, index) => (
            <div
              onClick={() => handleSelectCity(type)}
              key={index}
              className={`py-3.5 w-full flex items-center border-b border-solid border-b-[rgba(0,0,0,0.1)] px-7 gap-x-2.5 hover:bg-light-black/10 transition-all ease-linear cursor-pointer ${
                selectedCities.includes(type) ? "bg-white" : "bg-transparent"
              }`}>
              <span className="size-[18px] relative flex justify-center items-center border border-solid border-dark-orange">
                {selectedCities.includes(type) && (
                  <span className="w-2 h-1 absolute border-l border-solid border-dark-orange border-b -rotate-45"></span>
                )}
              </span>
              <Paragraph>{type}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySelector;
