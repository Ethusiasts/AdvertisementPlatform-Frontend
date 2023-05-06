import React from "react";
import Service from "./Service";
import { GiTatteredBanner, GiGamepad } from "react-icons/gi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaSwatchbook, FaBullhorn } from "react-icons/fa";
import { MdNotificationAdd } from "react-icons/md";
function Services() {
  return (
    <div class="flex flex-col justify-center w-2/3  gap-y-10 mx-auto  font-Lato my-40">
      <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        <div class="flex flex-col justify-center items-center border-r-2 border-b-2 border-blue-300 border-dashed">
          <Service
            heading="Native Ads"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, necessitatibus!"
            icon={
              <FaBullhorn
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-r-2 border-b-2 border-blue-300 border-dashed">
          <Service
            heading="Native Ads"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, necessitatibus!"
            icon={
              <GiTatteredBanner
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-b-2 border-blue-300 border-dashed">
          <Service
            heading="Native Ads"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, necessitatibus!"
            icon={
              <AiOutlineVideoCameraAdd
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>

        <div class=" flex flex-col justify-center items-center border-r-2 border-blue-300 border-dashed">
          <Service
            heading="Native Ads"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, necessitatibus!"
            icon={
              <FaSwatchbook
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-r-2 border-blue-300 border-dashed">
          <Service
            heading="Native Ads"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, necessitatibus!"
            icon={
              <MdNotificationAdd
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-blue-300 border-dashed">
          <Service
            heading="Native Ads"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, necessitatibus!"
            icon={
              <GiGamepad size={50} className="text-blue-200 hover:text-black" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
