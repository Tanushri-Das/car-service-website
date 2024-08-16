"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const page = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  const loadData = async () => {
    const res = await fetch(
      `http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    console.log(data);
    setBookings(data.myBookings);
  };

  const handleDelete = async (id) => {
    const deleted = await fetch(
      `http://localhost:3000/my-bookings/api/delete-booking/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(deleted);
    const res = await deleted.json();
    if (res?.response?.deletedCount > 0) {
      toast.success("Service deleted successfully");
      loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, [session]);

  return (
    <div className="m-4 md:m-12">
      <div className="relative h-72">
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={"/assets/images/about_us/parts.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Service Card"
          />
        </div>
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            My Bookings
          </h1>
        </div>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, index) => (
                <tr key={booking._id}>
                  <th>{index + 1}</th>
                  <td>{booking.serviceTitle}</td>
                  <td>{booking.price}</td>
                  <td>{booking.date}</td>
                  <td className="flex items-center">
                    <Link href={`/my-bookings/update/${booking._id}`}>
                      <button>
                        <MdOutlineModeEdit className="text-xl" />
                      </button>
                    </Link>
                    <button onClick={() => handleDelete(booking._id)}>
                      <FiTrash className="text-xl ms-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
