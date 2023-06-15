import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import MultiSelect from "./multiSelect";
import getUser from "../utils/utils";
import { createMultiProposal } from "../services/proposal";
import AdvertisementSelect from "./billboardDetails/autocompleteDropDown";
import { useNavigate } from "react-router-dom";

export default function CreateCardProposal({ cartItems }) {
  const user = getUser();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (proposal) => {
      return createMultiProposal(proposal);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Successfully Created");
        return navigate("/UserProposal");
      } else {
        toast.error("Could Not Create Your Proposal, Check Your Input ");
      }
    },
  });

  const [proposalName, setProposalName] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");
  const [advertisement, setAdvertisement] = useState(null);
  const [medias, setMedias] = useState([]);

  const handleDataFromSingle = (value) => {
    if (!value) {
      return;
    }
    setAdvertisement(value);
  };
  const handleDataFromMulti = (value) => {
    if (!value) {
      return;
    }
    setMedias(value);
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
      user_id: user?.id,
      medias: medias,
      advertisement_id: advertisement?.id,
      production: false,
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
      <div className="mb-4">
        <MultiSelect onData={handleDataFromMulti} items={cartItems} />
      </div>
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
            <AdvertisementSelect onData={handleDataFromSingle} />
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

      <div class="flex justify-end">
        <button
          onClick={handleSubmit}
          class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? <CircularProgress /> : "Create Proposal"}
        </button>
      </div>
    </div>
  );
}
