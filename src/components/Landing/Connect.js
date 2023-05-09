import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ConnectForm from "./Form/ConnectForm";

function Connect() {
  return (
    <div class=" grid  grid-cols-8 sm:grid-cols-1 md:grid-cols-8 bg-gray-700 p-10">
      <div class="row-span-full  flex flex-col col-start-1 col-end-5  justify-center align-center ">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=addis ababa&t=k&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row-span-full  col-start-5 col-end-9 ">
        <ConnectForm />
      </div>
    </div>
  );
}

export default Connect;
