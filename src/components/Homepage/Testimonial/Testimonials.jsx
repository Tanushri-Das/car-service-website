"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Testimonials.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { reviews } from "../../../lib/reviews";
import RenderStars from "@/components/shared/RenderStars";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        // Medium screens
        setSwiperSlidesPerView(2);
      } else {
        // Small screens
        setSwiperSlidesPerView(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener to handle screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="m-12 relative">
      <div className="text-center">
        <h3 className="font-bold text-primary text-[20px] text-center mb-1">
          Testimonial
        </h3>
        <h5 className="text-[#151515] text-[45px] font-bold mb-3 text-center">
          What Customer Says
        </h5>
        <p className="text-[#737373] text-[16px] font-normal mb-10 w-full max-w-[717px] mx-auto text-center capitalize">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <Swiper
        slidesPerView={swiperSlidesPerView}
        spaceBetween={30}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper mt-10 h-[220px] relative"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            <div className="flex flex-col border border-gray-200 rounded-xl px-8 pt-[33px] h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h1 className="text-2xl font-semibold text-[#444444]">
                      {review.name}
                    </h1>
                    <h3 className="text-[16px] text-[#737373] font-medium">
                      {review.designation}
                    </h3>
                  </div>
                </div>
                <div>
                  <FaQuoteRight className="quote w-[56px] h-[56px]" />
                </div>
              </div>
              <p className="text-[16px] text-[#737373] my-4">{review.review}</p>
              <div className="flex justify-between">
                <div className="mb-6 flex justify-between items-center">
                  <div className="flex justify-center items-center">
                    <RenderStars rating={review.rateus} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Left Border with Previous Button */}
      <div className="swiper-button-prev-parent-div">
        <div className="swiper-button-prev-div">
          <IoIosArrowRoundBack />
        </div>
      </div>

      {/* Right Border with Next Button */}
      <div className="swiper-button-next-parent-div">
        <div className="swiper-button-next-div">
          <IoIosArrowRoundForward />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
