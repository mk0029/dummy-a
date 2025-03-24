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
        className="mySwiper !flex !items-center !justify-center max-w-[1170px] mx-auto"
      >
        {list.length > 0 &&
          list.map(({ description, id }) => (
            <SwiperSlide key={id} className="max-w-[292px] mx-auto">
              <div
                className={` px-10 border-dark-orange w-full mx-uto max-w-[292.5px] ${
                  id === 1 ? "border-x " : id === 0 ? "border-l" : "border-r"
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
