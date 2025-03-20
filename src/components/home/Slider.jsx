"use client"
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import TagParagraph from '../common/TagParagraph';
import Heading from '../common/Heading';

const Slider = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { img: "/assets/images/homepage/webp/slider-1.webp", title: 'Lodha Altamount | Altamount' },
    { img: "/assets/images/homepage/webp/slider-2.webp", title: 'Lodha World Towers | Worli' },
    { img: "/assets/images/homepage/webp/slider-3.webp", title: 'Trump Tower | Worli' },
    { img: "/assets/images/homepage/webp/slider-4.webp", title: 'Lodha Bellagio | Powai' },
  ];

  // Slide Function
  const slideTo = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * 280,
        behavior: 'smooth',
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
        slideTo(activeSlide < slides.length - 1 ? activeSlide + 1 : slides.length - 1);
      } else if (endX - startX > 50) {
        slideTo(activeSlide > 0 ? activeSlide - 1 : 0);
      }
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
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

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="main pt-[50px] lg:pt-[80px] px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center w-full text-center">
          <TagParagraph center>Our Pride</TagParagraph>
          <Heading center>Iconic Properties</Heading>
        </div>

        {/* Slider Section */}
        <div className="slider w-full max-w-[1400px] mx-auto flex justify-center mt-[30px] mb-[30px] overflow-hidden relative">
          <div
            ref={sliderRef}
            className="box-content flex gap-[30px] overflow-hidden"
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col min-w-[250px]">
                <Image className='w-[250px] h-[353px]' width={250} height={353} src={slide.img} alt="slider" />
                <p className='text-[#6d6e70] text-[0.9rem] font-normal leading-[1.3rem] mt-[10px] text-left'>
                  {slide.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows (Between 768px - 1030px only) */}
        <div className=" gap-[15px] items-center justify-center mt-[15px] hidden md:flex lg:hidden">
          <div
            className="cursor-pointer px-[12px] py-[6px] text-[#9D7F19] text-[1.5rem]"
            onClick={() => slideTo(activeSlide > 0 ? activeSlide - 1 : 0)}
          >
            &lt;
          </div>
          <div
            className="cursor-pointer px-[12px] py-[6px] text-[#9D7F19] text-[1.5rem]"
            onClick={() => slideTo(activeSlide < slides.length - 1 ? activeSlide + 1 : slides.length - 1)}
          >
            &gt;
          </div>
        </div>

        {/* Dots (Below 768px only) */}
        <div className="flex gap-[10px] items-center justify-center mt-[15px] md:hidden">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-[10px] h-[10px] rounded-full bg-[#9D7F19] cursor-pointer transition-all ${activeSlide === index ? 'transform translate-y-[-3px]' : ''
                }`}
              onClick={() => slideTo(index)}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex items-center justify-center mt-[15px]">
          <button className='
                        text-[#9D7F19] 
                        text-center 
                        text-[0.875rem] 
                        font-normal 
                        leading-[1.25rem] 
                        py-2.5
                        px-5
                        border 
                        border-[#9D7F19] 
                        transition-all 
                        duration-[0.5s] 
                        ease-[cubic-bezier(0.075,0.82,0.165,1)] 
                        capitalize 
                        cursor-pointer hover:text-white hover:bg-dark-orange'>
            View All Projects
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
