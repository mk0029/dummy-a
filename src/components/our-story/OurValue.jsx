"use client";
import React, { useEffect, useState } from "react";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Components/Heading";

const OurValue = () => {
  const list = [
    "We exist to exceed the expectations of our customers through innovative,world-class solutions",
    "We go that last mile to do things right and deliver excellence in all that we undertake",
    "We work with the bes people, treat them well, expect a lot and the rest will follow",
    "We behave with honesty, integrity and ethics with all stakeholders of our organization",
    "We wholeheartedly contribute and create a significant positive impact on our nation’s communities and its environment",
  ];
  const [sliderLength, setSliderLength] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (sliderLength <= list.length) {
        setSliderLength(sliderLength + 1);
      }
      if (activeSlide < list.length - 1) {
        setActiveSlide(activeSlide + 1);
      } else {
        setActiveSlide(0);
      }
    }, 2000);
  }, [sliderLength, activeSlide]);

  return (
    <div className="container common-space-b ">
      <TagParagraph className="!text-center">Our Values</TagParagraph>
      <Heading className="mt-1">
        Shared principles that empower us to fulfill our purpose
      </Heading>
      <div className="flex justify-center mt-7 gap-x-10">
        <div className="w-full max-w-14 flex flex-col gap-2 sticky max-sm:justify-center top-0">
          {list.map((_, index) => (
            <div
              key={index}
              className={`w-full  h-2 bg-light-gray transition-all ease-linear duration-300 ${
                activeSlide === index ? "opacity-100" : "opacity-60"
              }`}></div>
          ))}
        </div>
        <div className="flex max-lg:flex-col -mx-4 w-fit gap-y-7">
          {list.slice(0, sliderLength).map((title, index) => (
            <div
              key={index}
              className={`w-full lg:w-[20%] min-w-[190px] lg:max-w-[250px] transition-all duration-300 ease-linear ${
                sliderLength >= list.length
                  ? activeSlide === index
                    ? "opacity-100"
                    : "opacity-50"
                  : ""
              }`}>
              <p
                data-aos="fade-left"
                data-aso-duration="500"
                className={`text-base leading-[1.3] min-w-[190px] px-4 cormorantSemiBold text-dark-orange`}>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValue;
