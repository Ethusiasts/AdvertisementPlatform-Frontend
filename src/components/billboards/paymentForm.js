import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { sendPaymentInfo } from "../../services/payment";
import { getCookie } from "../../utils";
import getUser from "../../utils/utils";

export default function PaymentForm({ billboard }) {
  const mutation = useMutation({
    mutationFn: (paymentInfo) => {
      return sendPaymentInfo(paymentInfo);
    },
    onSuccess: (data) => {
      console.log(data.checkout_url);
      window.open(data.checkout_url, data.checkout_url);
    },
  });

  const user = getUser();
  const userProfile = JSON.parse(getCookie("user_profile"));

  const [firstName, setFirstName] = useState(userProfile?.first_name);
  const [lastName, setLastName] = useState(userProfile?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setPhoneNumber] = useState(userProfile?.phone_number);
  const [taxReference, setTaxReference] = useState(
    `${user?.id}-${billboard.id}-${Date.now()}`
  );
  const [amount, setAmount] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber.replace("+251", "0"),
      tx_ref: taxReference,
      amount: amount,
      callback_url:
        "https://advertisementplatform-0xpy.onrender.com/api/v1/payments/",
      return_url: "/BillboardDashboard",
      currency: "ETB",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="bg-gray-100 rounded-lg shadow-lg p-16 w-9/10">
        <h2 class="text-xl text-gray-800 font-bold mb-4">
          Transaction Detail!
        </h2>
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
              p
              placeholder="Amount"
              value={amount}
              onChange={handleAmountChange}
              required
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
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60"
          >
            Pay
          </button>
        </div>
      </div>
    </form>
  );
}
