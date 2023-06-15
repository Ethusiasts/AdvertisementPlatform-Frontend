import React from "react";
import Services from "./Services";

function Growth() {
  return (
    <>
      <div
        class="flex flex-col justify-center  sm:w-11/12 md:w-1/2  gap-y-10 mx-auto  font-Lato my-40 "
        data-aos="fade-up"
        id="services"
      >
        <div className="text-5xl font-black  ">Your growth is Our growth</div>
        <div className="text-xl font-normal text-gray-500 ">
          <span className="text-gray-700 text-5xl">At Advert,</span> We
          wholeheartedly believe in a simple but powerful motto: "Your growth is
          Our growth." We are committed to fostering a partnership where your
          success directly translates into our success.
        </div>
      </div>
      <Services />
    </>
  );
}

export default Growth;
