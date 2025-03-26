import AnimatedImageCard from "@/components/common/Components/AnimatedImageCard";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import React from "react";

const Card = ({ title, image, location }) => {
  return (
    <div>
      <AnimatedImageCard
        height={343}
        width={273}
        src={image}
        alt="card content"
        disableAnimation
        scaling
      />
      <Paragraph
        variant="secondary"
        className="!text-start mt-[10px] capitalize max-w-[273px] line-clamp-2">
        {title} | {location}
      </Paragraph>
    </div>
  );
};

export default Card;
