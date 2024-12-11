import { ChevronDown } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="w-full ">
      <div className=" px-44 font-medium flex flex-row gap-x-12 justify-between translate-y-4">
        <div className="flex justify-center items-center p-1 bg-gray-200 w-auto rounded-md">
          <p>Price</p>
          <ChevronDown />
        </div>
        <div className="flex justify-center items-center p-1 bg-gray-200 w-auto rounded-md">
          <p>Sort By</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};
export default FilterBar;