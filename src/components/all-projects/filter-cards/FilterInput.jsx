import Icons from "@/components/common/Icons";

const FilterInput = () => {
  return (
    <label
      htmlFor="filter-input"
      className="pt-11 pb-[22px] pr-2.5 flex justify-between items-center border-b-[0.3px] border-solid border-b-[#a0a0a0]">
      <input
        id="filter-input"
        type="text"
        placeholder="Search a project name or location"
        className="text-lg w-full !leading-[100%] pr-4 !border-none !outline-none text-light-black placeholder:text-light-black/90 font-normal"
      />
      <Icons icon="search-glass" />
    </label>
  );
};

export default FilterInput;
