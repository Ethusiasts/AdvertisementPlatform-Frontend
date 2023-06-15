import React, { useState } from "react";
import ModalComponent from "./modalContent";
import { toast } from "react-toastify";
import getUser from "../../utils/utils";

export default function ButtonWithModal({ modalContent }) {
  const user = getUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    if (!user) {
      toast.error("Please Login to Create Proposal", { autoClose: 5000 });
      return;
    }

    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
        onClick={handleOpenModal}
      >
        Create Proposal
      </button>
      <ModalComponent isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </ModalComponent>
    </>
  );
}
