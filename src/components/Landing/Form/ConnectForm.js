import React from "react";
import { TbArrowUpRhombus } from "react-icons/tb";
function ConnectForm() {
  return (
    <div>
      <div class="flex justify-center align-center font-Lato ">
        <div class="container mx-auto px-4 lg:px-10">
          <div class="w-full md:px-12 lg:w-12/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl">
            <div class="flex">
              <h1 class="font-bold text-3xl text-white ">
                {" "}
                Let us know yourself
              </h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name *"
              />

              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <button className="flex space-x-7 items-center justify-center px-2 py-3 text-white bg-blue-500 hover:bg-blue-700 rounded-none drop-shadow-md sm:w-full md:w-full  ">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <TbArrowUpRhombus
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="block rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 "
            size={30}
          />
        </div>
      </div>
    </div>
  );
}

export default ConnectForm;
