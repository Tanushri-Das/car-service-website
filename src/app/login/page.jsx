// "use client";
// import SocialSignin from "@/components/shared/SocialSignin";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { signIn } from "next-auth/react";
// import { useSearchParams } from "next/navigation";
// import { toast } from "react-toastify";

// const LoginPage = () => {
//   const searchParams = useSearchParams();
//   const path = searchParams.get("redirect");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const response = await signIn("credentials", {
//       email,
//       password,
//       redirect: true,
//       callbackUrl: path ? path : "/",
//     });
//     console.log(response);
//     if (response.status === 200) {
//       e.target.reset();
//       toast.success("Login successfully");
//     }
//   };
//   return (
//     <div className="m-10 md:m-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div className="hidden lg:block">
//           <Image
//             src="/assets/images/login/login.svg"
//             width="460"
//             height="502"
//             alt="login-img"
//           />
//         </div>
//         <div className="border w-full max-w-xl mx-auto flex flex-col items-center justify-center p-8">
//           <h2 className="font-semibold text-[40px] mb-4 text-center">Login</h2>
//           <form onSubmit={handleLogin} className="w-full max-w-md">
//             <div className="mb-3">
//               <label
//                 htmlFor="email"
//                 className="block font-semibold text-[18px]"
//               >
//                 Email
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="Email"
//                 className="input input-bordered w-full mt-2"
//               />
//             </div>
//             <div className="mb-5">
//               <label
//                 htmlFor="email"
//                 className="block font-semibold text-[18px]"
//               >
//                 Password
//               </label>
//               <input
//                 type="text"
//                 name="password"
//                 placeholder="Password"
//                 className="input input-bordered w-full mt-2"
//               />
//             </div>
//             <button className="btn btn-primary font-semibold text-[20px] text-white w-full">
//               Sign In
//             </button>
//             <h3 className="text-[#444444] text-center my-5">Or Sign In with</h3>
//             <SocialSignin />
//             <p className="text-lg text-[#737373] text-center">
//               Have an account ?{" "}
//               <Link href="/signup" className="text-primary">
//                 Sign up
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";
import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

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
    console.log(response);
    if (response.status === 200) {
      e.target.reset();
      toast.success("Login successfully");
    }
  };

  return (
    <div className="m-10 md:m-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block">
          <Image
            src="/assets/images/login/login.svg"
            width="460"
            height="502"
            alt="login-img"
          />
        </div>
        <div className="border w-full max-w-xl mx-auto flex flex-col items-center justify-center p-8">
          <h2 className="font-semibold text-[40px] mb-4 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin} className="w-full max-w-md">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block font-semibold text-[18px]"
              >
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
              <label
                htmlFor="password"
                className="block font-semibold text-[18px]"
              >
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
            <h3 className="text-[#444444] text-center my-5">
              Or Sign In with
            </h3>
            <SocialSignin />
            <p className="text-lg text-[#737373] text-center">
              Have an account?{" "}
              <Link href="/signup" className="text-primary">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

