"use client"
import { DETAIL_ACTION_LINKS, DETAIL_LINK_BAR_DATA } from "@/utils/helper";
import { useState } from "react";



const LinkBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="py-2 h-[60px] flex items-center shadow-md">
      <div className="container">
        <div className="flex items-center overflow-x-auto justify-between w-full gap-8 sm:gap-10">
          <ul className="flex items-center gap-8 sm:gap-10">
            {DETAIL_LINK_BAR_DATA.map((link) => (
              <li
                key={link}
                className={`text-sm font-normal transition-all duration-300 ease-linear !leading-125 cursor-pointer hover:text-dark-orange ${
                  activeLink === link ? "text-dark-orange" : "text-light-gray"
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-8 sm:gap-10">
            {DETAIL_ACTION_LINKS.map((link) => (
              <li
                key={link}
                className={`text-sm font-normal transition-all duration-300 ease-linear !leading-125 cursor-pointer hover:text-dark-orange ${
                  activeLink === link ? "text-dark-orange" : "text-light-gray"
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkBar;
