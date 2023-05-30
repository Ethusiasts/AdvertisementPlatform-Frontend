import React, { useState } from "react";

export default function ImageCard({ image, status }) {
  const [images, setImages] = useState({
    img1: "https://bookmybillboards.com/wp-content/uploads/2017/08/OUtdoor-advertising-in-United-Kingdom.jpg",
    img2: "https://bookmybillboards.com/wp-content/uploads/2017/08/glamour.jpg",
    img4: "https://bookmybillboards.com/wp-content/uploads/2017/07/DEL03-1.jpg",
  });
  const [activeImg, setActiveImage] = useState(image);

  return (
    <div class="relative">
      <img src={activeImg} alt="billboard" class="w-full h-96 object-cover" />
      <div class="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-transparent to-white"></div>

      <span class="absolute top-5 left-[5%] p-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-1xl font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {status}
      </span>
      <div className="absolute flex flex-row gap-4 bottom-16 left-[5%] h-24">
        <img
          src={images.img1}
          alt=""
          className="w-30 h-24 rounded-md cursor-pointer border-2 border-white-600"
          onClick={() => setActiveImage(images.img1)}
        />
        <img
          src={images.img2}
          alt=""
          className="w-30 h-24 rounded-md cursor-pointer border-2 border-white-600"
          onClick={() => setActiveImage(images.img2)}
        />
        <img
          src={images.img4}
          alt=""
          className="w-30 h-24 rounded-md cursor-pointer border-2 border-white-600"
          onClick={() => setActiveImage(images.img4)}
        />
      </div>

      <div class="absolute right-[5%] -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 -translate-y-44">
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-15 shadow-md">
          <div class="mx-auto max-w-xs px-8">
            <p class="text-base font-semibold text-gray-600">
              Pay once, own it forever
            </p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-gray-900">
                $349
              </span>
              <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                ETB
              </span>
            </p>
            <a
              href="/"
              class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book
            </a>
            <p class="mt-6 text-xs leading-5 text-gray-600">
              Invoices and receipts available for easy company reimbursement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
