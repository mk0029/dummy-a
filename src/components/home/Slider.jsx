"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Heading";

const Slider = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      img: "/assets/images/homepage/webp/slider-1.webp",
      title: "Lodha Altamount | Altamount",
    },
    {
      img: "/assets/images/homepage/webp/slider-2.webp",
      title: "Lodha World Towers | Worli",
    },
    {
      img: "/assets/images/homepage/webp/slider-3.webp",
      title: "Trump Tower | Worli",
    },
    {
      img: "/assets/images/homepage/webp/slider-4.webp",
      title: "Lodha Bellagio | Powai",
    },
  ];

  // Slide Function
  const slideTo = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * 280,
        behavior: "smooth",
      });
      setActiveSlide(index);
    }
  };

  // Handle Swipe (Mobile Touch Support)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        slideTo(
          activeSlide < slides.length - 1 ? activeSlide + 1 : slides.length - 1
        );
      } else if (endX - startX > 50) {
        slideTo(activeSlide > 0 ? activeSlide - 1 : 0);
      }
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSlide]);

  // Auto-set active slide based on scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const currentIndex = Math.round(slider.scrollLeft / 280);
      setActiveSlide(currentIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="max-w-[1170px] xl:px-0 mx-auto py-[50px] lg:py-20 px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center w-full text-center">
          <div data-aos="fade-up">
            <TagParagraph center>Our Pride</TagParagraph>
          </div>
          <Heading
            aosdelay={"150"}
            aostime={"fade-up"}
            className={"pt-1"}
            center
          >
            Iconic Properties
          </Heading>
        </div>

        {/* Slider Section */}
        <div className="slider  w-full max-w-[1170px] mx-auto flex justify-center mt-[30px] mb-[30px] overflow-hidden relative">
          <div
            ref={sliderRef}
            className="w-full justify-between flex gap-[30px] overflow-hidden"
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col min-w-[250px]">
                <Image
                  data-aos="fade-up"
                  className="w-[250px] h-[353px]"
                  width={250}
                  height={353}
                  src={slide.img}
                  alt="slider"
                />
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-light-gray text-sm font-medium futuraMedium !leading-110 mt-[10px] text-left"
                >
                  {slide.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows (Between 768px - 1030px only) */}
        <div className=" gap-4 items-center justify-center mt-[15px] hidden md:flex lg:hidden">
          <div
            className="cursor-pointer px-[12px] py-[6px] text-dark-orangetext-[1.5rem]"
            onClick={() => slideTo(activeSlide > 0 ? activeSlide - 1 : 0)}
          >
            &lt;
          </div>
          <div
            className="cursor-pointer px-[12px] py-[6px] text-dark-orangetext-[1.5rem]"
            onClick={() =>
              slideTo(
                activeSlide < slides.length - 1
                  ? activeSlide + 1
                  : slides.length - 1
              )
            }
          >
            &gt;
          </div>
        </div>

        {/* Dots (Below 768px only) */}
        <div className="flex gap-1.5 items-center justify-center mt-[15px] md:hidden">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full bg-[#9D7F19] cursor-pointer transition-all ${
                activeSlide === index ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => slideTo(index)}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex items-center justify-center mt-10">
          <button
            data-aos="fade-up"
            data-aos-delay="100"
            className="
                        text-dark-orange
                        text-center 
                        text-[0.875rem] 
                        font-normal 
                        !leading-110 
                        py-2.5
                        px-5
                        border 
                        border-dark-orange 
                        transition-all 
                        duration-[0.5s] 
                        ease-[cubic-bezier(0.075,0.82,0.165,1)] 
                        capitalize 
                        cursor-pointer hover:text-white hover:bg-dark-orange"
          >
            View All Projects
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
