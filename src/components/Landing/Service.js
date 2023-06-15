import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
function Service({ icon, heading, description }) {
  return (
    <div className="flex flex-col items-center justify-items-stretch gap-y-4  m-10">
      {icon}
      <div>{heading}</div>
      <div className=" text-gray-800">{description}</div>
      <button className="flex  justify-center opacity-0 space-x-10 items-center px-5  hover:opacity-100  rounded-none drop-shadow-md sm:w-full   ">
        <span className="text-blue-300  hover:text-blue-500   sm:text-sm md:text-sm ">
          Explore More
        </span>

        <BsArrowRight className="text-white" />
      </button>
    </div>
  );
}

export default Service;
