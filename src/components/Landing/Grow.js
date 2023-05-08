import React from "react";
import Services from "./Services";
import { BsArrowRight } from "react-icons/bs";

function Grow() {
  return (
    <>
      <div class="flex flex-col self-center items-center  sm:w-full md:w-2/3  gap-y-10 mx-auto   font-Lato my-40 ">
        <div className="text-4xl font-black text-center   ">
          Your Growth is Our Growth
        </div>
        <div className="text-xl font-normal text-gray-500 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure
          blanditiis laborum.
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
