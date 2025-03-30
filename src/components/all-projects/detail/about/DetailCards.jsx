import AnimatedImageCard from "@/components/common/Components/AnimatedImageCard";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import React from "react";

const DetailCards = ({ content }) => {
  return (
    <div className="py-20">
      <div className="container">
        {content?.propertyLogo && (
          <Image
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="500"
            className="w-[150px] h-[41px] object-contain mx-auto"
            width={150}
            height={42}
            alt="logo"
            src={content.propertyLogo}
          />
        )}
        <Paragraph
          aos="fade-up"
          aosDuration="400"
          className="mt-4 flex justify-center max-w-[800px] mx-auto">
          {content?.title ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maiores dolorum ratione nobis laboriosam laborum. Iure cum at hic reprehenderit?"}
        </Paragraph>
        {content?.details?.map((obj, index) => {
          return (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0
                  ? "max-lg:flex-col"
                  : "flex-row-reverse max-lg:flex-col"
              } w-full pt-[30px]`}>
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
                  className="!text-start max-lg:!text-xl lg:max-w-[400px]">
                  {obj.title}
                </Heading>
                <Paragraph
                  aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  aosDelay="200"
                  aosDuration="500"
                  className="mt-2.5 lg:max-w-[400px] !text-left">
                  {obj.description}
                </Paragraph>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailCards;
