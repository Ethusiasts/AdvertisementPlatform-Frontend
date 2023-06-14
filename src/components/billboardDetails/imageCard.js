import axios from "axios";
import { React } from "react";
import { useQuery } from "@tanstack/react-query";

import ButtonWithModal from "./buttonWithModal";
import CreateProposalForm from "./createProposal";

export default function ImageCard({ image, billboard }) {
  const { data: location } = useQuery(["location"], () => {
    return axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${billboard.latitude}&lon=${billboard.longitude}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  });

  return (
    <div class="relative">
      <img src={image} alt="billboard" class="w-full h-96 object-cover" />
      {/* <div class="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-transparent to-white"></div> */}
      {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent to-black"></div> */}

      {billboard?.status === "Free" ? (
        <span className="absolute top-5 left-[5%] p-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-1xl font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {billboard?.status}
        </span>
      ) : (
        <span className="absolute top-5 left-[5%] p-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-1xl font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
          {billboard?.status}
        </span>
      )}

      <div className="absolute flex flex-row gap-4 bottom-1 left-[4%] h-24">
        <span class="text-2xl text-white text-bold">
          {location?.display_name}
        </span>
      </div>

      <div class="absolute right-[5%] -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 -translate-y-44">
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-15 shadow-md">
          <div class="mx-auto max-w-xs px-8">
            <p class="text-base font-semibold text-gray-600">
              Daily Rate Per sqm
            </p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-gray-900">
                ${billboard.daily_rate_per_sq}
              </span>
              <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                ETB
              </span>
            </p>
            <ButtonWithModal
              modalContent={
                <div>
                  <CreateProposalForm billboard={billboard} />
                </div>
              }
            />
            <p class="mt-6 text-xs leading-5 text-gray-600">
              Additional price with production{" "}
              <span class="text-red-800 text-bold text-2xl">
                +${billboard.production}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
