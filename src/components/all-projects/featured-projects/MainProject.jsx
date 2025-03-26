"use client";
import React, { useState } from "react";
import Card from "./Card";
import { FEATURED_PROJECT_DATA_LIST } from "@/utils/helper";
import { useParams, usePathname, useRouter } from "next/navigation";
import { FEATURED_PROJECTS } from "@/utils/projects";
import { minifyPath } from "@/utils/defaults";

const MainProject = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const pathName = usePathname();
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
        {FEATURED_PROJECTS.map((obj, i) => {
          const url = `${pathName}/${minifyPath(
            obj.type
          )}-property-in-${minifyPath(obj.area)}/${minifyPath(obj.title)}`;
          return (
            <div
              key={i}
              onClick={() => router.push(url)}
              className={`${
                i >= 4 && !showAll
                  ? "opacity-0 h-0 overflow-hidden"
                  : "opacity-100 h-auto"
              } transition-all duration-500 group cursor-pointer`}>
              <Card
                image={obj.image}
                title={obj.title}
                location={obj.location}
              />
            </div>
          );
        })}
      </div>
      {FEATURED_PROJECTS.length > 4 && (
        <p
          className="text-dark-orange text-center text-sm leading-142 underline mt-12 cursor-pointer transition-all ease-linear duration-300 hover:text-light-black w-fit mx-auto"
          onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View More"}
        </p>
      )}
    </>
  );
};

export default MainProject;
