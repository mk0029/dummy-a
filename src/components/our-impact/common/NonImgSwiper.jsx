"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NonImgCard from "./NonImgCard";

const NonImgSwiper = ({ list }) => {
  return (
    <div>
      <Swiper
        navigation={false}
        slidesPerView={3}
        spaceBetween={0}
        pagination={{ clickable: false, dynamicBullets: false }}
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 0 },
          768: { slidesPerView: 2.3, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper !flex !items-center !justify-center max-w-[1170px] mx-auto !pt-20"
      >
        {list.length > 0 &&
          list.map(({ description, id }) => (
            <SwiperSlide
              key={id}
              className="w-1/4 max-w-[292.5px] mx-auto flex justify-center"
            >
              <div
                className={` px-10 border-dark-orange w-full mx-uto max-w-[292.5px] min-h-[140px] max-h-[140px] ${
                  id === 1
                    ? "border-x-[0.5px]"
                    : id === 0
                    ? "border-l-[0.5px]"
                    : "border-r-[0.5px]"
                }`}
              >
                <NonImgCard>{description}</NonImgCard>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default NonImgSwiper;
