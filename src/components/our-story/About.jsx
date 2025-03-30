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
            layerSpeed={1200}
            threshold={0.4}
            width={585}
            height={347}
            // className="lg:max-w-[526px] lg:max-h-[467px]"
            src="/assets/images/allproject/details/webp/azur-lodha-detail-main.jpg"
          />
          <div className="lg:pl-[117px] w-full max-w-[800px] max-sm:mb-4 max-lg:mb-5 flex flex-col justify-center lg:max-w-[585px]">
            <div
              data-aos="fade-left"
              data-aos-delay="1"
              data-aos-duration="300"
              className="w-fit"
            >
              <TagParagraph>about SHEETAL BUILDERS </TagParagraph>
            </div>
            <Heading
              aos="fade-left"
              aosDelay="10"
              aosDuration="500"
              className="!text-start max-lg:!text-xl mt-1 lg:max-w-[400px]"
            >
              Building a Legacy of Excellence
            </Heading>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-2.5 lg:max-w-[400px] !text-left"
            >
              As builders, our commitment to providing strong and reliable
              structures is at the forefront of everything we do. We take pride
              in using only the highest quality materials and utilizing the
              latest building techniques to ensure that our structures are built
              to last.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
