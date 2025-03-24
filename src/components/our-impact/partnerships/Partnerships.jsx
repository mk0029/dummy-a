import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import React from "react";
import NonImgSwiper from "../common/NonImgSwiper";
import { PARTNERSHIPS_LIST } from "@/utils/helper";

const Partnerships = () => {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-20 container overflow-hidden">
      <Heading>Recognition</Heading>
      <Paragraph className="pt-2.5">
        Leading in global sustainability benchmarks
      </Paragraph>
      <NonImgSwiper list={PARTNERSHIPS_LIST} className="block" />
    </div>
  );
};

export default Partnerships;
