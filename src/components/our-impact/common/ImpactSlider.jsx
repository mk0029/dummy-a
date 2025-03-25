"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImpactCard from "./ImpactCard";
const ImpactSlider = ({ list }) => {
  return (
    <Swiper
      className="!pb-10 sm:!pb-20 lg:!pb-5"
      navigation={false}
      slidesPerView={3}
      spaceBetween={0}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        320: { slidesPerView: 1.11, spaceBetween: 0 },
        768: { slidesPerView: 2.3, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      modules={[Autoplay, Navigation, Pagination]}>
      {list.length > 0 &&
        list.map(({ url, img, description, id }) => (
          <SwiperSlide key={id}>
            <div className="mx-1 md:mx-2">
              <ImpactCard src={img} url={url}>
                {description}
              </ImpactCard>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ImpactSlider;
