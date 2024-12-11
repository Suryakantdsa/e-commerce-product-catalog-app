import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Product } from "../interfaces/Products_GET";

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full">
      <div className="px-44 ">
        <h1 className="text-2xl pt-8 pb-4 font-bold">Trending Product !</h1>
        <div className="flex justify-between flex-row flex-wrap gap-y-6 w-full border">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductCatalog;
