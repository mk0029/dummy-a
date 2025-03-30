"use client";
import React, { useEffect, useState } from "react";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Components/Heading";

const OurValue = () => {
  const list = [
    "As builders, our commitment to providing strong and reliable structures is at the forefront of everything we do",
    "We also understand that our clients are entrusting us with one of their most valuable investments, and we take that responsibility very seriously.",
    "In short, our building strength and trust in our clients is a reflection of our commitment to excellence in everything we do.",
    "As builders, our commitment to providing strong and reliable structures is at the forefront of everything we do",
    "We have built a reputation for honesty, integrity, and transparency in our work, and we always strive to maintain open and effective communication with our clients.",
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
      <div data-aos="fade-up" data-aos-delay="1" data-aos-duration="300">
        <TagParagraph className="!text-center">Our Values</TagParagraph>
      </div>
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
              }`}
            ></div>
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
              }`}
            >
              <p
                data-aos="fade-left"
                data-aso-duration="500"
                className={`text-base leading-[1.3] min-w-[190px] px-4 cormorantSemiBold text-dark-orange`}
              >
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
