"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DETAIL_ACTION_LINKS, DETAIL_LINK_BAR_DATA } from "@/utils/helper";
import { minifyPath } from "@/utils/defaults";

const LinkBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeLink, setActiveLink] = useState(null);

  // Get the current query from URL on mount
  useEffect(() => {
    const currentDetail = searchParams.get("detail"); // Get "detail" from URL
    if (currentDetail) {
      setActiveLink(currentDetail); // Set active link based on URL
    }
  }, [searchParams]);

  const handleClick = (link) => {
    const minifiedLink = minifyPath(link);
    setActiveLink(minifiedLink);

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("detail", minifiedLink);

    router.push(`${pathname}?${newSearchParams.toString()}`); // Update URL
  };

  return (
    <div className="py-2 h-[60px] flex items-center shadow-md">
      <div className="container">
        <div className="flex items-center overflow-x-auto justify-between w-full gap-8 sm:gap-10">
          <ul className="flex items-center gap-8 sm:gap-10">
            {DETAIL_LINK_BAR_DATA.map((link, index) => (
              <li
                data-aos="zoom-in"
                data-aos-delay={`${index * 2 + 4}00`}
                data-aos-duration="500"
                key={link}
                className={`text-sm font-normal transition-all duration-300 ease-linear !leading-125 cursor-pointer hover:text-dark-orange ${
                  activeLink === minifyPath(link) ||
                  (!activeLink && minifyPath(link)) === "about"
                    ? "text-dark-orange"
                    : "text-light-gray"
                }`}
                onClick={() => handleClick(link)}>
                {link}
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-8 sm:gap-10">
            {DETAIL_ACTION_LINKS.map((link, index) => (
              <li
                data-aos="zoom-in"
                data-aos-delay={`${index * 2 + 14}00`}
                data-aos-duration="500"
                key={link}
                className={`text-sm font-normal transition-all duration-300 ease-linear !leading-125 cursor-pointer hover:text-dark-orange ${
                  activeLink === minifyPath(link)
                    ? "text-dark-orange"
                    : "text-light-gray"
                }`}
                onClick={() => handleClick(link)}>
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
