"use client";
import Paragraph from "@/components/common/Components/Paragraph";
import Icons from "@/components/common/Icons";
import { useState } from "react";

const PriceRange = ({
  className = "",
  title = "",
  list = [],
  search = false,
}) => {
  const [selectedType, setSelectedType] = useState("");
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isSubDropOpen, setIsSubDropOpen] = useState(-1);

  const projectTypes = ["Apartment", "Villas", "Commercial"];

  return (
    <div className="relative z-50">
      <div
        onClick={() => setIsDropOpen(!isDropOpen)}
        className={`inline-flex justify-between items-center cursor-pointer min-w-[140px] ${className}`}>
        <Paragraph className={`!text-start select-none`}>PriceRange</Paragraph>
        <Icons
          icon="accordion-arrow"
          className={`w-3 ${isDropOpen && "rotate-180"}`}
          stroke="stroke-light-gray"
        />
      </div>
      <div
        className={`min-w-[350px] w-full shadow-[0px_3px_5px_rgba(0,0,0,0.2)] absolute mt-5 right-0 bg-white transition-all duration-300 ease-linear ${
          !isDropOpen && "opacity-0 mt-8 pointer-events-none"
        }`}>
        <div className="absolute shadow-[0_0px_3px_0px_rgba(0,0,0,0.2)] right-0.5 -top-[3px] w-3.5 h-2.5 bg-[#f8f8f8] -rotate-45 -z-10"></div>

        <div className="bg-white p-5 w-full">
          <div className="flex items-center gap-x-4 w-full">
            <div className="min-w-[147px]">
              <Paragraph className="mb-2 !text-start">
                Min. Price (INR)
              </Paragraph>
              <div className=" border border-solid border-light-black p-2.5">
                <Paragraph className="!text-start flex items-center justify-between">
                  1 Crore{" "}
                  <Icons
                    icon="accordion-arrow"
                    className={`w-3 ${isDropOpen && "rotate-180"}`}
                    stroke="stroke-light-gray"
                  />
                </Paragraph>
              </div>
            </div>

            <div className="min-w-[147px]">
              <Paragraph className="!text-start mb-2">
                Max. Price (INR)
              </Paragraph>
              <div className=" border border-solid border-light-black p-2.5">
                {" "}
                <Paragraph className="!text-start flex items-center justify-between">
                  20 crore +{" "}
                  <Icons
                    icon="accordion-arrow"
                    className={`w-3 ${isDropOpen && "rotate-180"}`}
                    stroke="stroke-light-gray"
                  />{" "}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
