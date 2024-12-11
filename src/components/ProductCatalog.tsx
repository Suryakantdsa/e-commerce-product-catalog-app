import { useMemo } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProductCatalog: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const searchTerm = useSelector(
    (state: RootState) => state.products.searchTerm
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);
  return (
    <div className="w-[400px] sm:w-full ">
      <div className="sm:px-44 px-4 flex flex-col justify-center border ">
        <h1 className="text-2xl pt-8 pb-4 font-bold">Trending Product !</h1>
        <div className="flex justify-center sm:justify-between flex-row flex-wrap gap-y-16 w-full ">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <div className="flex justify-center flex-col items-center w-full pb-20 bg-contain bg-center">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544943.jpg?ga=GA1.1.1781558731.1729788983&semt=ais_hybrid"
                alt="nodata found"
                className="w-[200px] h-[250px] "
              />
              <p>No Items found..!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCatalog;
