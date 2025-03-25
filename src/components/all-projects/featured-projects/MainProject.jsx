"use client";
import React, { useState } from "react";
import Card from "./Card";
import { FEATURED_PROJECT_DATA_LIST } from "@/utils/helper";
import { useRouter } from "next/navigation";

const MainProject = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
        {FEATURED_PROJECT_DATA_LIST.map((obj, i) => (
          <div
            key={i}
            onClick={() =>
              router.push(
                "/all-projects/" +
                  obj.title
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace("|", "")
                    .replace("--", "-")
              )
            }
            className={`${
              i >= 4 && !showAll
                ? "opacity-0 h-0 overflow-hidden"
                : "opacity-100 h-auto"
            } transition-all duration-500`}>
            <Card image={obj.image} title={obj.title} />
          </div>
        ))}
      </div>
      <p
        className="text-dark-orange text-center text-sm leading-142 underline mt-12 cursor-pointer transition-all ease-linear duration-300 hover:text-light-black"
        onClick={() => setShowAll(!showAll)}>
        {showAll ? "View Less" : "View More"}
      </p>
    </>
  );
};

export default MainProject;
