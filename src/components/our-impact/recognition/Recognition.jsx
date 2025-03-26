"use client";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import { RECOGNITION_LIST } from "@/utils/helper";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Recognition = () => {
  return (
    <div className="max-w-[1200px] max-xl:container xl:px-5 mx-auto py-12 sm:py-14 md:py-16 lg:py-20 relative">
      <div className="w-full text-center flex flex-col mb-14 max-lg:mb-10">
        <Heading>Recognition</Heading>
        <Paragraph className="mt-2.5">
          Leading in global sustainability benchmarks
        </Paragraph>
      </div>
      <Swiper
        className="!w-full mySwiper"
        navigation={{
          nextEl: ".swiper-next-button",
          prevEl: ".swiper-prev-button",
        }}
        slidesPerView={3}
        spaceBetween={0}
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1.11, spaceBetween: 0 },
          768: { slidesPerView: 1.3, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }}
        modules={[Autoplay, Navigation, Pagination]}>
        {RECOGNITION_LIST.map((obj, id) => (
          <SwiperSlide
            key={id}
            className={`w-1/4 max-w-[292.5px] max-lg:max-w-[611px] max-lg:w-full px-10 text-start border-dark-orange min-h-[140px] max-xl:px-7 max-lg:min-h-[60px] max-lg:px-6 ${
              id === 6 ? "border-0" : "border-r-[0.5px]"
            }`}>
            <Paragraph className="text-start !leading-5">
              {obj.description}
            </Paragraph>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-14 flex justify-center items-center gap-10 max-lg:mt-12">
        <div className="swiper-prev-button size-4 rotate-45 relative cursor-pointer border-dark-orange border-solid border-2 border-t-0 border-r-0 hover:border-light-black transition-all duration-300 ease-linear rounded-bl-xs"></div>
        <div className="swiper-next-button  size-4 rotate-45 relative cursor-pointer border-dark-orange border-solid border-2 border-b-0 border-l-0 hover:border-light-black transition-all duration-300 ease-linear rounded-tr-xs"></div>
      </div>
    </div>
  );
};

export default Recognition;
