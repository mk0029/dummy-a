"use client";
import Paragraph from "@/components/common/Components/Paragraph";
import { FOUR_BHK_LIST } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FourBhk = () => {
  return (
    <div>
      <Swiper
        className="!w-full mySwiper bhk-swiper"
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1.4, spaceBetween: 24 },
          768: { slidesPerView: 1.8, spaceBetween: 30 },
          1024: { slidesPerView: 2.3, spaceBetween: 24 },
          1440: { slidesPerView: 2.81, spaceBetween: 24 },
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {FOUR_BHK_LIST.map((obj, i) => (
          <SwiperSlide
            key={i}
            className="max-w-[296px] w-full max-lg:max-w-[225px]"
          >
            <div className="w-full h-[330px] bg-white overflow-hidden border border-light-gray flex justify-center items-center max-lg:h-[225px] max-lg:max-w-[225px]">
              <Image
                width={296}
                height={163.31}
                src={obj.image}
                className="max-w-[296px] max-lg:max-w-[225px] max-lg:w-full"
                alt="3 bhk info img"
              />
            </div>
            <Paragraph variant="secondary" className="text-start mt-4">
              {obj.title}
            </Paragraph>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-start items-center gap-6 mt-9">
        <div className="prev-btn size-[15px] relative cursor-pointer"></div>
        <div className="next-btn size-[15px] relative cursor-pointer"></div>
      </div>
    </div>
  );
};

export default FourBhk;
