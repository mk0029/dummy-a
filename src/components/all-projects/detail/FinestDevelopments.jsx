import AnimatedImageCard from "@/components/common/Components/AnimatedImageCard";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import React from "react";

const FinestDevelopments = () => {
  const list = [
    {
      title:
        "Recognizing the profound impact of design and service on well-being, we create thoughtful and purposeful living spaces.",
      image: "/assets/images/allproject/details/webp/finest-dev-1.webp",
    },
    {
      title:
        "Committed to surpassing expectations, our carefully crafted events and experiences ensure an enriched and empowered lifestyle.",
      image: "/assets/images/allproject/details/webp/finest-dev-2.webp",
    },
    {
      title:
        "We are creating homes and workspaces for an ever-changing tomorrow, where luxury and sustainability can co-exist in perfect harmony.",
      image: "/assets/images/allproject/details/webp/finest-dev-3.webp",
    },
  ];
  return (
    <div className="container sm:pb-4 pt-12 md:pb-8 md:pt-14 lg:py-[60px]">
      <Heading>Creating the world’s finest developments</Heading>
      <div className="flex w-full mt-6 lg:mt-8 -mx-2">
        {list.map((obj, index) => (
          <div key={index} className="w-4/12 px-2 group cursor-pointer">
            <AnimatedImageCard
              key={index}
              src={obj.image}
              width={374}
              height={285.48}
              disableAnimation
              scaling
            />
            <Paragraph variant="secondary" className="mt-2.5 md:mt-4">
              {obj.title}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinestDevelopments;
