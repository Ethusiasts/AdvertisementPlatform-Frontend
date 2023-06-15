import React from "react";

import Stat from "./Stat";
function Statistics() {
  return (
    <div id="about">
      <div
        className="wrap w-full mx-auto  font-Lato mb-10"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="grid grid-cols-10 mr-10">
          <div className=" col-span-8 col-end-11 mt-30 ">
            <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-5 gap-3 text-white ">
              <Stat
                styles={
                  "col-start-3 col-span-2  bg-gray-800 mb-5 row-span-2 text-center "
                }
                title={"Total Advertisements"}
                description={""}
                stat={500}
              />
              <Stat
                styles={
                  " col-start-2 col-span-1 row-span-3 bg-purple-600  mt-5 text-center "
                }
                title={"Happy Customer"}
                description={""}
                stat={10}
              />
              <Stat
                styles={
                  "bg-blue-600 row-span-3 row-start-4 col-span-2 text-center "
                }
                title={"Success"}
                description={""}
                stat={50}
              />{" "}
              <Stat
                styles={
                  "bg-red-400 row-span-4 row-start-3 col-start-3 col-span-2 text-center"
                }
                title={"Total Billboard"}
                description={""}
                stat={200}
              />
            </div>
          </div>
          <div className="row-span-full col-start-1 col-span-5 justify-center p-4 text-black rounded-lg flex flex-col gap-y-5">
            <h1 className="text-4xl font-bold mt-0">
              Just take a look at our excellence
            </h1>
            <p className="mb-2 w-2/3 text-gray-700 px-3 border-l-4 border-gray-500  -4sm:text-sm lg:text-sm sm:w-full md:w-1/2">
              Advert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
