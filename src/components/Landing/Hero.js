import React from "react";
import { heroSectionTitle, heroSectionDescription } from "../../utils/index";
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="wrap w-5/6 mx-auto  font-Lato"
      >
        <div className="grid grid-cols-10 ">
          <div className="row-span-full  col-span-6 col-end-11 self-center">
            <img
              className=" rounded-lg "
              src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
              alt=""
            />
          </div>
          <div className="row-span-full col-start-1 col-span-6 self-center p-4 text-black rounded-lg flex flex-col gap-y-5">
            <h1 className="sm:text-6xl md:text-7xl font-bold mt-0">
              {heroSectionTitle}
            </h1>
            <p className="mb-2 w-1/2 text-gray-700 sm:text-sm lg:text-xl sm:w-full md:w-1/2">
              {heroSectionDescription}
            </p>
            <button className="flex space-x-10 items-center justify-center px-5 py-3 bg-blue-500 hover:bg-blue-700 rounded-none drop-shadow-md sm:w-full md:w-1/2  ">
              <span className="text-white font-bold sm:text-xs md:text-xl text-left">
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
