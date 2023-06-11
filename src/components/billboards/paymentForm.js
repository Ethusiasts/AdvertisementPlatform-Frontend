import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { approveContract, getContract } from "../../services/contract";
import { useState } from "react";

export default function PaymentForm({ name, type, mediaUrl }) {
  const user_id = 1;
  const { data: contract } = useQuery(
    ["contract"],
    () => {
      return getContract(user_id)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
    { user_id }
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [taxReference, setTaxReference] = useState("");
  const [amount, setAmount] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleTaxReferenceChange = (event) => {
    setTaxReference(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div class="bg-gray-100 rounded-lg shadow-lg p-16 w-9/10">
      <h2 class="text-xl text-gray-800 font-bold mb-4">Transaction Detail!</h2>
      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* <CheckboxFour /> */}
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="PhoneNumber"
            id="PhoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="amount"
            id="amount"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-blue-400 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-blue-400"
            type="text"
            name="Tax Reference"
            id="Tax Reference"
            placeholder="Tax Reference"
            value={taxReference}
            onChange={handleTaxReferenceChange}
          />
        </div>
        {/* <CheckboxFour /> */}
      </div>
      <div class="flex justify-end">
        <button
          // onClick={uploadImage}
          class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60"
        >
          Pay
        </button>
      </div>
    </div>
  );
}
