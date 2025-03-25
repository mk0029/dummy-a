import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import React from "react";

const Plans = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="w-4/12">
          <Heading className="!text-start">Plans</Heading>
          <Paragraph className="!text-start">
            Take a look at our meticulously planned layouts
          </Paragraph>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
