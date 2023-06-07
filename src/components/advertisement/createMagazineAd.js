import React, { useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useMutation } from "@tanstack/react-query";
import { createAdvertisement } from "../../services/advertisement";

export default function CreateMagazineAdForm({ photo, title, description }) {
  const mutation = useMutation({
    mutationFn: (advertisement) => {
      return createAdvertisement(advertisement);
    },
    onSuccess: () => {
      alert("successfully posted");
    },
  });

  if (mutation.isLoading) {
    alert("is loading");
  }

  if (mutation.isSuccess) {
    alert("is successfull");
  }

  const [advertisementName, setAdvertisementName] = useState("");
  const [height, setHeight] = useState("");
  const [durationInHour, setDurationInHour] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState("");
  const [doc, setDoc] = useState(null);

  const handleAdvertisementNameChange = (event) => {
    setAdvertisementName(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleDurationInHourChange = (event) => {
    setDurationInHour(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleDocChange = (event) => {
    const file = event.target.files[0];
    setDoc(file);
  };

  const handleSubmit = (url) => {
    mutation.mutate({
      advertisement_name: advertisementName,
      advertisement_type: "magazine",
      duration_in_hour: null,
      advertisement_file: url,
      width: width,
      height: height,
      approved: false,
      quantity: quantity,
      user_id: 5,
    });
  };

  const uploadImage = (event) => {
    event.preventDefault();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (doc == null) return;
    const audioRef = ref(
      storage,
      `Advertisement/docs/` +
        `${year}-${month < 10 ? `0${month}` : month}-${
          day < 10 ? `0${day}` : day
        }` +
        `${doc.name}`
    );

    uploadBytes(audioRef, doc).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // console.log(url)
        handleSubmit(url);
        alert("Image Uploaded");
      });
    });
  };

  return (
    <div class="bg-gray-100 rounded-lg shadow-lg p-16 w-9/10">
      <h2 class="text-xl text-gray-800 font-bold mb-4">
        Make Your Brand Stand Out with a Stunning Magazine Ad!
      </h2>
      <p class="text-gray-700 text-base mb-4">
        Fill out the form below and let our team create an ad that speaks
        directly to your target audience. Capture attention and generate buzz
        for your brand with a carefully crafted ad. Get started now!
      </p>

      <div class="mb-4">
        <div className="w-full">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="Advertisement Name"
            id="Advertisement Name"
            placeholder="Advertisement Name"
            value={advertisementName}
            onChange={handleAdvertisementNameChange}
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="height"
            id="height"
            placeholder="height"
            value={height}
            onChange={handleHeightChange}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="Duration in hour"
            id="Duration in hour"
            placeholder="Duration in hour"
            value={durationInHour}
            onChange={handleDurationInHourChange}
          />
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="width"
            id="width"
            placeholder="width"
            value={width}
            onChange={handleWidthChange}
          />
        </div>
        {/* <CheckboxFour /> */}
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="Quantity"
            id="Quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>

      <div
        id="FileUpload"
        className="relative mb-4 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-blue-400 bg-gray-200 py-4 px-4 dark:bg-meta-4 sm:py-7.5"
      >
        <input
          type="file"
          accept="application/pdf"
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
          onChange={handleDocChange}
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                fill="#3C50E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                fill="#3C50E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                fill="#3C50E0"
              />
            </svg>
          </span>
          <p>
            <span className="text-blue-400">Click to upload doc</span> or drag
            and drop
          </p>
          <p className="mt-1">SVG, PNG, JPG or GIF</p>
          <p>(max, 800 X 800px)</p>
        </div>
      </div>
      <div class="flex justify-end">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semi-bold py-1 px-4 rounded mr-2 w-60">
          Cancel
        </button>
        <button
          onClick={uploadImage}
          class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60"
        >
          Save Only
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60">
          Save and Continue
        </button>
      </div>
    </div>
  );
}
