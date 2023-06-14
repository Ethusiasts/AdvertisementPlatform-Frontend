import React, { useState } from "react";
import ModalComponent from "./modalContent";
import { toast } from "react-toastify";
import getUser from "../../utils/utils";

export default function ButtonWithModal({ modalContent }) {
  const user = getUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    if (!user) {
      toast.error("Please Login to Book this Billboard", { autoClose: 5000 });
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
        class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleOpenModal}
      >
        Book
      </button>
      <ModalComponent isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </ModalComponent>
    </>
  );
}
