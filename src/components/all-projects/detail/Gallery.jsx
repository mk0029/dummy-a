import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { DETAIL_LIFE_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="py-[60px] bg-light-orange">
      <div className="container">
        <div className="flex flex-wrap gap-6 w-full justify-between">
          <div className="max-w-[500px] w-full">
            <Heading className="max-md:!text-xl">Life at Lodha World Towers </Heading>
            <Paragraph className="mt-[10px] mb-6">
              Lodha World Towers hosts Club W: 5 levels of entertainment,
              sports, and endless diversions. Each level of Club W is dedicated
              to a different and wholly immersive experience. Here you will find
              a top-notch gym to work out in and a spa that will help you
              unwind. A private theatre for evenings with close friends, and a
              stately ballroom for grander events. An indoor pool with cabanas
              made for privacy and leisure, and an outdoor poolside with a
              separate children’s pool for lively weekends. As varied as these
              spaces are, they all have that air of ritzy elegance that
              permeates through Lodha World Towers.
            </Paragraph>
            <span className="text-sm text-dark-orange font-bold !leading-135">
              Possession: Ready To Move In
            </span>
          </div>
          <div className="max-w-[300px] w-full flex flex-col gap-[15px]">
            {DETAIL_LIFE_DATA_LIST.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image src={item.image} alt={item.title} width={24} height={24} />
                <span className="text-sm font-normal !leading-125 text-light-gray">
                  {item.title}
                </span>
              </div>
            ))}
            <Link href="#" className="underline text-sm !leading-142 text-dark-orange font-normal mt-4 w-fit">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
