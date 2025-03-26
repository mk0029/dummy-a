import AnimatedImageCard from "@/components/common/Components/AnimatedImageCard";
import Cta from "@/components/common/Components/Cta";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import React from "react";

const ImpactCard = ({ src = "", children, url }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <AnimatedImageCard
          width={373}
          height={268}
          disableAnimation
          scaling
          src={src || "/assets/images/impact/webp/environmental-img-1.webp"}
        />
        <Paragraph
          variant="secondary"
          className="mt-3 md:mt-4 !text-start line-clamp-4">
          {children}
        </Paragraph>
      </div>
      {url && <Cta className="mt-4 md:mt-5 w-fit">Know More</Cta>}
    </div>
  );
};

export default ImpactCard;
