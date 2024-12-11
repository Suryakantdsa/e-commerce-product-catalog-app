import React from "react";
import { Product } from "../interfaces/AppInterface";

const ProductCard: React.FC<Product> = ({ title, price, image, rating }) => {
  return (
    <div className="w-[250px] h-[450px] rounded-lg shadow-lg flex justify-between flex-col border hover:scale-105 transition-transform cursor-pointer bg-white dark:bg-zinc-900">
      <div className="p-2 h-[70%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="bg-yellow-100 dark:bg-zinc-800 h-[30%] rounded-t-2xl p-2">
        <h2 className="text-md sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {title.length > 25 ? title.slice(0, 20) + "..." : title}
        </h2>
        <p className="font-semibold text-zinc-800 dark:text-zinc-300">
          ${price.toFixed(2)}
        </p>
        <p className="text-zinc-700 dark:text-zinc-400">
          <span>
            {Array(Math.round(rating.rate))
              .fill("⭐")
              .map((star, index) => (
                <span key={index}>{star}</span>
              ))}
          </span>{" "}
          {rating.rate}/5{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-300">
            ({rating.count})
          </span>
        </p>
        <button className="bg-green-700 px-2 py-1 mt-2 text-white rounded-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
