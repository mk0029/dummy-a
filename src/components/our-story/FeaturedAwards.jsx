import React from "react";
import Paragraph from "../common/Components/Paragraph";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Components/Heading";
import AnimatedImageCard from "../common/Components/AnimatedImageCard";
import Link from "next/link";
import Icons from "../common/Icons";

const FeaturedAwards = () => {
  return (
    <div className="bg-dark-gray w-full text-center pt-[50px] pb-[100px] max-lg:pb-[50px]">
      {" "}
      <TagParagraph
        ado="fade-left"
        aos-delay="1"
        aso-duration="300"
        className="!text-center"
      >
        Featured awards
      </TagParagraph>
      <div className="container mt-[30px]">
        <div className={`flex max-lg:flex-col w-full justify-center`}>
          <div className="w-6/12 flex justify-center items-center max-w-[485px] max-lg:mx-auto">
            <AnimatedImageCard
              onceTrue
              layerSpeed={500}
              threshold={0.4}
              width={350}
              height={350}
              className="max-w-[350px] max-lg:mx-auto"
              src="/assets/images/ourstory/webp/featured-awards-story.webp"
            />
          </div>
          <div className="lg:pl-[ max-xl:mt-[30px] w-full lg:w-6/12 max-sm:mb-4 max-lg:mb-5 flex flex-col justify-center lg:max-w-[485px]">
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="lg:max-w-[485px] !text-left"
            >
              Recognition for our leadership in luxury real estate and
              sustainability
            </Paragraph>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-5 lg:max-w-[485px] !text-left"
            >
              Best organisations for women 2024, by Economic Times
            </Paragraph>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-5 lg:max-w-[485px] !text-left"
            >
              ET Sustainable Organisations 2023
            </Paragraph>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-5 lg:max-w-[485px] !text-left"
            >
              Iconic Brands of India 2023 by ET Edge
            </Paragraph>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-5 lg:max-w-[485px] !text-left"
            >
              Great Manager Award 2023
            </Paragraph>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-5 lg:max-w-[485px] !text-left"
            >
              Among India's Top Builders 2024 in the National Category,
              Construction World Architect & Builder Awards
            </Paragraph>
            <Paragraph
              aos="fade-left"
              aosDelay="200"
              aosDuration="500"
              className="mt-5 lg:max-w-[485px] !text-left"
            >
              Great place to work 2024 – 25
            </Paragraph>
            <Link
              href="#"
              className="text-start text-dark-orange mt-[35px] flex items-center gap-3 text-[17.6px] cormorantSemiBold hover:gap-4 duration-300 ease-linear"
            >
              View All
              <Icons icon="rightArrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAwards;
