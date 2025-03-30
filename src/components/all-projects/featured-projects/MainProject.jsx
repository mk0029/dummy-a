"use client";
import { minifyPath } from "@/utils/defaults";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Card from "./Card";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";

const MainProject = ({ filteredArray }) => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const pathName = usePathname();
  return (
    <>
      {filteredArray.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
          {filteredArray.map((obj, i) => {
            const url = `${pathName}/${minifyPath(
              obj.type
            )}-property-in-${minifyPath(obj.area)}/${minifyPath(obj.title)}`;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i * 2 + 10}00`}
                data-aos-duration="500"
                key={i}
                onClick={() => router.push(url)}
                className={`${
                  i >= 4 && !showAll
                    ? "opacity-0 h-0 overflow-clip"
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
      ) : (
        <>
          <div>
            <Paragraph className="!text-start">
              ❌ No Content Found related to selected category ❌
            </Paragraph>
          </div>
        </>
      )}

      {filteredArray.length > 4 && (
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
