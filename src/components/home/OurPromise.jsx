"use client";
import React, { useEffect, useRef } from "react";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurPromise = ({ image, tag, heading, para }) => {
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      
      width: "0%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "15% bottom", 
        toggleActions: "play none none reset",
        // markers:true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="bg-white max-w-[1170px] mx-auto px-4 xl:px-0 py-10 lg:py-12 xl:py-16">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative overflow-clip">
            <span
              ref={overlayRef}
              className="block w-full h-full bg-white absolute top-0 right-0"
            ></span>
            <Image src={image} alt="promise" width={497} height={296} className="w-full" />
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-[550px] lg:max-w-[280px] xl:max-w-[310px] lg:mx-auto">
          <TagParagraph>{tag}</TagParagraph>
          <Heading className={"pt-1 pb-2.5"}>{heading}</Heading>
          <Paragraph>{para}</Paragraph>
          <button className="mt-5 text-[#9D7F19] text-center text-[0.875rem] font-normal leading-[1.25rem] py-2.5 px-5 border border-[#9D7F19] transition-all duration-[0.5s] ease-[cubic-bezier(0.075,0.82,0.165,1)] capitalize cursor-pointer hover:text-white hover:bg-dark-orange">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
