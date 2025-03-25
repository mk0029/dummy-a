import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import React from "react";
import PlanTab from "./PlansTab";
import Cta from "@/components/common/Components/Cta";

const Plans = () => {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="flex w-full max-lg:flex-col">
        <div className="w-3/12 container lg:absolute left-[8%] top-1/2 lg:-translate-y-1/2 max-xl:left-[-1px] mx-auto max-lg:w-full">
          <Heading className="!text-start">Plans</Heading>
          <Paragraph className="!text-start">
            Take a look at our meticulously planned layouts
          </Paragraph>
          <div className="flex items-center gap-4 mt-5 max-lg:mt-3">
            <Cta>View Plans</Cta>
            <Cta> View Prices</Cta>
          </div>
        </div>
        <div className="w-full max-w-[920px] relative z-10 ml-auto h-full max-xl:max-w-[712px] max-lg:max-w-none max-lg:mx-5 max-lg:mt-5">
          <PlanTab />
        </div>
      </div>
    </div>
  );
};

export default Plans;
