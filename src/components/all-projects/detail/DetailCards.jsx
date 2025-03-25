import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import Image from "next/image";
import React from "react";

const DetalCards = () => {
  return (
    <div className="py-20">
      <div className="container">
        <Image
          className="w-[150px] h-[41px] object-cover mx-auto"
          width={150}
          height={42}
          alt="logo"
          src="/assets/images/details/png/lodha-logo.png"
        />
        <Paragraph className="text-center mx-auto mt-4 flex justify-center">
          A sculptural statement so powerful, it has transformed Mumbai's
          skyline forever.
        </Paragraph>
        <div className="flex max-lg:flex-col w-full pt-[30px]">
          <div className="w-full lg:max-w-[526px] lg:max-h-[467px] aspect-[526/467] relative">
            <Image
              className="object-cover"
              src="/assets/images/details/webp/acres.webp"
              alt="details"
              fill
            />
          </div>
          <div className="lg:pl-[117px] w-full max-w-[800px] max-lg:mt-4 flex flex-col justify-center lg:max-w-[643px]">
            <Heading className="max-lg:!text-xl lg:max-w-[400px]">
              A private world of unimaginable luxury, spanning 17 landscaped
              acres
            </Heading>
            <Paragraph className="mt-2.5 lg:max-w-[400px]">
              A magnificent 17-acre estate ensconced in the Mumbai Mile, the
              glittering stretch that comprises some of Mumbai’s finest
              residences, business spaces and luxury hotels, Lodha World Towers
              embodies global standards in luxury. The grand landscaped entrance
              courtyard extends over almost 100,000 sq. ft.
            </Paragraph>
          </div>
        </div>
        <div className="flex max-lg:flex-col-reverse w-full pt-[30px]">
          <div className="lg:pl-[117px] w-full max-w-[800px] max-lg:mt-4 flex flex-col justify-center lg:max-w-[643px]">
            <Heading className="max-lg:!text-xl lg:max-w-[400px]">
              Rarely do many legends come together to create a landmark that
              embodies the world's best
            </Heading>
            <Paragraph className="mt-2.5 lg:max-w-[400px]">
              Armani/ Casa, one of the world's best-known names in interior
              design; Pei Cobb Freed, world-renowned architects; LERA,
              globally-acclaimed structural engineers; Ken Smith,
              internationally awarded landscape designer. Lodha World Towers
              represents a historic meeting of some of the world’s greatest
              legends.
            </Paragraph>
          </div>
          <div className="w-full lg:max-w-[526px] lg:max-h-[467px] aspect-[526/467] relative">
            <Image
              className="object-cover"
              src="/assets/images/details/webp/landmark.webp"
              alt="details"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalCards;
