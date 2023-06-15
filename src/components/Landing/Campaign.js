import React from "react";
import Services from "./Services";
import { BsArrowRight } from "react-icons/bs";

function Campaign() {
  return (
    <>
      <div class="flex flex-col self-center items-center bg-gray-100 sm:w-full md:w-2/3 sm:p-20 md:p-40  gap-y-10 mx-auto   font-Lato my-40 ">
        <div className="text-4xl font-black text-center   ">
          Your Campaign is Our Campaign
        </div>
        <button className="flex space-x-7 items-center justify-center px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-none drop-shadow-md sm:w-full md:w-1/2  ">
          <span className="text-white text-xl font-bold sm:text-sm md:text-xl ">
            Get Started
          </span>

          <BsArrowRight className="text-white" />
        </button>
      </div>
    </>
  );
}

export default Campaign;
