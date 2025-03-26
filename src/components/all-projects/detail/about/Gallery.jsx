import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { DETAIL_LIFE_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import GallerySlider from "./GallerySlider";

const Gallery = ({ content }) => {
  return (
    <div className="py-[60px] bg-light-orange">
      <div className="container">
        <div className="flex flex-wrap gap-6 w-full justify-between">
          <div className="max-w-[500px] w-full">
            <Heading className="max-md:!text-xl">
              {content?.title || "Lorem ipsum dolor sit amet."}
            </Heading>
            <Paragraph className="mt-[10px] mb-6">
              {content?.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi ea reprehenderit accusantium adipisci vero corporis a cupiditate asperiores inventore!"}
            </Paragraph>
            <span className="text-sm text-dark-orange font-bold !leading-135 capitalize">
              Possession: {content?.prossession || "Loading..."}
            </span>
          </div>
          <div className="max-w-[300px] w-full flex flex-col gap-[15px]">
            {content?.features?.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={24}
                  height={24}
                />
                <span className="text-sm font-normal !leading-125 text-light-gray">
                  {item.title}
                </span>
              </div>
            ))}
            <Link
              href="#"
              className="underline text-sm !leading-142 text-dark-orange font-normal mt-4 w-fit">
              View More
            </Link>
          </div>
        </div>
        <div className="mt-[30px]">
          <GallerySlider list={content?.showCase} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
