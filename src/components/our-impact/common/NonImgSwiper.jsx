"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NonImgCard from "./NonImgCard";

const NonImgSwiper = ({ list, className = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Swiper
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        slidesPerView={3}
        spaceBetween={0}
        pagination={{ clickable: false, dynamicBullets: false }}
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 0 },
          768: { slidesPerView: 2.3, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper !flex !items-center !justify-center max-w-[1170px] mx-auto !pt-[15px]"
      >
        {list.length > 0 &&
          list.map(({ description, id }) => (
            <SwiperSlide
              key={id}
              className="w-1/4 max-w-[292.5px] mx-auto flex justify-center"
            >
              <div
                className={` px-10 border-dark-orange w-full mx-uto max-w-[292.5px] min-h-[140px] max-h-[140px] ${
                  id === 6 ? "" : "border-r-[0.5px]"
                }`}
              >
                <NonImgCard>{description}</NonImgCard>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="static bottom-0 !mt-14 flex justify-center items-center gap-10">
        <div className="swiper-prev size-[15px] relative cursor-pointer"></div>
        <div className="swiper-next size-[15px] relative cursor-pointer"></div>
      </div>
    </div>
  );
};

export default NonImgSwiper;
