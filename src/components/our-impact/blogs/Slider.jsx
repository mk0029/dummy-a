"use client";
import { BLOGS_LIST } from "@/utils/defaults";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
const Slider = () => {
  return (
    <Swiper
      className="!pb-12 sm:!pb-14 lg:!pb-7"
      navigation={false}
      autoHeight={true}
      slidesPerView={3}
      spaceBetween={0}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        320: { slidesPerView: 1.11, spaceBetween: 0 },
        768: { slidesPerView: 2.3, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
      }}
      modules={[Autoplay, Navigation, Pagination]}>
      {BLOGS_LIST.length > 0 &&
        BLOGS_LIST.map(({ url, img, title, id, author }) => (
          <SwiperSlide className="!h-full !flex !grow group " key={id}>
            <div
              data-aos="fade-up"
              data-aos-delay={`${id * 2 + 1}00`}
              data-aos-duration="500"
              className="mx-1 md:mx-2 flex flex-col h-full grow w-full hover:shadow-dark-orange/50 shadow-md shadow-transparent transition-all ease-linear duration-300">
              <Card authors={author} src={img} url={url}>
                {title}
              </Card>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
