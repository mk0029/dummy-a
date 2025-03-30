import React from "react";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Components/Heading";
import Paragraph from "../common/Components/Paragraph";

const KeyFacts = () => {
  const list = [
    {
      title: "40+",
      info: (
        <>
          Years of legacy in
          <br />
          shaping real estate
        </>
      ),
    },
    {
      title: "30+",
      info: (
        <>
          Premium projects
          <br />
          successfully completed
        </>
      ),
    },
    {
      title: "50+",
      info: (
        <>
          mn. Sq. ft. of
          <br />
          developed space
        </>
      ),
    },
  ];
  return (
    <div className="bg-dark-gray common-space-y lg:!py-12">
      <div className="container ">
        <div data-aos="fade-up" data-aos-delay="1" data-aos-duration="300">
          <TagParagraph className="!text-center">KEY FACTS</TagParagraph>
        </div>
        <Heading
          aos="fade-up"
          aosDelay="10"
          aosDuration="500"
          className=" max-lg:!text-xl mt-1">
          Delivering excellence with continued growth
        </Heading>
        <div className="flex flex-wrap md:px-[100px] mt-4 sm:mt-10 md:mt-11">
          <div className="w-full sm:w-6/12 flex flex-col  justify-between">
            <h2 className="flex items-center max-sm:justify-center text-5xl !leading-100 text-dark-orange cormorantSemiBold">
              65,000+
              <span className="ml-6 text-base">
                Homes <br /> delivered
              </span>
            </h2>
            <div>
              <h3 className="text-dark-orange leading-100 text-xs cormorantBold max-sm:text-center">
                Presence in
              </h3>
              <Paragraph className=" max-sm:mx-auto sm:!text-start mt-2.5 !text-dark-orange !font-normal lg:text-base max-w-[200px]">
                Operating in <br /> Mumbai, Thane, Pune, Bengaluru, and Nashik
              </Paragraph>
            </div>
          </div>
          <div className="w-full sm:w-6/12 flex justify-center h-full max-sm:border-t max-sm:border-t-dark-orange max-sm:pt-4 max-sm:mt-6 sm:border-l border-solid sm:border-l-dark-orange">
            <div>
              {list.map((obj, index) => (
                <h2
                  key={index}
                  className={`flex items-center text-5xl !leading-100 text-dark-orange cormorantSemiBold ${
                    index > 0 && "sm:mt-4 md:mt-5"
                  }`}>
                  <span className="block -translate-y-2"> {obj.title}</span>
                  <span className="ml-6 text-base futuraMedium">
                    {obj.info}
                  </span>
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-end text-sm mt-10 sm:mt-16 md:mt-[70px] pr-[72px] opacity-50 text-black">
        *as of March 31, 2024 | ^By residential sales FY14 – 23
      </p>
    </div>
  );
};

export default KeyFacts;
