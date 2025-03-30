import React from "react";
import Paragraph from "../common/Components/Paragraph";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Components/Heading";
import AnimatedImageCard from "../common/Components/AnimatedImageCard";
import Link from "next/link";
import Icons from "../common/Icons";

const FeaturedAwards = () => {
  const list = [
    "Recognized among India’s Top Builders 2024",
    "Best Luxury Developer 2023 by Real Estate Awards",
    "Sustainable Developer of the Year 2023",
    "Certified as a Great Place to Work 2024-25",
    "Great Manager Award 2023",
    " Among India's Top Builders 2024 in the National Category, Construction World Architect & Builder Awards",
  ];
  return (
    <div className="bg-dark-gray w-full text-center pt-[50px] pb-[100px] max-lg:pb-[50px]">
      <div data-aos="fade-left" data-aos-delay="1" data-aos-duration="300">
        <TagParagraph
          ado="fade-left"
          aos-delay="1"
          aso-duration="300"
          className="!text-center">
          Featured awards
        </TagParagraph>
      </div>
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
            {list.map((title, index) => (
              <Paragraph
                key={index}
                aos="fade-left"
                aosDelay="200"
                aosDuration="500"
                className={`lg:max-w-[485px] !text-left ${
                  index > 0 && "mt-3 md:mt-5 "
                }`}>
                {title}
              </Paragraph>
            ))}
            <Link
              href="#"
              className="text-start text-dark-orange mt-[35px] flex items-center gap-3 text-[17.6px] cormorantSemiBold hover:gap-4 duration-300 ease-linear">
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
