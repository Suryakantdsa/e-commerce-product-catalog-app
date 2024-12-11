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
    <div className="w-full  flex p-4 justify-between px-44 border-2 shadow-md sticky top-0 bg-white bg-transparent">
      <div className="flex justify-between items-center gap-x-2">
        <Store />
        <h1 className="font-bold text-xl"> Wingman cart</h1>
      </div>
      <div className="flex justify-between items-center gap-x-1 h-1/2 font-semibold">
        <p>Category</p>
        <ChevronDown />
      </div>
      <div className="flex justify-between items-center gap-x-1 h-1/2 font-semibold">
        <p>Deals</p>
      </div>
      <div className="flex justify-between items-center gap-x-1 h-1/2 font-semibold">
        <p>What's new</p>
      </div>
      <div className="flex justify-between items-center gap-x-5">
        <input
          type="text"
          placeholder="🔍 searh for.."
          className="px-4 py-1 rounded-lg outline-none border-none bg-gray-200"
          onChange={handleSearch}
        />
        <div className="flex justify-between items-center gap-x-1 h-1/2 font-semibold">
          <ShoppingCart />
          <p>Cart</p>
        </div>
        <div className="flex justify-between items-center gap-x-1 h-1/2 font-semibold">
          <UserRound />
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Navbar);
