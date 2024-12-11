import { ChevronDown, ShoppingCart, Store, UserRound } from "lucide-react";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchedRes } from "../store/slices/productsSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchedRes(event.target.value));
    },
    [dispatch]
  );
  return (
    <div className=" sm:px-28 md:44 w-full flex p-4 justify-between  sm:shadow-md fixed top-0 bg-white bg-transparent dark:bg-slate-950 dark:text-white z-10">
      <div className="flex justify-between items-center gap-x-2">
        <Store />
        <h1 className="font-bold text-xs sm:text-xl pr-1"> Wingman cart</h1>
      </div>
      <div className="hidden justify-between items-center gap-x-1 h-1/2 font-semibold lg:flex ">
        <p>Category</p>
        <ChevronDown />
      </div>
      <div className="hidden justify-between items-center gap-x-1 h-1/2 font-semibold lg:flex ">
        <p>Deals</p>
      </div>
      <div className="hidden justify-between items-center gap-x-1 h-1/2 font-semibold lg:flex ">
        <p>What's new</p>
      </div>
      <div className="flex justify-between items-center gap-x-5">
        <input
          type="text"
          placeholder="🔍 search for.."
          className=" px-2 py-1 rounded-lg outline-none border-none text-black dark:text-white bg-gray-200 dark:bg-slate-600"
          onChange={handleSearch}
        />
        <div className="flex justify-between items-center gap-x-1 h-1/2 font-semibold">
          <ShoppingCart />
          <p className="hidden md:block">Cart</p>
        </div>
        <div className="flex justify-between items-center gap-x-1 h-1/2 font-semibold">
          <UserRound />
          <p className="hidden md:block">Account</p>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Navbar);
