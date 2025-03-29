import React from "react";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Components/Heading";
import Paragraph from "../common/Components/Paragraph";
import Cta from "../common/Components/Cta";

const WhoWeAre = () => {
  const list = [
    {
      title: "Leadership Team",
      info: "A passionate workforce dedicated to delivering projects that redefine luxury and convenience.",
    },
    {
      title: "Our Values",
      info: "We believe in exceeding customer expectations through superior craftsmanship, sustainable development, and unparalleled service.",
    },
  ];
  return (
    <div className="container common-space-y">
      <TagParagraph className="!text-center">WHO WE ARE</TagParagraph>
      <Heading
        aos="fade-up"
        aosDelay="10"
        aosDuration="500"
        className=" max-lg:!text-xl mt-1">
        Guided by Visionary Leadership
      </Heading>
      <div className="flex flex-wrap gap-y-7 mt-6 -mx-4 lg:-mx-6">
        {list.map((obj, index) => (
          <div
            key={index}
            className="w-full md:w-6/12 px-4 lg:px-6 text-center ">
            <div className="py-5 sm:py-7 md:py-9 bg-light-orange px-6 sm:px-8 md:px-10 lg:px-[50px] h-full flex flex-col justify-between">
              <div>
                <Heading className="mt-1">{obj.title}</Heading>
                <Paragraph className="mt-1.5 sm:mt-2.5">{obj.info}</Paragraph>
              </div>
              <Cta className="mx-auto max-w-[120px] w-full mt-4 md:mt-5">
                View
              </Cta>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
