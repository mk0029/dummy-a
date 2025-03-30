import React from "react";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Components/Heading";
import Paragraph from "../common/Components/Paragraph";
import { OUR_STORY_LIST } from "@/utils/helper";
import AnimatedImageCard from "../common/Components/AnimatedImageCard";

const OutStory = () => {
  return (
    <div className="container common-space-y text-center">
      <div data-aos="fade-up" data-aos-delay="1" data-aos-duration="300">
        <TagParagraph className="!text-center"> OUR STORY </TagParagraph>
      </div>
      <Heading
        aos="fade-up"
        aosDelay="10"
        aosDuration="500"
        className=" max-lg:!text-xl mt-1"
      >
        Raising expectations for real estate
      </Heading>
      <Paragraph
        aos="fade-up"
        aosDelay="200"
        aosDuration="500"
        className="max-w-[800px] mx-auto pt-2.5"
      >
        We also understand that our clients are entrusting us with one of their
        most valuable investments, and we take that responsibility very
        seriously. That's why we are dedicated to delivering not just a
        building, but a complete and comprehensive solution that meets their
        unique needs and exceeds their expectations.
      </Paragraph>
      {OUR_STORY_LIST.map((obj, index) => {
        return (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0
                ? "max-lg:flex-col"
                : "flex-row-reverse max-lg:flex-col"
            } w-full pt-[30px]`}
          >
            <AnimatedImageCard
              onceTrue
              layerSpeed={1200}
              threshold={0.4}
              width={526}
              height={467}
              className="lg:max-w-[526px] lg:max-h-[467px]"
              src={obj.image}
            />
            <div className="lg:pl-[117px] w-full max-w-[800px] max-lg:mt-4 flex flex-col justify-center lg:max-w-[643px]">
              <Heading
                aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                aosDelay="10"
                aosDuration="500"
                className="!text-start max-lg:!text-xl lg:max-w-[400px]"
              >
                {obj.title}
              </Heading>
              <Paragraph
                aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                aosDelay="200"
                aosDuration="500"
                className="mt-2.5 lg:max-w-[400px] !text-left"
              >
                {obj.description}
              </Paragraph>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OutStory;
