import Paragraph from "@/components/common/Components/Paragraph";
import React from "react";

const NonImgCard = ({ children }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <Paragraph className="mt-3 md:mt-4 !text-start !leading-5">
          {children}
        </Paragraph>
      </div>
    </div>
  );
};

export default NonImgCard;
