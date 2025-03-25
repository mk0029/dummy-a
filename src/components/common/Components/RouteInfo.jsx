"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const RouteInfo = () => {
  const [pathArray, setPathArray] = useState([]);
  const pathName = usePathname();
  useEffect(() => {
    setPathArray(pathName.split("/"));
  }, [pathName]);

  return (
    <div className="container py-6 lg:py-8">
      <p className="text-sm text-light-gray font-normal leading-normal flex items-center gap-x-1">
        <Link className="text-sm" href="/">
          Home
        </Link>
        {pathArray.map((obj, index) => (
          <span key={index} className="flex items-center">
            {index > 0 && (
              <span className=" size-1 border-b border-r border-solid border-b-light-gray border-r-light-gray -rotate-45 inline-block"></span>
            )}
            {index > 0 && pathArray.length - 1 === index ? (
              <span
                className={`text-dark-orange capitalize inline-block pl-1 text-sm`}>
                {obj.replace("-", " ")}
              </span>
            ) : (
              <Link
                href={`/${obj}`}
                className={`hover:text-dark-orange transition-all duration-300 ease-linear
                 capitalize inline-block pl-1 text-sm`}>
                {obj.replace("-", " ")}
              </Link>
            )}
          </span>
        ))}
      </p>
    </div>
  );
};

export default RouteInfo;
