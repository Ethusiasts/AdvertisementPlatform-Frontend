import React from "react";
import Services from "./Services";

function Growth() {
  return (
    <>
      <div class="flex flex-col justify-center  sm:w-full md:w-1/2  gap-y-10 mx-auto  font-Lato my-40">
        <div className="text-5xl font-black  ">Your growth is Our growth</div>
        <div className="text-xl font-normal text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure
          blanditiis laborum. Voluptatibus esse autem dolor quia quod quas
          consequatur quibusdam ea. Sint porro quibusdam eveniet impedit
        </div>
      </div>
      <Services />
    </>
  );
}

export default Growth;
