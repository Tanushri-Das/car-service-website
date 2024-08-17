"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import SocialSignin from "@/components/shared/SocialSignin";
import Link from "next/link";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const path = searchParams?.get("redirect");

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    if (response.status === 200) {
      e.target.reset();
      toast.success("Login successfully");
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-full max-w-md">
      <div className="mb-3">
        <label htmlFor="email" className="block font-semibold text-[18px]">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full mt-2"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block font-semibold text-[18px]">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full mt-2"
        />
      </div>
      <button className="btn btn-primary font-semibold text-[20px] text-white w-full">
        Sign In
      </button>
      <h3 className="text-[#444444] text-center my-5">Or Sign In with</h3>
      <SocialSignin />
      <p className="text-lg text-[#737373] text-center">
        Have an account?{" "}
        <Link href="/signup" className="text-primary">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
