"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import banner1 from "../../../public/assets/images/banner/1.jpg";
import banner2 from "../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../public/assets/images/banner/4.jpg";
import banner5 from "../../../public/assets/images/banner/5.jpg";
import banner6 from "../../../public/assets/images/banner/6.jpg";

const Banner = () => {
  const slides = [
    {
      image: banner1,
      title: "Full Car Servicing",
      description:
        "Comprehensive servicing packages to keep your car running smoothly.",
    },
    {
      image: banner2,
      title: "Engine Diagnostics",
      description:
        "Advanced diagnostics to ensure your engine is performing at its best.",
    },
    {
      image: banner3,
      title: "Tire & Wheel Services",
      description:
        "Expert tire installation, balancing, and alignment for optimal performance.",
    },
    {
      image: banner4,
      title: "Brake Repair",
      description:
        "Reliable brake repair services for your safety on the road.",
    },
    {
      image: banner5,
      title: "Battery Replacement",
      description:
        "Fast and efficient battery replacement services to get you back on the road.",
    },
    {
      image: banner6,
      title: "Oil Change",
      description:
        "Regular oil changes to keep your engine running smoothly and efficiently.",
    },
  ];

  return (
    <div className="m-12">
      <Carousel autoPlay infiniteLoop>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[600px]">
            <Image
              src={slide.image}
              layout="fill"
              objectFit="cover"
              alt={slide.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg">{slide.description}</p>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded">
                Discover Services
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
