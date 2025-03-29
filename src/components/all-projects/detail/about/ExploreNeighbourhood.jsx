import Cta from "@/components/common/Components/Cta";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";

const ExploreNeighbourhood = ({ content }) => {
  return (
    <div className="bg-dark-gray py-[60px]">
      <div className="container">
        <div className="flex max-lg:flex-col max-lg:gap-8 justify-between">
          <div className="mt-0">
            <Heading aos="fade-right" aosDuration="400" className="!text-start">
              {content?.title || "Explore the neighbourhood"}
            </Heading>
            <Paragraph
              aos="fade-right"
              aosDuration="400"
              aosDelay="250"
              className="!text-start lg:!max-w-[500px] mt-2.5 "
              leading="!leading-100">
              {content?.description ||
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quaerat iure vero velit at. Sed veritatis explicabo officiis placeat eos."}
            </Paragraph>
            <div
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-duration="500">
              <Cta className="mt-[50px] max-lg:hidden">View Location</Cta>
            </div>
          </div>
          <div className="max-w-[400px] w-full">
            {content?.nearestLocations?.map((obj, index) => {
              return (
                <div
                  data-aos="fade-down"
                  data-aos-delay={`${index * 2 + 2}00`}
                  data-aos-duration="500"
                  key={index}
                  className="flex justify-between items-center mb-[20px] min-h-6">
                  <div className="flex gap-3.5 w-full">
                    <Image
                      src={obj?.image}
                      width={24}
                      height={24}
                      alt="road"
                      quality={100}
                    />
                    <Paragraph>{obj.title}</Paragraph>
                  </div>
                  <Paragraph className="font-bold text-nowrap">
                    {obj.durationInMinuets} Minuets
                  </Paragraph>
                </div>
              );
            })}

            <Paragraph
              aos="fade-left"
              aosDuration="400"
              aosDelay="250"
              className="!text-start !max-w-[500px] mt-8 lg:mt-14 "
              leading="!leading-100">
              Note: {content?.note}
            </Paragraph>
            <Cta className="mt-8 lg:hidden">View Location</Cta>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNeighbourhood;
