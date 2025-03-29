import Heading from "@/components/common/Components/Heading";
import Slider from "./Slider";
import Cta from "@/components/common/Components/Cta";
import Paragraph from "@/components/common/Components/Paragraph";

const Blogs = () => {
  return (
    <div className="container custom-dots-swiper common-space-y ">
      <Heading aos="fade-up" aosDuration="400">
        Our Projects
      </Heading>
      <Paragraph
        aos="fade-up"
        aosDuration="400"
        aosDelay="250"
        className="mt-2.5 max-w-[800px] mx-auto">
        Each of our developments is a testament to our promise of quality,
        blending aesthetics, functionality, and sustainability. From luxurious
        3BHK and 4BHK apartments to affordable urban housing, we are redefining
        the landscape of real estate.
      </Paragraph>
      <div className=" mt-5 sm:mt-6 lg:mt-8">
        <Slider />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="700"
        data-aos-duration="500"
        className="text-center mt-5">
        <Cta>Explore More</Cta>
      </div>
    </div>
  );
};

export default Blogs;
