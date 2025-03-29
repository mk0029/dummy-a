import React from "react";
import Heading from "../common/Components/Heading";
import TagParagraph from "../common/TagParagraph";
import Paragraph from "../common/Components/Paragraph";
import AnimatedImageCard from "../common/Components/AnimatedImageCard";

const About = () => {
  return (
    <div className="bg-light-orange">
      {" "}
      <div className="common-space-y container">
        <div className={`flex max-lg:flex-col-reverse w-full`}>
          <AnimatedImageCard
            onceTrue
            layerSpeed={500}
            threshold={0.4}
            width={585}
            height={347}
            // className="lg:max-w-[526px] lg:max-h-[467px]"
            src="/assets/images/ourstory/webp/about-lodha-story.webp"
          />
          <div className="lg:pl-[117px] w-full max-w-[800px] max-sm:mb-4 max-lg:mb-5 flex flex-col justify-center lg:max-w-[585px]">
            <div
              ado="fade-left"
              aos-delay="1"
              aso-duration="300"
              className="w-fit">
              <TagParagraph>about SHEETAL BUILDERS </TagParagraph>
            </div>
            <Heading
              aos="fade-left"
              aosDelay="10"
              aosDuration="500"
              className="!text-start max-lg:!text-xl mt-1 lg:max-w-[400px]">
              Building a Legacy of Excellence
            </Heading>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-2.5 lg:max-w-[400px] !text-left">
              As pioneers in the real estate industry, Sheetal Builders is
              committed to transforming urban landscapes with state-of-the-art
              residential and commercial projects. With an unwavering focus on
              quality, trust, and sustainability, we craft developments that not
              only redefine living and working spaces but also set new
              benchmarks in innovation and excellence.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
