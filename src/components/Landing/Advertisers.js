import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { advertisementDescription, advertisementTitle } from "../../utils";

function Advertisers() {
  return (
    <div class="wrap w-5/6 mx-auto  font-Lato my-40">
      <div class="grid auto-cols-min  grid-cols-8 sm:grid-cols-1 md:grid-cols-8">
        <div class="row-span-full  flex flex-col gap-y-8 col-start-1 col-end-4  ">
          <h1 className="text-3xl font-bold mt-0">{advertisementTitle}</h1>
          <p className="mb-2 w-full text-justify  text-gray-500 sm:text-sm lg:text-xl  ">
            {advertisementDescription}
          </p>
          <p className="mb-2 w-full text-justify text-gray-500 sm:text-sm lg:text-xl  ">
            {advertisementDescription}
          </p>{" "}
          <p className="mb-2 w-full text-justify text-gray-500 sm:text-sm lg:text-xl  ">
            {advertisementDescription}
          </p>
          <button className="flex space-x-10 items-center justify-center px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-none drop-shadow-md sm:w-full lg:w-full  ">
            <span className="text-white text-xl font-bold sm:text-sm md:text-xl ">
              Create Advertisement
            </span>

            <BsArrowRight className="text-white" />
          </button>
        </div>
        <div className="row-span-full  col-start-5 col-end-9">
          <img
            className="object-cover rounded-lg "
            src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Advertisers;
