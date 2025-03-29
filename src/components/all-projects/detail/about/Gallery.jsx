import Image from "next/image";
import Link from "next/link";
import GallerySlider from "./GallerySlider";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";

const Gallery = ({ content }) => {
  return (
    <div className="py-[60px] bg-light-orange">
      <div className="container">
        <div className="flex flex-wrap gap-6 w-full justify-between">
          <div className="max-w-[500px] w-full">
            <Heading
              aos="fade-right"
              aosDuration="400"
              className="!text-start max-md:!text-xl">
              {content?.title || "Lorem ipsum dolor sit amet."}
            </Heading>
            <Paragraph
              aos="fade-right"
              aosDuration="400"
              aosDelay="250"
              className="mt-[10px] mb-6 !text-start">
              {content?.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi ea reprehenderit accusantium adipisci vero corporis a cupiditate asperiores inventore!"}
            </Paragraph>
            <span
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="500"
              className="text-sm text-dark-orange font-bold !leading-135 capitalize">
              Possession: {content?.prossession || "Loading..."}
            </span>
          </div>
          <div className="max-w-[300px] w-full flex flex-col gap-[15px]">
            {content?.features?.map((item, index) => (
              <div
                data-aos="fade-down"
                data-aos-delay={`${index * 2 + 2}00`}
                data-aos-duration="500"
                key={index}
                className="flex items-center gap-3">
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
