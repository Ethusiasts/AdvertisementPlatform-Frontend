import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AdvertisementSelect from "./autocompleteDropDown";
import { createProposal } from "../../services/proposal";
import { CircularProgress } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { toast } from "react-toastify";
import getUser from "../../utils/utils";

export default function CreateProposalForm({ billboard }) {
  const user = getUser();
  const mutation = useMutation({
    mutationFn: (proposal) => {
      return createProposal(proposal);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Successfully Created");
      } else {
        toast.error("Could Not Create Your Proposal, Check Your Input ");
      }
    },
  });

  let daily = parseFloat(billboard?.daily_rate_per_sq);
  let prod = parseFloat(billboard?.production);

  const [proposalName, setProposalName] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [advertisement, setAdvertisement] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setTotalPrice(totalPrice + prod);
    } else {
      setTotalPrice(totalPrice - prod);
    }
  };

  const handleDataFromChild = (value) => {
    if (!value) {
      setTotalPrice(0 + isChecked ? prod : 0);
      return;
    }
    setAdvertisement(value);
    const width = parseFloat(value?.width);
    const height = parseFloat(value?.height);
    setTotalPrice(width * height * daily);
  };

  const handleProposalNameChange = (event) => {
    setProposalName(event.target.value);
  };
  const handleProposalDescriptionChange = (event) => {
    setProposalDescription(event.target.value);
  };

  const handleSubmit = (url) => {
    mutation.mutate({
      name: proposalName,
      description: proposalDescription,
      total_price: totalPrice,
      production: isChecked,
      user_id: user?.id,
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
              required
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
            required
          ></textarea>
        </div>
      </div>
      <FormControlLabel
        control={
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        }
        label="With Production"
      />

      <div className="w-full flex justify-end">
        <div class="bg-gray-100 rounded-md p-4">
          <p class="font-medium text-lg text-gray-800">
            Daily Price :{" "}
            <span class="text-xl font-bold text-green-500 w-auto">$</span>
            <span class="text-xl font-bold text-green-500 w-auto">
              {totalPrice}
            </span>
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          onClick={handleSubmit}
          class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? <CircularProgress /> : "Create Proposal"}
        </button>
      </div>
    </div>
  );
}
