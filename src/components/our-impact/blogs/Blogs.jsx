import Heading from "@/components/common/Components/Heading";
import Slider from "./Slider";
import Cta from "@/components/common/Components/Cta";

const Blogs = () => {
  return (
    <div className="container custom-dots-swiper py-12 sm:py-14 md:py-16 lg::py-20">
      <Heading>Blogs</Heading>
      <div className=" mt-5 sm:mt-6 lg:mt-8">
        <Slider />
      </div>
      <div className="text-center mt-5">
        <Cta>Explore More</Cta>
      </div>
    </div>
  );
};

export default Blogs;
