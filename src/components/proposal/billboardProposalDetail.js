import React from "react";
import BillboardCard from "./billboardCard";
export default function BillboardProposalPopup({
  name,
  description,
  total_price,
  approved,
}) {
  console.log(name, description, total_price, approved);
  return (
    <div class="flex items-center justify-center" style={{ width: "50rem" }}>
      {/* <div class="absolute inset-0 bg-gray-900 opacity-75"></div> */}
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-4">Proposal Details</h2>
        <div class="flex justify-center items-center gap-4">
          <div class="w-1/2">
            <BillboardCard />
          </div>
          <div class="w-1/2">
            <BillboardCard />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="flex flex-col mb-4 w-1/2">
            <label class="text-gray-600 font-bold mb-2" for="proposal-name">
              Name:
            </label>
            <span id="proposal-name" class="text-gray-800">
              {name}
            </span>
          </div>
          <div class="flex flex-col mb-4 w-1/2">
            <label class="text-gray-600 font-bold mb-2" for="proposal-desc">
              Description:
            </label>
            <span id="proposal-desc" class="text-gray-800">
              {description}
            </span>
          </div>
        </div>
        <div class="flex justify-end gap-4">
          <div class="flex flex-col mb-4">
            <label class="text-gray-600 font-bold mb-2" for="proposal-price">
              Total Price:
            </label>
            <span id="proposal-price" class="text-gray-800">
              $ {total_price}
            </span>
          </div>
          <div class="flex flex-col mb-4">
            <label class="text-gray-600 font-bold mb-2" for="proposal-status">
              Status:
            </label>
            <span id="proposal-status" class="text-gray-800">
              {approved}
            </span>
          </div>
        </div>
        <div class="flex justify-end">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Approve
          </button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
