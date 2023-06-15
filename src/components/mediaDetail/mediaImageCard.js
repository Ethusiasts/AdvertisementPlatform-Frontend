import { React } from "react";
import ButtonWithModal from "../billboardDetails/buttonWithModal";
import CreateMediaProposal from "./createMediaProposal";

export default function MediaImageCard({ image, media }) {
  return (
    <div class="relative">
      <img src={image} alt="media" class="w-full h-96 object-cover" />
      {/* <div class="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-transparent to-white"></div> */}
      {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent to-black"></div> */}

      <span className="absolute top-5 left-[5%] p-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-1xl font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Available
      </span>

      <div className="absolute flex flex-row gap-4 bottom-1 left-[4%] h-24">
        <span class="text-2xl text-white text-bold">{media?.channel_name}</span>
      </div>

      <div class="absolute right-[5%] -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 -translate-y-44">
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-15 shadow-md">
          <div class="mx-auto max-w-xs px-8">
            <p class="text-base font-semibold text-gray-600">
              Normal Price Per Second
            </p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-gray-900">
                ${media.normal}
              </span>
              <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                ETB
              </span>
            </p>
            <ButtonWithModal
              modalContent={
                <div>
                  <CreateMediaProposal media={media} />
                </div>
              }
            />
            <p class="mt-6 text-xs leading-5 text-gray-600">
              Additional price with production{" "}
              <span class="text-red-800 text-bold text-2xl">
                +${media.production}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
