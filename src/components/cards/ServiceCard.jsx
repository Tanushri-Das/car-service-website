import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service || {};
  return (
    <div className="card card-compact border border-[#E8E8E8]">
      <div className="w-full h-[210px] rounded-lg overflow-hidden p-4">
        <div className="w-full h-full relative rounded-lg overflow-hidden">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="Service Card"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <h5 className="text-[20px] text-primary font-semibold">
            Price : ${price}
          </h5>
          <Link href={`/services/${_id}`}>
            <FaArrowRight className="text-primary w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
