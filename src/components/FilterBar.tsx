import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFilterRes } from "../store/slices/productsSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const products = useSelector((state: RootState) => state.products.products);

  const toggleDropdown = () => setPriceDropdownOpen(!isPriceDropdownOpen);

  const handleOptionClick = (option: string) => {
    setPriceDropdownOpen(false);

    let filteredData = [...products];

    if (option === "High to Low") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (option === "Low to High") {
      filteredData.sort((a, b) => a.price - b.price);
    }

    dispatch(setFilterRes(filteredData));
  };

  return (
    <div className="sm:px-28 md:44 w-[380px] sm:w-full px-4">
      <div className="font-medium flex flex-row gap-x-12 justify-between translate-y-4">
        <div className="relative">
          <div
            className="flex justify-center items-center p-2 bg-gray-200 w-auto rounded-md cursor-pointer"
            onClick={toggleDropdown}
          >
            <p>Price</p>
            {isPriceDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
          {isPriceDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-[150px] z-10">
              <ul className="py-1">
                {["Low to High", "High to Low"].map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center p-2 bg-gray-200 w-auto rounded-md cursor-pointer">
          <p>Sort By</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};
export default FilterBar;
