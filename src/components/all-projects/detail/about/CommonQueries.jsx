"use client";
import { Accordion } from "@/components/common/Components/accordion";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import { useState } from "react";

const CommonQueries = ({ content }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(-1);

  return (
    <div className="container  py-12 sm:py-14 md:py-16 lg:py-20 ">
      <Heading className="!text-start md:mb-2.5">
        {content?.title || "Most common queries"}
      </Heading>

      <div className="flex flex-col">
        {content?.queriesList &&
          content?.queriesList?.map((obj, index) => (
            <Accordion
              titleClassName=""
              defaultOpen={activeFaqIndex === index}
              onClick={() =>
                setActiveFaqIndex(activeFaqIndex === index ? -1 : index)
              }
              key={index}
              title={obj.title}>
              <Paragraph className="!text-left lg:pl-3 lg:pr-5">
                {" "}
                {obj.description}
              </Paragraph>
            </Accordion>
          ))}
        {content?.rera && (
          <div className="mt-14 sm:mt-16 lg:mt-20">
            <Accordion
              titleClassName=""
              defaultOpen={activeFaqIndex === -2}
              onClick={() => setActiveFaqIndex(activeFaqIndex === -2 ? -1 : -2)}
              title="Lodha World Towers RERA">
              <div className="flex max-md:flex-col-reverse gap-4">
                {content?.rera?.image && (
                  <Image
                    width={135}
                    height={135}
                    quality={100}
                    sizes="100vw"
                    className="min-w-[135px] max-h-[135px]"
                    src={content?.rera?.image}
                    alt="rera-content"
                  />
                )}
                <Paragraph className="!text-start para-detail-rera max-w-[875px]">
                  {content?.rera?.description || "loading..."}
                </Paragraph>
              </div>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonQueries;
