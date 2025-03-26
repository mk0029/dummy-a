"use client";
import Paragraph from "@/components/common/Components/Paragraph";
import Icons from "@/components/common/Icons";
import outSideClickHandler from "@/utils/outSideClickHandler";
import { useState } from "react";

const PriceRange = ({ className = "" }) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isSubDropOpen, setIsSubDropOpen] = useState(-1);
  const [selectedMin, setSelectedMin] = useState("1 Crore");
  const [selectedMax, setSelectedMax] = useState("20 Crore +");

  const priceList = Array.from({ length: 20 }, (_, i) => `${i + 1} Crore`);

  const handleSelectPrice = (price, type) => {
    type === "min" ? setSelectedMin(price) : setSelectedMax(price);
    setIsSubDropOpen(-1);
  };

  const dropRef = outSideClickHandler(() => {
    setIsDropOpen(false);
    setIsSubDropOpen(-1);
  });
  const subDropRef = outSideClickHandler(() => {
    setIsSubDropOpen(-1);
  });

  return (
    <div ref={dropRef} className="sm:relative z-50">
      <div
        onClick={() => setIsDropOpen(!isDropOpen)}
        className={`inline-flex justify-between items-center cursor-pointer max-lg:gap-x-3 lg:min-w-[140px] ${className}`}>
        <Paragraph className="!text-start select-none">Price Range</Paragraph>
        <Icons
          icon="accordion-arrow"
          className={`w-3 ${isDropOpen && "rotate-180"}`}
          stroke="stroke-light-gray"
        />
      </div>

      <div
        className={`absolute mt-5 right-0 bg-white shadow-mdc w-full sm:min-w-[350px] transition-all duration-300 ease-linear ${
          !isDropOpen && "opacity-0 mt-8 pointer-events-none"
        }`}>
        <div
          className={`absolute shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] right-0.5 -top-1 w-3.5 h-2.5 bg-[#f8f8f8] -rotate-45 -z-10 transition-all ease-linear duration-300 `}></div>
        <div className="bg-white p-5 w-full flex gap-x-4">
          {["Min", "Max"].map((label, idx) => (
            <div key={idx} className="min-w-[120px] sm:min-w-[147px] relative">
              <Paragraph className="mb-2 !text-start">
                {label}. Price (INR)
              </Paragraph>
              <div
                onClick={() =>
                  setIsSubDropOpen(isSubDropOpen === idx ? -1 : idx)
                }
                className="border border-light-black p-2.5 cursor-pointer">
                <Paragraph className="flex justify-between items-center">
                  {idx === 0 ? selectedMin : selectedMax}
                  <Icons
                    icon="accordion-arrow"
                    className={`w-3 ${isSubDropOpen === idx && "rotate-180"}`}
                    stroke="stroke-light-gray"
                  />
                </Paragraph>
              </div>
              <div className="relative">
                <div
                  className={`absolute shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] right-0.5 top-1 w-3.5 h-2.5 bg-[#f8f8f8] -rotate-45 z-0 transition-all ease-linear duration-300 ${
                    isSubDropOpen !== idx &&
                    " opacity-0 pointer-events-none mt-5"
                  }`}></div>

                <div
                  className={`absolute top-full mt-2 bg-white shadow-md w-full max-h-[200px] overflow-auto transition-all duration-300 ease-linear ${
                    isSubDropOpen !== idx &&
                    "opacity-0 mt-4 pointer-events-none"
                  }`}>
                  {priceList.slice(0, idx === 0 ? 10 : 20).map((price, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        handleSelectPrice(price, idx === 0 ? "min" : "max")
                      }
                      className={`px-7 h-[45px] flex items-center border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                        (idx === 0 ? selectedMin : selectedMax) === price &&
                        "bg-gray-200"
                      }`}>
                      <Paragraph className="!text-black">
                        {price}
                        {idx === 1 && i === priceList.length - 1 && " +"}
                      </Paragraph>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
