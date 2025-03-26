"use client";
import Paragraph from "@/components/common/Paragraph";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PlanTab = ({ list }) => {
  const [tab, setTab] = useState({ id: list[0]?.id, list: list[0]?.list });

  return (
    <>
      <div
        className="max-w-[800px] w-full flex items-center plans-link-parent relative max-lg:max-w-[728px] max-md:max-w-[335px] overflow-auto after:absolute after:bottom-0 after:left-0 after:bg-[#ededed]
      after:h-[3px] after:w-full z-0">
        {list?.map((obj, index) => (
          <button
            key={index}
            title="Residence Selector"
            onClick={() => setTab({ id: obj.id, list: obj.list })}
            className={`py-2.5 px-5 text-base font-normal cursor-pointer leading-7 border-b-[3px] duration-300 ease-linear max-md:px-[13px] relative z-10 uppercase ${
              tab.id === obj.id
                ? "text-dark-orange border-dark-orange"
                : "text-light-gray border-[#ededed]"
            }`}>
            {obj.title}
          </button>
        ))}
      </div>
      <div className="w-full py-[30px]">
        {/* {tab === false ? <ThreeBhk /> : <FourBhk />} */}
        <div>
          <Swiper
            className="!w-full mySwiper bhk-swiper"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-next-button-4",
              prevEl: ".swiper-prev-button-4",
            }}
            pagination={false}
            breakpoints={{
              320: { slidesPerView: 1.4, spaceBetween: 24 },
              768: { slidesPerView: 1.8, spaceBetween: 30 },
              1024: { slidesPerView: 2.3, spaceBetween: 24 },
              1440: { slidesPerView: 2.81, spaceBetween: 24 },
            }}
            modules={[Autoplay, Navigation, Pagination]}>
            {tab.list.map((obj, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[296px] w-full max-lg:max-w-[225px]">
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
            <div className="swiper-prev-button-4 size-4 rotate-45 relative cursor-pointer border-dark-orange border-solid border-2 border-t-0 border-r-0 hover:border-light-black transition-all duration-300 ease-linear rounded-bl-xs"></div>
            <div className="swiper-next-button-4  size-4 rotate-45 relative cursor-pointer border-dark-orange border-solid border-2 border-b-0 border-l-0 hover:border-light-black transition-all duration-300 ease-linear rounded-tr-xs"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanTab;
