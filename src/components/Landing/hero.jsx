import React from "react";
import { heroSectionTitle, heroSectionDescription } from "../utils";
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div>
      <div class="wrap w-5/6 mx-auto  font-Lato">
        <div class="grid grid-cols-10 ">
          <div class="row-span-full  col-span-6 col-end-11 self-center">
            <img
              class="object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
              alt=""
            />
          </div>
          <div class="row-span-full col-start-1 col-span-6 self-center p-4 text-black rounded-lg flex flex-col gap-y-5">
            <h1 class="text-7xl font-bold mt-0">{heroSectionTitle}</h1>
            <p class="mb-2 w-1/2 text-gray-700 sm:text-sm lg:text-xl sm:w-full md:w-1/2">
              {heroSectionDescription}
            </p>
            <button class="flex space-x-3 items-center px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-none drop-shadow-md sm:w-full md:w-1/2  ">
              <span class="text-white text-xl font-bold sm:text-sm md:text-xl">
                Create Advertisement
              </span>

              <BsArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
