import React from "react";
import { products } from "@/lib/products";
import ProductCard from "../cards/ProductCard";

const Products = () => {
  return (
    <div className="m-4 md:mx-20 md:mb-12">
      <h3 className="font-bold text-primary text-[20px] text-center mb-1">
        Popular Products
      </h3>
      <h5 className="text-[#151515] text-[45px] font-bold mb-3 text-center">
        Browse Our Products
      </h5>
      <p className="text-[#737373] text-[16px] font-normal mb-10 w-full max-w-[717px] mx-auto text-center capitalize">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <button className="border border-primary py-2 px-4 rounded font-semibold text-primary">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
