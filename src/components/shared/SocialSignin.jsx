"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const SocialSignin = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSocialLogin = async (provider) => {
    try {
      const res = await signIn(provider, {
        redirect: true,
        callbackUrl: path ? path : "/",
      });
      if (!res.ok) {
        throw new Error("Google sign-in failed");
      }
    } catch (error) {
      console.error(error);
      // Handle the error, perhaps redirect to an error page or show a message
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 mb-8">
      <button
        onClick={() => handleSocialLogin("google")}
        type="submit"
        className="flex justify-center items-center bg-[#F5F5F8] rounded-full w-[65px] h-[65px]"
      >
        <FaGoogle className="text-[#3B5998] text-[20px]" />
      </button>
    </div>
  );
};

export default SocialSignin;
