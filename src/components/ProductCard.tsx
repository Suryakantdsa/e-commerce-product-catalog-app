import React from "react";
import { Product } from "../interfaces/AppInterface";

const ProductCard: React.FC<Product> = ({ title, price, image, rating }) => {
  return (
    <div className="w-[250px] h-[400px] rounded-lg  shadow-lg flex justify-between flex-col border-2 hover:scale-105 transition-transform cursor-pointer">
      <div className="p-2 h-[60%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full  object-cover rounded-lg"
        />
      </div>
      <div className="bg-yellow-100 h-[30%] rounded-t-2xl p-2">
        <h2 className=" text-md sm:text-lg font-semibold">
          {title.length > 25 ? title.slice(0, 20) + "..." : title}
        </h2>
        <p className="font-semibold">${price.toFixed(2)}</p>
        <p>
          <span>
            {Array(Math.round(rating.rate))
              .fill("⭐")
              .map((star, index) => (
                <span key={index}>{star}</span>
              ))}
          </span>{" "}
          {rating.rate}/5{" "}
          <span className="font-semibold">({rating.count}) </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
