import React from "react";
import { Product } from "../interfaces/AppInterface";

const ProductCard: React.FC<Product> = ({ title, price, image, rating }) => {
  return (
    <div className="w-[250px] h-[400px] rounded-lg  shadow-xl flex justify-between flex-col">
      <div className="p-2 h-[60%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full  object-cover rounded-lg"
        />
      </div>
      <div className="bg-yellow-100 h-[30%] rounded-t-2xl p-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>${price.toFixed(2)}</p>
        <p>Rating {rating.rate}⭐</p>
      </div>
    </div>
  );
};

export default ProductCard;
