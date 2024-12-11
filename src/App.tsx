import { useDispatch } from "react-redux";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCatalog from "./components/ProductCatalog";
import React, { useEffect } from "react";
import { fetchProductsData } from "./store/slices/productsSlice";
import { AppDispatch } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);
  return (
    <div className="w-scren ">
      <Navbar />
      <Hero />
      <FilterBar />
      <ProductCatalog />
    </div>
  );
}

export default React.memo(App);
