import React from 'react'
import Paragraph from "../components/common/Paragraph";
import TagParagraph from '../components/common/TagParagraph';
import ourImgOne from "../../public/assets/images/ourstory/webp/ourImgOne.webp"
import ourImgTwo from "../../public/assets/images/ourstory/webp/ourImgTwo.webp"
import ourImgThird from "../../public/assets/images/ourstory/webp/ourImgThird.webp"
import ourImgFourth from "../../public/assets/images/ourstory/webp/ourImgFourth.webp"
import Heading from './common/Heading';


const OUR_STORY = [
  {
    image: "/assets/images/ourstory/webp/ourImgOne.webp", // ✅ Use relative path from "public"
    title: "A legacy of excellence",
    description:
      "At Lodha, our legacy of excellence is forged by the pioneering spirit of our esteemed team, the partnerships we cultivate with world-class collaborators, and the dynamic processes that consistently propel us beyond conventional boundaries.",
  },
  {
    image: "/assets/images/ourstory/webp/ourImgTwo.webp", // ✅ Fix path
    title: "Crafting timeless elegance",
    description:
      "We hold an unwavering belief that quality is not just a destination, but an ongoing voyage. Each residence we create is meticulously crafted with the same attention to detail as if it were our very own. At Lodha, we nurture a culture of quality, employing innovative technologies and hand-selecting only the most exquisite materials.",
  },
  {
    image: "/assets/images/ourstory/webp/ourImgThird.webp", // ✅ Fix path
    title: "Sophistication on a grand scale",
    description:
      "Lodha crafts both residential and commercial real estate developments, catering to a discerning spectrum of lifestyle preferences, across several geographies.",
  },
  {
    image: "/assets/images/ourstory/webp/ourImgFourth.webp", // ✅ Fix path
    title: "Building a sustainable legacy",
    description:
      "Our commitment extends beyond the realm of luxury living. We are dedicated to leaving a lasting, positive impact on the environment and society at large. Through innovative design and sustainable practices, we are minimising our carbon footprint and creating residences that stand resilient in the face of future challenges posed by climate change.",
  },
];

const OurStoryDetail = () => {
  return (
    <div>


      <div className="flex flex-col py-[40px] md:py-[80px] px-[20px] lg:max-w[1140px]">
        {/* Title Section */}
        <div className=' flex flex-col justify-center' >
          <TagParagraph center >OUR STORY</TagParagraph>
          <Heading className=" ml-auto text-[20px]" >Raising expectations for real estate</Heading>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 pb-10 pt-[20px] gap-8 py-7 ">
          {OUR_STORY.map((obj, index) => (
            <div
              key={index}
              className={`flex flex-col justify-evenly md:flex-col items-center md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image */}

              <div className='lg:max-h-[249px] lg:max-w-[280px] md:w-[738px]  ' >
                <img
                  src={obj.image}
                  alt={obj.title}
                  className="object-cover w-full h-full "
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center w-full text-center md:w-1/2 md:text-left lg:h-[500px]">
                <div className="md:h-[230px]  mt-4 ">
                  <Heading className="text-[20px] md:text-2xl  text-left mt-4 ">{obj.title}</Heading>
                  <Paragraph left className="mt-2 text-gray-600 lg:text-sm">
                    {obj.description}
                  </Paragraph>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>


    </div>
  )
}

export default OurStoryDetail