import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AdvertisementSelect from "./autocompleteDropDown";
import { createProposal } from "../../services/proposal";

export default function CreateProposalForm({ billboard }) {
  console.log(billboard);
  const mutation = useMutation({
    mutationFn: (proposal) => {
      return createProposal(proposal);
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

  const [proposalName, setProposalName] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState("99.99");
  const [advertisement, setAdvertisement] = useState(null);
  const handleDataFromChild = (value) => {
    setAdvertisement(value);
  };

  const handleProposalNameChange = (event) => {
    setProposalName(event.target.value);
    console.log({
      name: proposalName,
      description: proposalDescription,
      total_price: totalPrice,
      user_id: 1,
      billboard_id: billboard?.id,
      media_agency_id: billboard?.media_agency_id,
      advertisement_id: advertisement?.id,
    });
  };
  const handleProposalDescriptionChange = (event) => {
    setProposalDescription(event.target.value);
  };
  const handleTotalPriceChange = (event) => {
    setTotalPrice(event.target.value);
  };

  const handleSubmit = (url) => {
    mutation.mutate({
      name: proposalName,
      description: proposalDescription,
      total_price: totalPrice,
      user_id: 1,
      billboard_id: billboard?.id,
      media_agency_id: billboard?.media_agency_id,
      advertisement_id: advertisement?.id,
    });
  };

  return (
    <div
      className="mb-6"
      style={{ width: "50rem" }}
      class="bg-gray-100 rounded-lg shadow-lg p-16 w-5/10"
    >
      <h2 class="text-xl text-gray-800 font-bold mb-4">
        Get your brand noticed with our billboard advertising!
      </h2>
      <p class="text-gray-600 text-base mb-4">
        Fill out the form below to request a proposal for advertising on one of
        our prime billboards. Our team will create a customized proposal to
        showcase your brand in the best possible light.
      </p>
      <div class="mb-4">
        <div class="flex justify-between gap-4">
          <div className="w-1/2">
            <input
              className="w-full rounded border border-stroke bg-gray py-4 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
              type="text"
              name="Proposal Name"
              id="Proposal Name"
              placeholder="Proposal Name"
              value={proposalName}
              onChange={handleProposalNameChange}
            />
          </div>
          <div className="w-1/2 mb-4">
            <AdvertisementSelect onData={handleDataFromChild} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div>
          <textarea
            rows={6}
            type="text"
            id="Proposal description"
            placeholder="Proposal Description"
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            value={proposalDescription}
            onChange={handleProposalDescriptionChange}
          ></textarea>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div class="bg-gray-100 rounded-md p-4">
          <p class="font-medium text-lg text-gray-800">
            Total Price:
            <input
              value={totalPrice}
              onChange={handleTotalPriceChange}
              class="text-xl font-bold text-green-500 w-auto"
              disabled
            />
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          onClick={handleSubmit}
          class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
