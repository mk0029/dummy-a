import Cta from "@/components/common/Components/Cta";
import ProjectType from "./ProjectType";
import CitySelector from "./CitySelector";
import Loyalty from "./Loyalty";
import Typology from "./Typology";
import PriceRange from "./PriceRange";

const Categorys = ({
  setType,
  setCity,
  setTypology,
  setMinPrice,
  setMaxPrice,
  handleResetFilters,
  handleApplyFilters,
}) => {
  return (
    <div className="w-full flex max-md:flex-col-reverse justify-between items-end md:items-center relative z-10 bg-white gap-y-6">
      <div className="flex gap-x-4 gap-y-4 max-lg:flex-wrap lg:gap-x-6 min-w-[100px] max-lg:pr-5 max-md:w-full justify-between">
        <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
          <ProjectType typeVal={setType} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
          <CitySelector cityVal={setCity} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
          <Loyalty />
        </div>
        <div data-aos="zoom-in" data-aos-delay="600" data-aos-duration="500">
          <Typology typologyVal={setTypology} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500">
          <PriceRange minPriceVal={setMinPrice} maxPriceVal={setMaxPrice} />
        </div>
      </div>

      <div className="flex gap-x-1 grow w-1/2 md:max-w-[250px] justify-end">
        <div
          data-aos="zoom-in"
          data-aos-delay="900"
          data-aos-duration="500"
          className="w-full"
          onClick={() => handleResetFilters()}>
          <Cta className="text-center w-full max-w-[120px]">Clear</Cta>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1100"
          data-aos-duration="500"
          className="w-full"
          onClick={() => handleApplyFilters()}>
          <Cta className="text-center w-full max-w-[120px]">Apply</Cta>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
