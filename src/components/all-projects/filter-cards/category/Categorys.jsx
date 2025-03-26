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
        <ProjectType typeVal={setType} />
        <CitySelector cityVal={setCity} />
        <Loyalty />
        <Typology typologyVal={setTypology} />
        <PriceRange minPriceVal={setMinPrice} maxPriceVal={setMaxPrice} />
      </div>

      <div className="flex gap-x-1 grow w-1/2 md:max-w-[250px] justify-end">
        <div className="w-full" onClick={() => handleResetFilters()}>
          <Cta className="text-center w-full max-w-[120px]">Clear</Cta>
        </div>
        <div className="w-full" onClick={() => handleApplyFilters()}>
          <Cta className="text-center w-full max-w-[120px]">Apply</Cta>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
