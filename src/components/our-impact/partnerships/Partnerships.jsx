"use client";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import { PARTNERSHIPS_LIST } from "@/utils/helper";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Partnerships = () => {
  return (
    <div className="max-w-[1200px] max-xl:container xl:px-5 mx-auto pb-12 sm:pb-14 md:pb-16 lg:pb-20 relative flex flex-col justify-center items-center">
      <div className="w-full text-center flex flex-col mb-14 max-lg:mb-10">
        <Heading>Partnerships</Heading>
        <Paragraph className="mt-2.5">
          Strategic partnerships to lead the change in the industry
        </Paragraph>
      </div>
      <Swiper
        className="!w-full mySwiper !flex !justify-center lg:max-w-[876px]"
        navigation={{
          nextEl: ".swiper-next-button-2",
          prevEl: ".swiper-prev-button-2",
        }}
        slidesPerView={3}
        spaceBetween={0}
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1.11, spaceBetween: 0 },
          768: { slidesPerView: 1.3, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
        }}
        modules={[Autoplay, Navigation, Pagination]}>
        {PARTNERSHIPS_LIST.map((obj, id) => (
          <SwiperSlide
            key={id}
            className={`w-[292.5px] max-lg:w-full px-10 text-start border-dark-orange min-h-[100px] max-xl:px-7 max-lg:min-h-[60px] max-lg:px-6 ${
              id === 2 ? "border-0" : "border-r-[0.5px]"
            }`}>
            <Paragraph className="text-start !leading-5 lg:max-w-[212px]">
              {obj.description}
            </Paragraph>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-10 mt-12 lg:hidden">
        <div className="swiper-prev-button-2 size-4 rotate-45 relative cursor-pointer border-dark-orange border-solid border-2 border-t-0 border-r-0 hover:border-light-black transition-all duration-300 ease-linear rounded-bl-xs"></div>
        <div className="swiper-next-button-2  size-4 rotate-45 relative cursor-pointer border-dark-orange border-solid border-2 border-b-0 border-l-0 hover:border-light-black transition-all duration-300 ease-linear rounded-tr-xs"></div>
      </div>
    </div>
  );
};

export default Partnerships;
