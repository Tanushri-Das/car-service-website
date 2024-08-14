"use client";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const SocialSignin = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mb-8">
      <button
        type="submit"
        className="flex justify-center items-center bg-[#F5F5F8] rounded-full w-[65px] h-[65px]"
      >
        <FaGoogle className="text-[#3B5998] text-[20px]" />
      </button>
      <button
        type="submit"
        className="flex justify-center items-center bg-[#F5F5F8] rounded-full w-[65px] h-[65px]"
      >
        <FaGithub className="text-[#3B5998] text-[20px]" />
      </button>
    </div>
  );
};

export default SocialSignin;
