import React from "react";
import PlanTab from "./PlansTab";
import Cta from "@/components/common/Components/Cta";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";

const Plans = ({ content }) => {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-20 relative overflow-clip">
      <div className="flex w-full max-lg:flex-col">
        <div className="w-3/12 container lg:absolute left-[8%] top-1/2 lg:-translate-y-1/2 max-xl:left-[-1px] mx-auto max-lg:w-full">
          <Heading aos="fade-right" aosDuration="400" className="!text-start">
            {content?.title || "Plans"}
          </Heading>
          <Paragraph
            aos="fade-right"
            aosDuration="400"
            aosDelay="250"
            className="!text-start">
            {content?.description ||
              " Take a look at our meticulously planned layouts"}
          </Paragraph>
          <div className="flex items-center gap-4 mt-5 max-lg:mt-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-duration="500">
              <Cta>View Plans</Cta>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="900"
              data-aos-duration="500">
              <Cta> View Prices</Cta>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[920px] relative z-10 ml-auto h-full max-xl:max-w-[712px] max-lg:max-w-none max-lg:mx-5 max-lg:mt-5">
          <PlanTab list={content?.info} />
        </div>
      </div>
    </div>
  );
};

export default Plans;
