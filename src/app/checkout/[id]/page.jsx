"use client";
import { getServicesDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutPage = ({ params }) => {
  const { data } = useSession();
  const [service, setService] = useState({});
  const router = useRouter();

  const loadService = async () => {
    const details = await getServicesDetails(params.id);
    setService(details.service);
  };

  const { title, img, price, _id } = service || {};

  const handleBooking = async (e) => {
    e.preventDefault();
    const newBooking = {
      email: data?.user?.email,
      name: data?.user?.name,
      address: e.target.address.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      serviceTitle: title,
      serviceID: _id,
      price: price,
    };
    const res = await fetch("http://localhost:3000/checkout/api/new-booking", {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
    if (res.status === 200) {
      toast.success("Service added successfully");
      e.target.reset();
      router.push("/my-bookings");
    }
  };

  useEffect(() => {
    loadService();
  }, [params]);
  return (
    <div className="my-20 container mx-auto">
      <div className="relative h-72 w-[90vw] max-w-full mx-auto mb-16">
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={img}
            alt="service"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Check Out {title}
          </h1>
        </div>
      </div>
      <div className="bg-[#F3F3F3] w-full max-w-4xl mx-auto p-12">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={data?.user?.name}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={new Date().toISOString().split("T")[0]}
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                defaultValue={data?.user?.email}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                readOnly
                defaultValue={price}
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary text-white font-semibold btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
