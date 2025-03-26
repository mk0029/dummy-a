"use client";
import { DETAIL_SLIDER_IMAGES } from "@/utils/helper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySlider = ({ list }) => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        autoHeight={true}
        slidesPerView={3}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          768: { slidesPerView: 1.3 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Navigation]}>
        {list?.map((item) => (
          <SwiperSlide className="max-sm:flex max-sm:flex-col" key={item.id}>
            <div className="w-full lg:max-w-[373px] group lg:max-h-[373px] aspect-square overflow-hidden">
              <Image
                className="w-full group-hover:scale-105 transition-all duration-300 ease-linear h-full object-cover"
                src={item.image}
                width={373}
                height={373}
                alt="image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-6 mt-9 lg:hidden">
        <div className="prev-button size-[15px] relative cursor-pointer"></div>
        <div className="next-button size-[15px] relative cursor-pointer"></div>
      </div>
    </>
  );
};

export default GallerySlider;
