import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import React from "react";

const Card = ({ title, image }) => {
  return <div>
    <div className="aspect-[4/5] relative group overflow-hidden">
      <Image className="absolute top-0 left-0 h-full w-full object-cover object-center transition-all duration-300 ease-linear group-hover:scale-[1.15]" src={image} alt="card content" height={342} width={273} quality={100} sizes="100vw" />
    </div>
    <Paragraph variant="secondary" className="!text-start mt-[10px] capitalize max-w-[273px] line-clamp-2">{title}</Paragraph>
  </div>;
};

export default Card;
