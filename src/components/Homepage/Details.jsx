import React from "react";
import date from "../../../public/assets/images/details/date.png";
import phone from "../../../public/assets/images/details/phone.png";
import location from "../../../public/assets/images/details/location.png";
import Image from "next/image";

const Details = () => {
  return (
    <div className="bg-[#151515] px-10 py-16 rounded-xl m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <div>
            <Image src={date} alt="date-icon" width={40.86} height={40.86} />
          </div>
          <div className="ms-5">
            <p className="text-[16px] font-medium text-white">
              We are open monday-friday
            </p>
            <p className="text-[25px] font-bold text-white">
              7:00 am - 9:00 pm
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <Image src={phone} alt="phone-icon" width={40.86} height={40.86} />
          </div>
          <div className="ms-5">
            <p className="text-[16px] font-medium text-white">
              Have a question?
            </p>
            <p className="text-[25px] font-bold text-white">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <Image
              src={location}
              alt="location-icon"
              width={40.86}
              height={40.86}
            />
          </div>
          <div className="ms-5">
            <p className="text-[16px] font-medium text-white">
              Need a repair? our address
            </p>
            <p className="text-[25px] font-bold text-white">
              Liza Street, New York
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
