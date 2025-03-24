import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import { RECOGNITION_LIST } from "@/utils/helper";
import React from "react";
import NonImgSwiper from "../common/NonImgSwiper";

const Recognition = () => {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-20 container overflow-hidden">
      <Heading>Recognition</Heading>
      <Paragraph className="pt-2.5">
        Leading in global sustainability benchmarks
      </Paragraph>
      <NonImgSwiper list={RECOGNITION_LIST} />
    </div>
  );
};

export default Recognition;
