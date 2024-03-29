import React from "react";
import Services from "./Services";
import { BsArrowRight } from "react-icons/bs";

function Grow() {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="flex flex-col self-center items-center  sm:w-11/12 md:w-2/3  gap-y-10 mx-auto   font-Lato my-40 "
      >
        <div className="text-4xl font-black text-center   ">
          Your Growth is Our Growth
        </div>
        <div className="text-xl font-normal text-gray-500 text-center ">
          Measure the efficiency of each billboard in reaching your audience by
          Campaign monitoring, Live Analytics, and delivering ROI.
        </div>
        <button className="flex space-x-7 items-center justify-center px-2 py-3 bg-blue-500 hover:bg-blue-700 rounded-none drop-shadow-md sm:w-full md:w-1/2  ">
          <span className="text-white text-xl font-bold sm:text-sm md:text-xl ">
            Get Started
          </span>

          <BsArrowRight className="text-white" />
        </button>
      </div>
    </>
  );
}

export default Grow;
