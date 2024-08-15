import React from "react";
import ServiceCard from "../cards/ServiceCard";
import { getServices } from "@/services/getServices";

const Services = async () => {
  const { services } = await getServices();
  // console.log(services);
  return (
    <div className="m-12 md:mx-12 md:mb-12">
      <h3 className="font-bold text-primary text-[20px] text-center mb-1">
        Services
      </h3>
      <h5 className="text-[#151515] text-[45px] font-bold mb-3 text-center">
        Our Service Area
      </h5>
      <p className="text-[#737373] text-[16px] font-normal mb-10 w-full max-w-[717px] mx-auto text-center capitalize">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 &&
          services?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <button className="border border-primary py-2 px-4 rounded font-semibold text-primary">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
