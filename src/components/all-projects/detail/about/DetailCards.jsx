import AnimatedImageCard from "@/components/common/Components/AnimatedImageCard";
import Paragraph from "@/components/common/Components/Paragraph";
import Heading from "@/components/common/Heading";
import Image from "next/image";
import React from "react";

const DetailCards = ({ content }) => {
  return (
    <div className="py-20">
      <div className="container">
        {content?.propertyLogo && (
          <Image
            className="w-[150px] h-[41px] object-contain mx-auto"
            width={150}
            height={42}
            alt="logo"
            src={content.propertyLogo}
          />
        )}
        <Paragraph className="mt-4 flex justify-center max-w-[800px] mx-auto">
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
                  : "flex-row-reverse max-lg:flex-col-reverse"
              } w-full pt-[30px]`}>
              <AnimatedImageCard
                onceTrue
                layerSpeed={500}
                threshold={0.4}
                width={526}
                height={467}
                className="lg:max-w-[526px] lg:max-h-[467px]"
                src={obj.image}
              />
              <div className="lg:pl-[117px] w-full max-w-[800px] max-lg:mt-4 flex flex-col justify-center lg:max-w-[643px]">
                <Heading className="max-lg:!text-xl lg:max-w-[400px]">
                  {obj.title}
                </Heading>
                <Paragraph className="mt-2.5 lg:max-w-[400px] !text-left">
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
