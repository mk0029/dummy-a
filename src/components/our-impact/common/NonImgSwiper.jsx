import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

const NonImgSwiper = ({ swiperChildren, parentClass = "", className = "" }) => {
  return (
    <div>
      <Swiper className={`mySwiper max-w-[1170px] mx-auto ${parentClass}`}>
        <SwiperSlide className={className}>{swiperChildren}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NonImgSwiper;
