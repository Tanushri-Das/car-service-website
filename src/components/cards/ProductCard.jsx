import React from "react";
import RenderStars from "../shared/RenderStars";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, price, image, rating } = product;

  return (
    <div className="border border-[#E8E8E8] p-4 rounded-lg text-center">
      <div className="relative w-full h-48 bg-accent py-4 flex justify-center rounded-lg mb-4">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <RenderStars rating={rating} />
      </div>
      <h3 className="text-lg font-bold text-[#444444] my-2">{name}</h3>
      <p className="text-primary font-semibold text-xl">${price}</p>
    </div>
  );
};

export default ProductCard;
