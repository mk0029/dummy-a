import Cta from "@/components/common/Components/Cta";
import ProjectType from "./ProjectType";
import CitySelector from "./CitySelector";

const Categorys = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-x-6">
        <ProjectType />
        <CitySelector />
      </div>
      <div className="flex gap-x-1 grow max-w-[250px] justify-end">
        <Cta className="text-center w-full max-w-[120px]">Clear</Cta>
        <Cta className="text-center w-full max-w-[120px]">Apply</Cta>
      </div>
    </div>
  );
};

export default Categorys;
