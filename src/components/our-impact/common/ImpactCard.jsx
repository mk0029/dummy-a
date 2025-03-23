import Cta from "@/components/common/Components/Cta";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import React from "react";

const ImpactCard = ({ src = "", children, url }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="w-full aspect-[1.39] relative overflow-hidden group">
          <Image
            src={src || "/assets/images/impact/webp/environmental-img-1.webp"}
            width={373.99}
            height={268.5}
            quality={100}
            sizes="100vw"
            alt="card content"
            className="absolute top-0 left-0 h-full w-full object-cover object-center group-hover:scale-110 transition-all ease-linear duration-500 select-none pointer-events-none"
          />
        </div>
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
